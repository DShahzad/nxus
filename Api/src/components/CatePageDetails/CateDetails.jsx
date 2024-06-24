// import React from 'react'
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import Products from "../Home/Products";

export default function CateDetails() {
  let [products, setProducts] = useState([]);
    const {name} = useParams();
    useEffect(() => {
      const fetchProducts = async () => {
          const res = await fetch(`https://fakestoreapi.com/products/${name}`);
          if (res.ok) {
            const data = await res.json();
            console.log(data);
            setProducts(data);
          } else {
            throw new Error("Invalid response from server");
          } 
        };
    
        fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <Products products={products} />
  )
}
