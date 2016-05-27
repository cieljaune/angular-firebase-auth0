app
.controller( 'itemController', function itemController( $scope, $firebaseArray, $firebaseAuth, store, auth ) {
  var AUTH_TOKEN = store.get('token').toString();
  // $scope.authObj.$authWithCustomToken(token).then(function(authData) {
  //   console.log("Logged in as:", authData.uid);
  // }).catch(function(error) {
  //   console.error("Authentication failed:", error);
  auth.getToken({
  api: 'firebase' // By default it's going to be the first active addon in the list of addons
}).then(function(response){

  AUTH_TOKEN = response.id_token;
  var ref = new Firebase("https://torrid-inferno-5640.firebaseio.com/items");
  ref.authWithCustomToken(AUTH_TOKEN.toString(), function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Login Succeeded!", authData);
  }
});
  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
})
  // $scope.authObj = $firebaseAuth(ref)
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };


});
