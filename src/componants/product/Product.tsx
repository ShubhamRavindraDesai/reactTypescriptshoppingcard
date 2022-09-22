import { Wrapper } from "./Item.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CustomButton from "../button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "./../../store/store";
import { updateProducts } from "../../controllers/prodController";
import { Box } from "@mui/material";
interface Iprops {
  item: ProductType;
}

const Product = ({ item }: Iprops) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state: ProdData) => state);

  const deleteHandler = () => {
    const newArr = state.items.filter((el) => el !== item);
    dispatch(productActions.getAllData(newArr));
  };
  const cartHandler = () => {
    updateProducts(item, { inCart: true }).then(() => {
      const newArr = [...state.cartItems, item];
      dispatch(productActions.getAllCartData(newArr));
    });
  };

  const wishHandler = () => {
    updateProducts(item, { inWish: true }).then(() => {
      const newArr = [...state.wishItems, item];
      dispatch(productActions.getAllWishData(newArr));
    });
  };

  return (
    <Wrapper>
      <div onClick={() => navigate(`/shop/${item._id}`)}>
        <img src={item.images[0]} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Box sx={{ display: "flex" }}>
        <IconButton
          aria-label="delete"
          id={`${item._id}`}
          onClick={deleteHandler}
        >
          <DeleteIcon />
        </IconButton>
        {state.wishItems.includes(item) ? (
          <CustomButton>Added to wishlist</CustomButton>
        ) : (
          <CustomButton onClick={wishHandler}>Add to wishlist</CustomButton>
        )}
        {state.cartItems.includes(item) ? (
          <CustomButton> Added to Cart</CustomButton>
        ) : (
          <CustomButton onClick={cartHandler}>Add to Cart</CustomButton>
        )}
      </Box>
    </Wrapper>
  );
};

export default Product;
