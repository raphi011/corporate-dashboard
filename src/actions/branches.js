import { getBranches } from '../api';

export function fetchBranches() {
  return (dispatch) => {
    return getBranches()
      .then((branches) => {
        dispatch({
          type: 'RECEIVE_BRANCHES',
          branches,
        });
      });
  };
}
