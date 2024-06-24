import { useParams } from "react-router-dom";
import Products from "../Home/Products";
import { useEffect,useState } from "react";

export default function CategoryPage() {
    const {name} = useParams();
    let [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
         
            const res = await fetch(`https://fakestoreapi.com/products/category/${name}`);
            if (res.ok) {
              const data = await res.json();
              console.log(data);
              setProducts(data);
            } else {
              throw new Error("Invalid response from server");
            }
         
        };
    
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  return (
    <>
    <Products products= {products}/>
    </>
  )
}
