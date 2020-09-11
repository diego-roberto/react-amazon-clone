import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(true);
  //clientSecret é como o Stripe sabe quanto deve cobrar do cliente na transação

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  useEffect(() => {
    //gera o secret usado para completar o pagamento
    //sempre que houver uma mudança na basket deve ser gerado outro secret para o valor a ser cobrado na transação

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`, //Stripe espera o total da transação em subunidade de moeda (R$: centavos | US$: cents | £: pence)
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    //funções do stripe
    event.preventDefault();
    setProcessing(true); //desabilita botão (payment__button) após um click para evitar reenvio da mesma transação

    //confirma o pagamento com o valor da transação
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        //pagamento com cartão
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //o que volta no método é um paymentIntent (= confirmação de pagamento), por ser uma promisse
        //confirmação da transação
        
        //registra no db o pedido do user com os itens e informações de pagamento
        db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
        });
        
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = event => {
    //observa as mudanças do CardElement e exibe qualquer erro enquanto o user digita o núm do cartão
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.lenght} itens</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="paymment__address">
            <p>{user?.email}</p>
            <p>Rua do React, 1</p>  {/* exibir user.address */}
            <p>São José, SC</p>     {/* exibir user.city */}
          </div>
        </div>

        <div className="payment__section">        
          <div className="payment__title">
            <h3>Review itens and delivery</h3>
          </div>
          <div className="payment__itens">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button
                  className="payment__button"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
