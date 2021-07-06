import {
  ADD_NOTEBOOK,
  GET_NOTEBOOK,
  SET_LOADING,
  GET_RANDOM_COLOR,
} from "./types";
import errors from "./errortype";
import { tokenConfig } from "./authtype";
import axios from "axios";
export const getNotebooks = () => {
  return (dispatch, getState) => {
    dispatch(setloading());
    axios
      .get("http://localhost:9000/getnotes", tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_NOTEBOOK,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(errors(err.response.data));
      });
  };
};

export const addNotebook = (notebook) => {
  return (dispatch, getState) => {
    axios
      .post("http://localhost:9000/savenotes", notebook, tokenConfig(getState))
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADD_NOTEBOOK,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(errors(err));
      });
  };
};

export const getrandomColor = (color) => {
  return (dispatch) => {
    dispatch({
      type: GET_RANDOM_COLOR,
      payload: color,
    });
  };
};
export const setloading = () => {
  return {
    type: SET_LOADING,
  };
};