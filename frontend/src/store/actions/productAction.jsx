import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/productSlice";

export const asyncloadproducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncupdateproduct = (product) => async (dispatch, getState) => {
  try {
    const { id, ...updatedData } = product;
    await axios.put(`/products/${id}`, updatedData);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.error("Update failed:", error);
  }
};

export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/products/${id}`);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.error("Delete failed:", error);
  }
};

export const asynccreateproduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.log(error);
  }
};
