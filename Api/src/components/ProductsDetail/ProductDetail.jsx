// import React from 'react'
import { useEffect, useState } from "react";
import { useParams , } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.css";

function ProductsDetail() {
  let [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id, "id");

  // 3 will render
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setProduct(data);
      } else {
        throw new Error("Invalid response from server");
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (product, redirect) => {
    console.log(product);
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = carts.find((item) => item.id === product.id);
    if (isProductExist) {
      const updateCart = carts.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1, 
          };
        }
        return item;
      });
      localStorage.setItem('cart',JSON.stringify(updateCart))
    }else{
      localStorage.setItem('cart',JSON.stringify([...carts,{...product, quantity:1}])) 
    } 
    alert("Product added to card")
    if(redirect){
      navigate('/cart')
    }
  };

  return (
    <div className="container main mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6 details">
          <h5 className="text-muted text-uppercase">{product.category}</h5>
          <h2>{product.title}</h2>
          <div className="details mb-3">
            <span className="badge badge-primary mr-2">
              <i></i>
            </span>
            <span className="text-muted">Reviews</span>
          </div>
          <p>{product.description}</p>
          <div className="sizeselection">
            <h4 className="size ">Size</h4>
            <select id="size" className="form-control w-100 px-5 my-3">
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
            </select>
          </div>
          <h4>Price : ${product.price}</h4>
          <button
            className="btn btn-primary my-4"
            onClick={() => handleClick(product, true)}
          >
            ADD TO CART{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetail;

// if(!Object.keys(product).length > 0) return <div className="d-flex justify-content-center align-items-center mt-5 p-5">Product Not Found</div>
