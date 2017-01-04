
const issues = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_ISSUES': return action.issues;
    default:
      return state;
  }
};

export default issues;
