import { GET_ERRORS } from "../actions/types";

const initialState = {};

const errorreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};

export default errorreducer;
