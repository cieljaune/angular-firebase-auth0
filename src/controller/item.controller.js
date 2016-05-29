'use strict';

app
    
    .controller( 'itemController', function itemController( $scope, $firebaseArray, firebaseProvider) {

        firebaseProvider.getRef('items').then(function(response){
            // create a synchronized array
            $scope.items = $firebaseArray(response);
        });

        // add new items to the array
        // the message is automatically added to our Firebase database!
        $scope.addItem = function() {
            $scope.items.$add({
                text: $scope.newItemText
            });
        };


    });
