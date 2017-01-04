const branches = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_BRANCHES': return action.branches;
    default:
      return state;
  }
};

export default branches;
