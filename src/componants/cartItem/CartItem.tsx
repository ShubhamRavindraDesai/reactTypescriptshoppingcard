import React from "react";
import "../wishItem/CartItem.styles.ts";
import { Wrapper } from "../wishItem/CartItem.styles";
import CustomButton from "../button/Button";
import "./CartItem.styles";
import {useDispatch,useSelector} from 'react-redux'
import {productActions} from './../../store/store'
import { updateProducts } from "../../controllers/prodController";
interface Iprops {
  item: ProductType;
}
const CartItem = ({ item }: Iprops) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: ProdData) => state.cartItems)
  const wishItems = useSelector((state: ProdData) => state.wishItems)

  const cartHandler = () => {
    updateProducts(item, { inCart: false }).then(() => {
      const newArr = cartItems.filter((el) => el !== item)
      dispatch(productActions.getAllCartData(newArr))
    });
  }

  const wishHandler = () => {
    updateProducts(item, { inWish: true }).then(() => {
      const newArr = [...wishItems, item];
      dispatch(productActions.getAllWishData(newArr))
    });
  }
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <img src={item.images[0]} alt={item.title} />
        <div className="information">
          <p>Price: ${item.price}</p>
        </div>
      {item.inWish ? (
        <CustomButton>Added to wishlist</CustomButton>
      ) : (
        <CustomButton
          onClick={wishHandler}
        >
          Add to wishlist
        </CustomButton>
      )}
        <CustomButton
          onClick={cartHandler}
        >
          Remove From Cart
        </CustomButton>
        <p>{item.price}</p>
      </div>
    </Wrapper>
  );
};

export default CartItem;
