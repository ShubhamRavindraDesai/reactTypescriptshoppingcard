import { Wrapper } from "./CartItem.styles";
import CustomButton from "../button/Button";
import {useContext} from 'react'
import ProdContext from "../../storage/ProdContext";

const WishItem: React.FC<{
  item: ProductType;
}> = ({ item}) => {
  const prodContext = useContext(ProdContext)
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
              prodContext.wishHandler(item);
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
