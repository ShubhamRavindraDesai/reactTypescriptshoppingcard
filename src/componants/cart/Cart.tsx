import Product from "../product/Product";

const Cart: React.FC<{ cartItems: ProductType[] | [] }> = ({ cartItems }) => {
  return (
    <>
      {cartItems &&
        cartItems.map((el) => {
          return <Product key={Math.random().toString()} item={el} />;
        })}
    </>
  );
};
export default Cart;
