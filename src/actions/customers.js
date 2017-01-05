import { getCustomers } from '../api';

export function fetchCustomers() {
  return (dispatch) => {
    return getCustomers()
      .then((customers) => {
        dispatch({
          type: 'RECEIVE_CUSTOMERS',
          customers,
        });
      });
  };
}

