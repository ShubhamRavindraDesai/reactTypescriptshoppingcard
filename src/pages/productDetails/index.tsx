import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Button, Container } from "@mui/material";

const ProductDetailPage = () => {
  const [product, setProduct] = useState<ProductType>();

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data.data.product);
      })
      .catch((err) => {});
  }, [id]);

  return (
    <Container component="main" maxWidth="xs">
      {product ? (
        <div>
          <img src={product.images[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h3>{product.brand}</h3>
          <h3>{product.stock}</h3>
          <h3>${product.price}</h3>

          <IconButton aria-label="delete" id={`${product?._id}`}>
            <DeleteIcon />
          </IconButton>
          {product.inWish ? (
            <Button>Added to wishlist</Button>
          ) : (
            <Button>Add to wishlist</Button>
          )}
          {product.inCart ? (
            <Button> Added to Cart</Button>
          ) : (
            <Button>Add to Cart</Button>
          )}
        </div>
      ) : (
        <h1>''</h1>
      )}
    </Container>
  );
};

export default ProductDetailPage;
