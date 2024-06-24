// import React from 'react'
import "./FeatureCard.css";
import { Link } from "react-router-dom";

export default function FeatureCard(Props) {
  return (
    <div className="container">
      <p className="mt-5"></p>
      <h1 className="h1-heading mt-5">ALL CATEGORIES</h1>
      {Props.categories.map((categorie, index) => {
        return (
          <>
            <Link
              to={`/products/category/${categorie}`}
              className="container cate"
              key={index}
            >
              <div className="card cate-p" >
                <h1 className="cate">{categorie || `Example Card`}</h1>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}
