// actions/applicationActions.js
import { applicationConstants } from "../_constants";
import { applicationService } from "../_services";

export const applicationActions = {
  submitApplicationData,
};

function submitApplicationData(applicationData) {
  return (dispatch) => {
    dispatch(request());

    return applicationService
      .submitApplicationData(applicationData)
      .then(
        (data) => {
          dispatch(success(data));
        },
        (error) => {
          dispatch(failure(error.toString()));
        }
      )
      .catch((error) => {
        dispatch(failure(error.toString()));
      });

    function request() {
      return { type: applicationConstants.SUBMIT_APPLICATION_REQUEST };
    }

    function success(data) {
      return {
        type: applicationConstants.SUBMIT_APPLICATION_SUCCESS,
        data,
      };
    }

    function failure(error) {
      return {
        type: applicationConstants.SUBMIT_APPLICATION_FAILURE,
        error,
      };
    }
  };
}
