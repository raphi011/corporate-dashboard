import { getIssues } from '../api';

export function fetchIssues() {
  return (dispatch) => {
    dispatch({
      type: 'REQUEST_ISSUES',
    });
    return getIssues()
      .then((issues) => {
        dispatch({
          type: 'RECEIVE_ISSUES',
          issues,
        });
      }, (e) => {
        dispatch({
          type: 'ERROR_ISSUES',
          error: e,
        });
      });
  };
}
