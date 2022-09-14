import React, {useContext } from "react";
import { Wrapper } from "../shop/Cart.styles";
import { Grid } from "@mui/material";
import WishItem from "../wishItem/WishItem";
import ProdContext from "../../storage/ProdContext";
const Wish: React.FC<{}> = () => {
  const prodContext = useContext(ProdContext)

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {prodContext.wishProducts?.map((el) => (
          <Grid item key={el.id} xs={12} sm={4}>
            <WishItem
              item={el}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
export default Wish;
