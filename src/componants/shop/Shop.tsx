import React, { useState, useContext } from "react";
import { Wrapper } from "../shop/Cart.styles";
import { Grid } from "@mui/material";
import Product from "../product/Product";
import ProdContext from "../../storage/ProdContext";


const Shop: React.FC<{}> = () => {
  const prodContext = useContext(ProdContext)
  return (
    <Wrapper>
      <Grid container spacing={3} >
        {prodContext.products?.map((el) => (
          <Grid item key={el.id} xs={12} sm={4} >
            <Product
              item={el}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Shop;
