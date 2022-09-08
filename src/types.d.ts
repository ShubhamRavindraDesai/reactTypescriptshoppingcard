declare module "*.module.css";
interface ProductType {
  _id: string;
  title: string;
  images: string;
  description: string;
  price: string;
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
