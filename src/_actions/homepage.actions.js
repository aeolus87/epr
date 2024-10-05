// _actions/homepageActions.js
import { homepageConstants } from "../_constants";
import { homepageService } from "../_services";

export const homepageActions = {
  getHomepageData,
};
// Action to get all homepage data
function getHomepageData() {
  return (dispatch) => {
    dispatch(request());
    return homepageService.getHomepageData().then(
      (homepage) => {
        dispatch(success(homepage));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: homepageConstants.GET_HOMEPAGE_DATA_REQUEST };
  }

  function success(homepage) {
    return { type: homepageConstants.GET_HOMEPAGE_DATA_SUCCESS, homepage };
  }

  function failure(error) {
    return { type: homepageConstants.GET_HOMEPAGE_DATA_FAILURE, error };
  }
}
