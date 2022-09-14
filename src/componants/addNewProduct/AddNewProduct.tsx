import { useRef, useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import ProdContext from "../../storage/ProdContext";

const AddNewProduct: React.FC<{}> = () => {
  const prodContext = useContext(ProdContext);

  const inputTitle = useRef<HTMLInputElement>(null);
  const inputDes = useRef<HTMLInputElement>(null);
  const inputImg = useRef<HTMLInputElement>(null);
  const inputPrice = useRef<HTMLInputElement>(null);

  const [itemObj, setItemObj] = useState<{
    title: string;
    description: string;
    price: string;
  }>();

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
        image: inputImg.current?.value,
      };
      console.log(newProd);
      inputTitle.current.value = "";
      inputDes.current!.value = "";
      inputPrice.current!.value = "";
      inputImg.current!.value = "";
    } else {
      return;
    }
  };

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
          />
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            multiline
            rows={2}
            inputRef={inputDes}
          />
          <TextField
            id="standard-basic"
            label="price"
            variant="standard"
            inputRef={inputPrice}
          />
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            ref={inputImg}
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
