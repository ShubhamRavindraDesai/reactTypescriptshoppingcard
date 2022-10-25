import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_PRODUCT } from "../../sagas/products/sagaActions";

const AddNewProduct: React.FC<{}> = () => {
  const [allInput, setAllInput] = useState({
    Title: "",
    image: "",
    discountPercentage: "",
    description: "",
    price: "",
  });

  const dispatch = useDispatch();
  const newProd = useSelector((state: ProdData) => state.newProd);
  console.log(newProd)

  const location = useLocation();
  const obj = new URLSearchParams(location.search);
  const prefillValue = obj.get("q") || "React Test";

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (allInput) {
      const newProd = allInput;
      dispatch({ type: CREATE_PRODUCT , payload: newProd})
    }
  };

  const handleInput = (e: React.FormEvent) => {
    setAllInput((prevstate) => {
      const value = (e.target as HTMLInputElement).value;
      return { ...prevstate, [(e.target as HTMLInputElement).name]: value };
    });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div >
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
            onChange={handleInput}
            name="Title"
          />
          <TextField
            id="standard-basic"
            label="discountPercentage"
            variant="standard"
            onChange={handleInput}
          />
          <TextField
            id="standard-basic"
            label="Price"
            name="price"
            variant="standard"
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
            label="Description"
            name="Description"
            variant="standard"
            multiline
            rows={2}
            onChange={handleInput}
          />
          <Button type="submit" variant="contained" onClick={submitHandler} endIcon={<SendIcon  />}>
            Submit
          </Button>
        </div>
      </Box>
    </>
  );
};

export default AddNewProduct;
