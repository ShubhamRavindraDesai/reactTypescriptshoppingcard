import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {productActions} from '../../store/store'
import { createProduct } from "../../controllers/prodController";

const AddNewProduct: React.FC<{}> = () => {

  const [allInput, setAllInput] = useState({
    Title: "",
    image: "",
    discountPercentage: "",
    description: "",
    price: ''
  });

  // const allInput = useRef<HTMLInputElement>(null)

  const inputTitle = useRef<HTMLInputElement>(null);
  const inputDes = useRef<HTMLInputElement>(null);
  const inputImg = useRef<HTMLInputElement>(null);
  const inputPrice = useRef<HTMLInputElement>(null);
  const inputDiscountPercentage = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch()
  const items = useSelector((state: ProdData) => state.items)

  const location = useLocation();
  const obj = new URLSearchParams(location.search);
  const prefillValue = obj.get("q") || "React Test";

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (null !== inputTitle.current) {
      const newProd = {
        title: inputTitle.current.value,
        description: inputDes.current?.value,
        price: inputPrice.current?.value,
        images: inputImg.current?.value,
        discountPercentage: inputDiscountPercentage.current?.value,
      };
      createProduct(newProd).then((prod) => {
        const newArr = [...items, prod];
        dispatch(productActions.getAllData(newArr))
      });
      inputTitle.current.value = "";
      inputDes.current!.value = "";
      inputPrice.current!.value = "";
      inputImg.current!.value = "";
      inputDiscountPercentage.current!.value = "";
    } else {
      return;
    }
  };


const handleInput = (e: React.FormEvent) => {
  // console.log(e)
  setAllInput((prevstate) => {
    const value = (e.target as HTMLInputElement).value
    console.log(allInput)
    return {...prevstate, [(e.target as HTMLInputElement).name]: value}
    
  })
}


  return (
    <>
      <Box>
        <form onSubmit={submitHandler}>
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue={`${prefillValue}`}
          />
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            inputRef={inputTitle}
            onChange={handleInput}
            name='Title'
          />
          <TextField
            id="standard-basic"
            label="Description"
            name='Description'
            variant="standard"
            multiline
            rows={2}
            inputRef={inputDes}
            onChange={handleInput}
          />
          <TextField
            id="standard-basic"
            label="price"
            name='price'
            variant="standard"
            inputRef={inputPrice}
            onChange={handleInput}
          />
          <TextField
            id="standard-basic"
            label="image"
            name='price'
            variant="standard"
            inputRef={inputImg}
            onChange={handleInput}
          />
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <TextField
            id="standard-basic"
            label="discountPercentage"
            variant="standard"
            inputRef={inputDiscountPercentage}
            onChange={handleInput}
          />
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddNewProduct;
