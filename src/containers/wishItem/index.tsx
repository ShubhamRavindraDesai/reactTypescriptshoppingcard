import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../reducers/productReducer";
import { updateProducts } from "../../controllers/prodController";
import { Box, Button, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Iprops {
  item: ProductType;
}

const WishItem = ({ item }: Iprops) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(
    (state: GlobalState) => state.product.cartItems
  );
  const wishItems = useSelector(
    (state: GlobalState) => state.product.wishItems
  );

  const cartHandler = () => {
    updateProducts(item, { inCart: true }).then(() => {
      const newArr = [...cartItems, item];
      dispatch(productActions.getAllCartData(newArr));
    });
  };

  const wishHandler = () => {
    updateProducts(item, { inWish: false }).then(() => {
      const newArr = wishItems.filter((el) => el !== item);
      dispatch(productActions.getAllWishData(newArr));
    });
  };
  return (
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
      {item.inCart ? (
        <Button variant="contained">Added to Cart</Button>
      ) : (
        <Button variant="contained" onClick={cartHandler}>
          Add to Cart
        </Button>
      )}
      <Button variant="contained" onClick={wishHandler}>
        {" "}
        Remove from wish
      </Button>
      </Box>
   
  );
};

export default WishItem;
