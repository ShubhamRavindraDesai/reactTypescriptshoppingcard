import {useEffect, useState}  from 'react'
import axios from 'axios';
import {useLocation} from 'react-router-dom'
import { Wrapper } from "./Item.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CustomButton from '../componants/button/Button';


const ProductDetailPage = ()=> {
  const [product, setProduct] = useState<ProductType>()
  const [itemInWishlist, setItemInWishlist] = useState(false);
  const [itemInCart, setItemInCart] = useState(false);
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  console.log(id)
  useEffect(() =>{
    axios.get(`http://127.0.0.1:8000/api/v1/products/${id}`).then((res) => {
      console.log(res.data)
      setProduct(res.data)
    })
  },[product])
  return (
    <Wrapper>
      {product && <div>
      <img src={product.images[0]} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h3>{product.brand}</h3>
        <h3>{product.stock}</h3>
        <h3>${product.price}</h3>
      
      <IconButton aria-label="delete" id={`${product?._id}`}>
        <DeleteIcon        />
      </IconButton>
      {itemInWishlist ? (
        <CustomButton>Added to wishlist</CustomButton>
      ) : (
        <CustomButton>
          Add to wishlist
        </CustomButton>
      )}
      {itemInCart ? (
        <CustomButton> Added to Cart</CustomButton>
      ) : (
        <CustomButton>
          Add to Cart
        </CustomButton>
      )}
      </div>}
    </Wrapper>
  )
};

export default ProductDetailPage;
