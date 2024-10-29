// _actions/homepage.actions.js
import { homepageConstants } from "../_constants";
import { homepageService } from "../_services";

export const homepageActions = {
  getHomepageData,
};

function getHomepageData() {
  return (dispatch) => {
    dispatch(request());

    return homepageService
      .getHomepageData()
      .then(
        (data) => {
          dispatch(
            success({
              scrimEvents: data.scrimEvents || [],
              clanManagers: data.clanManagers || [],
              maps: data.maps || [],
            })
          );
        },
        (error) => {
          dispatch(failure(error.toString()));
        }
      )
      .catch((error) => {
        dispatch(failure(error.toString()));
      });
  };

  function request() {
    return { type: homepageConstants.GET_HOMEPAGE_DATA_REQUEST };
  }

  function success(data) {
    return {
      type: homepageConstants.GET_HOMEPAGE_DATA_SUCCESS,
      data: data,
    };
  }

  function failure(error) {
    return { type: homepageConstants.GET_HOMEPAGE_DATA_FAILURE, error };
  }
}
