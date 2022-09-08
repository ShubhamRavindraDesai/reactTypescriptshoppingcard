import React, { useState } from "react";
import CardModel from "../cardModel/CardModel";
import Product from "../product/Product";
import Shop from "../shop/Shop";
import classes from "./ShoppingCard.module.css";

const ShoppingCard: React.FC<{
  item: ProductType;
  itemDeleteHandler: (e: React.MouseEvent<Element, MouseEvent>) => void;
  cartDataHandler: (data: ProductType) => void;
  wishDataHandler: (data: ProductType) => void;
}> = ({ item, itemDeleteHandler, cartDataHandler, wishDataHandler }) => {
  const [model, setModel] = useState(false);
  const [itemInWishlist, setItemInWishlist] = useState(false);
  const [itemInCart, setItemInCart] = useState(false);

  return (
    <React.Fragment>
      <div>
        {model && <CardModel setModel={setModel} item={item}/>}
      </div>
      <section>
        <div className={classes.column}>
          <div
            onClick={() => {
              setModel(true);
            }}
          >
            <Product item={item} />
          </div>

          <button
            id={item._id}
            className={classes.deleteButton}
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
              itemDeleteHandler(e);
            }}
          >
            &#10060;
          </button>

          {itemInWishlist ? (
            <button className={classes.button}> Added to wishlist</button>
          ) : (
            <button
              className={classes.button}
              onClick={() => {
                wishDataHandler(item);
                setItemInWishlist(true);
              }}
            >
              Add to wishlist
            </button>
          )}
          {itemInCart ? (
            <button className={classes.button}> Added to Cart</button>
          ) : (
            <button
              className={classes.button}
              onClick={() => {
                cartDataHandler(item);
                setItemInCart(true);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default ShoppingCard;
