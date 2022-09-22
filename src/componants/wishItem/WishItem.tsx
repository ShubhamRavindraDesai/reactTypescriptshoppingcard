import { Wrapper } from "./CartItem.styles";
import CustomButton from "../button/Button";
import {useDispatch, useSelector} from 'react-redux'
import {productActions} from './../../store/store'
import { updateProducts } from "../../controllers/prodController";

interface Iprops {
  item: ProductType;
}

const WishItem = ({ item}: Iprops) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: ProdData) => state.cartItems)
  const wishItems = useSelector((state: ProdData) => state.wishItems)

  const cartHandler = () => {
    updateProducts(item, { inCart: true }).then(() => {
      const newArr = [...cartItems, item];
      dispatch(productActions.getAllCartData(newArr))
    });
  }

  const wishHandler = () => {
    updateProducts(item, { inWish: false }).then(() => {
      const newArr = wishItems.filter((el) => el !== item)
      dispatch(productActions.getAllWishData(newArr))
    });
  }
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.price * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
        {item.inCart ? (
        <CustomButton> Added to Cart</CustomButton>
      ) : (
        <CustomButton
          onClick={cartHandler} 
        >
          Add to Cart
        </CustomButton>
      )}
          <CustomButton
            onClick={wishHandler}
          >
            Remove From WishList
          </CustomButton>
          <p>{item.price}</p>
        </div>
      </div>
      <img src={item.images[0]} alt={item.title} />
    </Wrapper>
  );
};

export default WishItem;
