  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "AIzaSyC9rkf1dxC7CqEsUfMsibCBVbbxTIpCjbs",
    authDomain: "hackrpi-2017.firebaseapp.com",
    databaseURL: "https://hackrpi-2017.firebaseio.com/",
    //storageBucket: "<BUCKET>.appspot.com",
    //messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithRedirect(provider);

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});