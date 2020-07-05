export default {
  isUserLoggedIn({ LoggedIn, token }) {
    return LoggedIn && token;
  },
};
