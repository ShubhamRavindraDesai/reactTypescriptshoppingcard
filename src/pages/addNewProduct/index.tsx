import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_PRODUCT } from "../../sagas/products/sagaActions";
import { Container, CssBaseline,  Typography } from "@mui/material";

const AddNewProduct = () => {
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
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div>
     
      <Typography component="h1" variant="h5">
        Add Product
      </Typography>
      <form  onSubmit={submitHandler}>
          <TextField
            id="standard-basic"
            label="Title"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleInput}
            name="Title"
            autoFocus
          />
          <TextField
            id="standard-basic"
            label="discountPercentage"
            variant="outlined"
          margin="normal"
          required
          fullWidth
            onChange={handleInput}
          />
          <TextField
            id="standard-basic"
            label="Price"
            name="price"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleInput}
          />
          <TextField
            id="standard-basic"
            label="Description"
            name="Description"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows={2}
            onChange={handleInput}
          />
        {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  </Container>
  );
};

export default AddNewProduct;
