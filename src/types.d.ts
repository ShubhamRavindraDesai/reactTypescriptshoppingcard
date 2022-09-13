declare module "*.module.css";
declare module "*.gif";
interface ProductType {
  id: string;
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
