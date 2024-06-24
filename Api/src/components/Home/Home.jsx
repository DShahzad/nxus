import "./index.css";
import { useEffect, useState } from "react";
// import { apidata } from "../Api/apidata";
import Carousal from "../Carousel/Carousel";
import Products from "./Products";
import CategeryApi from "../CategeryApi/CategeryApi";


function Home() {
  // 1 this will render
  let [products, setProducts] = useState([]);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(true);

 

  // 3 will render
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=12");
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setProducts(data);
        } else {
          throw new Error("Invalid response from server");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error === true) {
    return (
      <>
        <div className="container">
          <h1>Something went wrong</h1>
        </div>
      </>
    );
  }

  // 2 this will render
  if (loading === true) {
    return (
      <>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  // 4 this will render
  else {
    return (
      <>
        <Carousal />
        <CategeryApi/>
        <div className="container">
        <h1 className="P-heading">MOST FEATURED PRODUCTS</h1>
    </div>
        <Products products={products} />
      </>
    );
  }
}
export default Home;
