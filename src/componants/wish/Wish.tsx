import Product from "../product/Product";
import classes from "../shoppingCard/ShoppingCard.module.css";

const Wish: React.FC<{ items: ProductType[] }> = ({ items }) => {
  return (
    <>
      <div className={classes.column}>
        {items && items.map((el) => <Product key={Math.random().toString()} item={el} />)}
      </div>
    </>
  );
};

export default Wish;
