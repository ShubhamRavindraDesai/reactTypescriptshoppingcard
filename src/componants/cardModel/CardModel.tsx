import React from "react";
import "./cardModel.css";
import Product from "../product/Product";

const CardModel: React.FC<{item : ProductType; setModel: (value: boolean) =>void}> = ({setModel, item}) => {
  const handleOnclick = (e: React.MouseEvent) => {
    setModel(false);
  };

  return (
    <div className="modelBackground">
      <div >
      <Product item={item}/>
      </div>
            {item.title ? (
        <button id={item._id} className="deleteButton" onClick={handleOnclick}>
          &#10060;
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardModel;
