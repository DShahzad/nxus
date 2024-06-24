// import React from 'react'
import FeatureCard from "../FeatureCard/FeatureCard";
import { useEffect, useState } from "react";

 function CategeryApi() {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products/categories");
            if (res.ok) {
              const data = await res.json();
              console.log(data);
              setCategories(data);
            } else {
              throw new Error("Invalid response from server");
            } 
          };
      
          fetchProducts();
      
      }, []);

      if(categories===0){
        return <div>Loading...</div>
      }

  return (
    <FeatureCard categories={categories}/>  
  )
}
export default CategeryApi;
