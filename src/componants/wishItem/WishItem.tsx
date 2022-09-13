import { Wrapper } from "./CartItem.styles";
import CustomButton from "../button/Button";

const WishItem: React.FC<{
  item: ProductType;
  removeFromWish: (data: ProductType) => void;
  cartHandler: (data: ProductType) => void;
}> = ({ item, removeFromWish, cartHandler }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.price * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <CustomButton
            onClick={() => {
              removeFromWish(item);
            }}
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
