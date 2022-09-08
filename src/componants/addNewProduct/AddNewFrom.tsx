import React, {
  useRef,
  useState,
  useEffect,
  LegacyRef,
  MutableRefObject,
} from "react";
import "./addNewFrom.css";

const AddNewFrom: React.FC<{addProd: (data: ProdAddNew)=> void}> = ({addProd}) => {
  const inputTitle = useRef<HTMLInputElement>(null);
  const inputDes = useRef<HTMLInputElement>(null);
  const inputImg = useRef<HTMLInputElement>(null);
  const inputPrice = useRef<HTMLInputElement>(null);
  const [itemObj, setItemObj] = useState<ProdAddNew>();

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
      addProd(newProd)
    } else {
      return;
    }
    console.log(inputTitle.current);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="newproduct__controls">
        <div className="new-product__control">
          <label>Title</label>
          <input type="text" ref={inputTitle} />
        </div>
        <div className="newproduct__control">
          <label>Image</label>
          <input type="text" ref={inputImg} />
        </div>
        <div className="newproduct__control">
          <label>Description</label>
          <input type="text" ref={inputDes} />
        </div>
        <div className="newproduct__control">
          <label>price</label>
          <input type="" ref={inputPrice} />
        </div>
      </div>
      <div className="newproduct__actions">
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};
export default AddNewFrom;
