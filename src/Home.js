import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">    

      <div className="home__container">
        
          <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
            alt=""
          />

        {/* lista dos proutos */}        
        {/* tudo hardcoded para testes, mas a intenção é buscar os valores do db... */}        

        <div className="home__row">
          <Product
            id="1231"
            title="Livro the Lean Startup"
            price={29.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />

          <Product            
            id="1234"
            title="Apple iPad Pro (12.9 polegadas, Wi-Fi, 128GB) - Silver (4ª Geração)"
            price={599.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1233"
            title="Smart Watch"
            price={99.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />

          <Product
            id="1232"
            title="Batedeira Kenwood 5 litros vidro"
            price={239.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />

          <Product
            id="1235"
            title="Amazon Echo (3ª geração) | Smart speaker com assistente Alexa"
            price={98.99}
            rating={3}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />

          <Product
            id="1236"
            title="Livro the Lean Startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1237"
            title="Monitor Samsung LC49RG90SSUXEN 49' Curved LED - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1249.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
