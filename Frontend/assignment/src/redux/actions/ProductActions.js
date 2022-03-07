import { FETCH_ALL, CREATE, UPDATE, DELETE, FAVOURITE } from './actionTypes';

import * as api from './api';

export const getProducts = () => async (dispatch) => {
  try {
    const data  = await api.fetchProducts();
    console.log(data)

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = (post) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const favouriteProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.favouriteProduct(id);

    dispatch({ type: FAVOURITE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};