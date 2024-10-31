// reducers/applicationReducer.js
import { applicationConstants } from "../_constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case applicationConstants.SUBMIT_APPLICATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case applicationConstants.SUBMIT_APPLICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case applicationConstants.SUBMIT_APPLICATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default applicationReducer;
