import React, { useState } from "react";
import ShoppingCard from "./../shoppingCard/ShoppingCard";

const Shop: React.FC<{
  items: ProductType[];
  cartItems: ProductType[];
  wishItems: ProductType[];
}> = ({ items, cartItems, wishItems }) => {
  const [cardsArr, setCardsArr] = useState(items);
  const [cartProducts, setcartProducts] = useState(cartItems);
  const [wishProducts, setWishProducts] = useState(wishItems);

  const changeItems = (e: React.MouseEvent) => {
    e.preventDefault();
    setCardsArr((prevItems) => {
      return prevItems.filter((el) => el._id != e.currentTarget.id);
    });
  };

  const cartDataHandle = (data: ProductType) => {
    setcartProducts((prevData) => {
      const arr = prevData?.map((el) => el);
      const obj = [...arr, data];
      localStorage.setItem("products", JSON.stringify(obj));
      return obj;
    });
  };

  const wishHandle = (data: ProductType) => {
    setWishProducts((prevData) => {
      const arr = prevData?.map((el) => el);
      const obj = [...arr, data];
      localStorage.setItem("WishProducts", JSON.stringify(obj));
      return obj;
    });
  };

  return (
    <>
      {cardsArr &&
        cardsArr.map((el) => {
          return (
            <ShoppingCard
              key={el._id}
              item={el}
              itemDeleteHandler={changeItems}
              cartDataHandler={cartDataHandle}
              wishDataHandler={wishHandle}
            />
          );
        })}
    </>
  );
};

export default Shop;
