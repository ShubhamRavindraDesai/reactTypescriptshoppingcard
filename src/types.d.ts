declare module "*.module.css";
declare module "*.gif";
declare module "*.jpg";

interface GlobalState{
  product: ProdData,
  user:UserState
}

interface UserState{

  userData: {
    token: string
  }
  
}

interface UserData{

    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface ProdData {
  items: ProductType[];
  wishItems: ProductType[];
  cartItems: ProductType[];
  newProd: ProductType
}
enum CountActionKind {
  RESDATA = "RESDATA",
  CHANGEDATA = "CHANGEDATA",
}


interface CountAction {
  type: CountActionKind;
  payload: { items: ProductType[] };
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

interface CreateAssetType {
  brandName: string;
  assetName: string;
  assetType: string;
  category: string;
  modelNo: string;
  description: string;
  status: string;
  usability: string;
  Title: string
}