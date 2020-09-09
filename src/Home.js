import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
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
        

        <div className="home__row">
          <Product
            id="1231"
            title="Livro the Lean Startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />

          <Product
            id="1232"
            title="Livro the Lean Startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1233"
            title="Livro the Lean Startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />

          <Product
            id="1234"
            title="Livro the Lean Startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />

          <Product
            id="1235"
            title="Livro the Lean Startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
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
            title="Livro the Lean Startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
