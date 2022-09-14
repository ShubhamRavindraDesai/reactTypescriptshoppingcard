import React, {useContext} from "react";
import "../wishItem/CartItem.styles.ts";
import { Wrapper } from "../wishItem/CartItem.styles";
import CustomButton from "../button/Button";
import "./CartItem.styles";
import ProdContext from "../../storage/ProdContext";

const CartItem: React.FC<{
  item: ProductType;
}> = ({ item }) => {
  const prodContext = useContext(ProdContext)
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
            prodContext.cartDataHandler(item);
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
