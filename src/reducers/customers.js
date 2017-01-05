const customers = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CUSTOMERS': return action.customers;
    default:
      return state;
  }
};

export default customers;
