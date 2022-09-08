import AddNewFrom from "./AddNewFrom";
import "./addNewFrom.css";
const AddNewProduct: React.FC<{
  productHandler: (data: ProdAddNew) => void;
}> = ({ productHandler }) => {
  return (
    <>
      <div className="newproduct">
        <AddNewFrom addProd={productHandler} />
      </div>
    </>
  );
};

export default AddNewProduct;
