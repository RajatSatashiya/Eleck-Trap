import React from "react";
import {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      setProducts(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const displayProducts = products.map((item, index) => {
    return (
      <div key={index} className="product">
        <img src={item.image} alt={item.title} className="product-image" />
        <h3>{item.title}</h3>
        <Link to={`/product/${item.id}`}>More Info</Link>
      </div>
    )
  });

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <>
    <div className="products">
      {displayProducts}
    </div>
    </>
  )
}

export default Home;
