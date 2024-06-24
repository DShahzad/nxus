// import React from 'react'
import Products from "../Home/Products";
import { useEffect, useState } from "react";

function ProductsPage() {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
         
            const res = await fetch("https://fakestoreapi.com/products");
            if (res.ok) {
              const data = await res.json();
              console.log(data);
              setProducts(data);
            } else {
              throw new Error("Invalid response from server");
            }
         
        };
    
        fetchData();
      }, []);
  return (
    <>
    <div className="container my-5">
        <h2>ALL PRODUCTS</h2>
    </div>
    <Products products={products}/>
    </>
  )
}

export default ProductsPage