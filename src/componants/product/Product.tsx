import { Wrapper } from "./Item.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "./../../store/reducers/productReducer";
import {
  deleteShopProducts,
  updateProducts,
} from "../../controllers/prodController";
import { Box, Button, CardMedia } from "@mui/material";
interface Iprops {
  item: ProductType;
}

const Product = ({ item }: Iprops) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state: GlobalState) => state);

  const deleteHandler = () => {
    deleteShopProducts(item).then((resData) => {
      const newArr = state.product.items.filter((el) => el !== item);
      dispatch(productActions.getAllData(newArr));
    });
  };
  const cartHandler = () => {
    updateProducts(item, { inCart: true }).then(() => {
      const newArr = [...state.product.cartItems, item];
      dispatch(productActions.getAllCartData(newArr));
    });
  };

  const wishHandler = () => {
    updateProducts(item, { inWish: true }).then(() => {
      const newArr = [...state.product.wishItems, item];
      dispatch(productActions.getAllWishData(newArr));
    });
  };

  return (
    <>
      <Box sx={{ borderRadius: "16px" }}>
        <Box
          onClick={() => navigate(`/shop/${item._id}`)}
          sx={{ borderRadius: "16px" }}
        >
          <CardMedia
            height="250"
            component="img"
            src={item.images[0]}
            sx={{ padding: "1em 1em 0 1em" }}
          />
          <h3>{item.title}</h3>
          <p>{item.description.substring(0, 30)}...</p>
          <h3>${item.price}</h3>
        </Box>
        <Box>
          <IconButton
            aria-label="delete"
            id={`${item._id}`}
            onClick={deleteHandler}
          >
            <DeleteIcon />
          </IconButton>
          {state.product.wishItems.includes(item) ? (
            <Button variant="contained">Added to wishlist</Button>
          ) : (
            <Button
              variant="contained"
              startIcon={<FavoriteIcon />}
              onClick={wishHandler}
            >
              Add to wishlist
            </Button>
          )}
          {state.product.cartItems.includes(item) ? (
            <Button variant="contained">Added to Cart</Button>
          ) : (
            <Button
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              onClick={cartHandler}
            >
              Add to Cart
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Product;
