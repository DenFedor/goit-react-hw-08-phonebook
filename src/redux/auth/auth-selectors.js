const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsLoading = state => state.auth.isLoading;
const getUserName = state => state.auth.user.name;
const authSelectors = { getIsLoggedIn, getUserName, getIsLoading };
export default authSelectors;
