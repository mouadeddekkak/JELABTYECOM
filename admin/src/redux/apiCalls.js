import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux";
import {  publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import {
  deleteUsersFailure,
  deleteUsersStart,
  deleteUsersSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  updateUsersFailure,
  updateUsersStart,
  updateUsersSuccess
} from "./usersRedux";
import { deleteordersFailure, deleteordersStart, deleteordersSuccess, getordersFailure, getordersStart, getordersSuccess, updateordersFailure, updateordersStart, updateordersSuccess } from "./ordersRedux";

// User login

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    window.location.replace("/");
  } catch (err) {
    dispatch(loginFailure());
  }
};
// User logout

export const deconnecter = async (dispatch) => {
  dispatch(logout());
};
// Send mail

export const sendMail = async (mail) => {
  try {
    await userRequest.post("/newsletter/send", mail);
  } catch (err) {}
};
// Get products

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};
// Delete a product

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
// Update a product

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess( id, res.data ));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
// Get orders

export const getOrders = async (dispatch) => {
  dispatch(getordersStart());
  try {
    const res = await userRequest.get("/orders");
    dispatch(getordersSuccess(res.data));
  } catch (err) {
    dispatch(getordersFailure());
  }
};
// Delete an order

export const deleteOrders = async (id, dispatch) => {
  dispatch(deleteordersStart());
  try {
    await userRequest.delete(`/orders/${id}`);
    dispatch(deleteordersSuccess(id));
  } catch (err) {
    dispatch(deleteordersFailure());
  }
};
// Update an order

export const updateOrders = async (id, order, dispatch) => {
  dispatch(updateordersStart());
  try {
    const res = await userRequest.put(`/orders/${id}`, order);
    dispatch(updateordersSuccess( id, res.data ));
  } catch (err) {
    dispatch(updateordersFailure());
  }
};
// Add a product

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

// Get users

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};
// Update a user

export const updateUsers = async (id, user, dispatch) => {
  dispatch(updateUsersStart());
  try {
    const res = await userRequest.put(`/users/${id}`, user);
    dispatch(updateUsersSuccess( id, res.data ));
  } catch (err) {
    dispatch(updateUsersFailure());
  }
};
// Delete a user

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUsersStart());
  try {
    const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUsersSuccess(id));
  } catch (err) {
    dispatch(deleteUsersFailure());
  }
};

