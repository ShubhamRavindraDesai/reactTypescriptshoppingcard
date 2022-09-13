import React from "react";
import "../wishItem/CartItem.styles.ts";
import { Wrapper } from "../wishItem/CartItem.styles";
import CustomButton from "../button/Button";
import "./CartItem.styles";

const CartItem: React.FC<{
  item: ProductType;
  removeFromCartHandler: (data: ProductType) => void;
}> = ({ item, removeFromCartHandler }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <img src={item.images[0]} alt={item.title} />
        <div className="information">
          <p>Price: ${item.price}</p>
        </div>

        <CustomButton
          onClick={() => {
            removeFromCartHandler(item);
          }}
        >
          Remove From Cart
        </CustomButton>
        <p>{item.price}</p>
      </div>
    </Wrapper>
  );
};

export default CartItem;
