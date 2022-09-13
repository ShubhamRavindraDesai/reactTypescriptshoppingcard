import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";

const AddNewProduct: React.FC<{
  productHandler: (data: ProdAddNew) => void;
}> = ({ productHandler }) => {
  const inputTitle = useRef<HTMLInputElement>(null);
  const inputDes = useRef<HTMLInputElement>(null);
  const inputImg = useRef<HTMLInputElement>(null);
  const inputPrice = useRef<HTMLInputElement>(null);
  const [itemObj, setItemObj] = useState<ProdAddNew>();
  const location = useLocation();
  const obj = new URLSearchParams(location.search);
  const prefillValue = obj.get("q");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputTitle.current !== null) {
      const newProd = {
        title: inputTitle.current.value,
        description: inputDes.current?.value,
        images: inputImg.current?.value,
        price: inputPrice.current?.value,
      };
      setItemObj(newProd);
      console.log(newProd);
      // if (newProd) {
      //   const reqData = newProd
      //   axios
      //     .post("http://127.0.0.1:8000/api/v1/products", reqData)
      //     .then(function (res) {
      //       console.log(res);
      //     });
      // }

      productHandler(newProd);
    } else {
      return;
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Title"
          variant="standard"
          ref={inputTitle}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue={`${prefillValue}`}
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
          variant="standard"
          ref={inputDes}
        />
        <TextField
          id="standard-basic"
          label="price"
          variant="standard"
          ref={inputPrice}
        />
        <Button
          variant="contained"
          onClick={submitHandler}
          endIcon={<SendIcon />}
        >
          Add
        </Button>
      </Box>
    </>
  );
};

export default AddNewProduct;
