declare module "*.module.css";
declare module "*.gif";

interface Data {
  items: ProductType[];
}

interface CountAction {
  type: CountActionKind;
  payload: { items: ProductType[] };
}


interface ContextTypes {
  products: ProductType[] | undefined;
  cartProducts: ProductType[];
  wishProducts: ProductType[];
  productHandler: (data: ProductType) => void;
  cartDataHandler: (data: ProductType) => void;
  wishHandler: (data: ProductType) => void;
  cartProductHandler: (data: ProductType) => void;
  wishProductHandler: (data: ProductType) => void;
  productFromHandler: (data: ProdAddNew) => void;
}
interface ProductType {
  _id: string;
  title: string;
  images: string[];
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  inWish: boolean;
  inCart: boolean;
}

interface ProdAddNew {
  title: string;
  description: string | undefined;
  images: string | undefined;
  price: string | undefined;
}
// declare module "*.svg" {
//     const content: any;
//     export default content;
//   }

interface Products {
  products: ProductType[];
}
