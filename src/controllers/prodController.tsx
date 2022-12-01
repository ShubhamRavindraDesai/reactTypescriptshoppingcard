import axios from "axios";

export const getShopProducts = async () => {
  try {
    
    const response = await axios.get(`${process.env.REACT_APP_PATHURL}`);
    return response.data.products;
  } catch (err) {
    throw err;
  }
};

export const updateProducts = async (
  product: ProductType,
  data: { inWish?: boolean; inCart?: boolean }
) => {
  try {
    await axios.patch(`${process.env.REACT_APP_PATHURL}/${product._id}`, data);
  } catch (err) {
    throw err;
  }
};

export const deleteShopProducts = async (product: ProductType) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_PATHURL}/${product._id}`
    );
    return response.data.status;
  } catch (err) {
    throw err;
  }
};

export const getnewData = (state: any) => state.newData

export const createProduct = async (data: any) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_PATHURL}`, data);
  
      return response
    } catch (err) {
      throw err;
    }
  };


