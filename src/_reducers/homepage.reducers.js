// _reducers/homepageReducer.js
import { homepageConstants } from "../_constants";

const initialState = {
  loading: false,
  data: {
    scrimEvents: [],
    clanManagers: [],
    maps: [],
  },
  error: null,
};

export const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case homepageConstants.GET_HOMEPAGE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case homepageConstants.GET_HOMEPAGE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data, // this should work if you are dispatching the data correctly
      };
    case homepageConstants.GET_HOMEPAGE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default homepageReducer;
