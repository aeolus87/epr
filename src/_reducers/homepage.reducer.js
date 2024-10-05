// _reducers/homepageReducer.js
import { homepageConstants } from "../_constants/homepageConstants";

const initialState = {
  loading: false,
  items: [], // default structure for websites data including sitemaps
  error: null,
};

export function homepageReducer(state = initialState, action) {
  switch (action.type) {
    // GETTING WEBSITES
    case homepageConstants.GET_HOMEPAGE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null, // Clear error on new request
      };
    case homepageConstants.GET_HOMEPAGE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.homepage,
      };
    case homepageConstants.GET_HOMEPAGE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error, // Store the error message
      };

    default:
      return state;
  }
}
