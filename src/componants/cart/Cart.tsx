import Product from "../product/Product";

const Cart: React.FC<{ cartItems: ProductType[] | [] }> = ({ cartItems }) => {
  console.log(cartItems)
  return (
    <>
      {cartItems &&
        cartItems.map((el) => {
          return <Product item={el} />;
        })}
    </>
  );
};
export default Cart;
