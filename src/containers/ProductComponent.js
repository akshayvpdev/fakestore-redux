import React from "react";
import { useSelector } from "react-redux";
import "./ProductComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (

          <article key={id}>
            <div className="img">
            <img src={image} />

            </div>
            <div className="text">
              <h4>{title}</h4>
              <h4>{category}</h4>
              <p>${price}</p>
            </div>
          </article>


    );
  });
  return <main className="grid">{renderList}</main>;
};

export default ProductComponent;
