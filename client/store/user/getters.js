export default {
  isUserLoading: state => state.userRequestsCounter > 0,
  currentError: state => state.currentError,

  currentUser: state => state.currentUser,
};
