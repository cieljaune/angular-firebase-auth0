app
.controller( 'itemController', function itemController( $scope, $firebaseArray, $firebaseAuth, store, auth ) {

  auth.getToken({api: 'firebase'}).then(function(response){

      var AUTH_TOKEN = response.id_token;
      var ref = new Firebase(FIREBASE_BASE_URL + '/items');
      ref.authWithCustomToken(AUTH_TOKEN.toString(), function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Login Succeeded!", authData);
      }
    });
    // create a synchronized array
    $scope.messages = $firebaseArray(ref);
  });

  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };


});
