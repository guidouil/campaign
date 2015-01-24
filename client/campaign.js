Meteor.startup(function () {
  getUserLanguage = function () {
    var language = window.navigator.userLanguage || window.navigator.language;
    if (language.length > 2) {
      language = language.substring(0,2).toLowerCase();
    }
    Session.set('language', language);
    // Session.set('language', 'fr');
    return language;
  };

  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/admin',
    profileRoute: 'profile',
    passwordSignupFields: 'EMAIL_ONLY',
    language: Session.get('language'),
    showSignupCode: false,
    showOtherLoginServices: true,      // Set to false to hide oauth login buttons on the signin/signup pages. Useful if you are using something like accounts-meld or want to oauth for api access
    extraSignUpFields: [{             // Add extra signup fields on the signup page
      field: "name",                           // The database property you want to store the data in
      name: "",  // An initial value for the field, if you want one
      label: "Full Name",                      // The html lable for the field
      placeholder: "John Doe",                 // A placeholder for the field
      type: "text",                            // The type of field you want
      required: true                           // Adds html 5 required property if true
    }]
  });

  UI.registerHelper('fromNow', function(date){
    if(date !== null) {
      moment.locale(Session.get('language'));
      return moment(date).fromNow();
    }
  });

  UI.registerHelper('isNotLoggedIn', function () {
    if (Meteor.userId() === null) {
      return true;
    }
    return false;
  });
  UI.registerHelper('isLoggedIn', function () {
    if (Meteor.userId()) {
      return true;
    }
    return false;
  });

  UI.registerHelper('isMobile', function () {
    if (Meteor.isCordova) {
      return true;
    } else {
      return false;
    }
  });
});
