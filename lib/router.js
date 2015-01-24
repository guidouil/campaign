Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  trackPageView: true
});

// mustBeSignedIn = function(pause) {
//   AccountsEntry.signInRequired(this);
// };
//
// Router.onBeforeAction(mustBeSignedIn, {
//   except: ['entrySignIn', 'entrySignUp', 'entryForgotPassword', 'entryResetPassword', 'entryError', 'home']
// });


Router.route('/', {
  name: 'home'
});
