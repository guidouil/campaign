Meteor.startup(function () {
  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/admin',
    profileRoute: 'profile',
    passwordSignupFields: 'EMAIL_ONLY',
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
});
