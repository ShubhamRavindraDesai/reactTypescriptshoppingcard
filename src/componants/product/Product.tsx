import React from "react";
import classes from "./Product.module.css";

const Product: React.FC<{ item: ProductType }> = ({ item }) => {
  return (
    <>
      <div className={classes.card}>
        <img className={classes.productImg} src={item.images} alt="" />
        <h3>{item.title} </h3>
        <p>{item.description}</p>
        <p>
          <b className={classes.price}>{item.price}</b>
        </p>
      </div>
    </>
  );
};

export default Product;
