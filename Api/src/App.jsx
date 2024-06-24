// import { useState } from 'react'
import "./App.css";
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Header/Navbar";
import ProductsDetail from "./components/ProductsDetail/ProductDetail";
import CategeryApi from "./components/CategeryApi/CategeryApi";
import Cart from "./components/Cart/Cart";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";


function App() {
  return (
      <>
      
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<ProductsDetail/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/category" element={<CategeryApi/>}/>
        <Route path="/products/category/:name" element={<CategoryPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
       </Routes>
       <Footer />
      </>
     
     
  );
}

export default App;


 {/* <Routes>
        <Route path="/" element={<Home />} />  
      </Routes> */}