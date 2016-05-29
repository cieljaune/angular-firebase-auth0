'use strict';

app
    
    .service('firebaseProvider', function ($q, auth) {
    	this.getRef = function (entity){
    		var deferred = $q.defer();
    		auth.getToken({api: 'firebase'}).then(function(response){

                var AUTH_TOKEN = response.id_token;
                var ref = new Firebase(FIREBASE_BASE_URL + entity);
                ref.authWithCustomToken(AUTH_TOKEN.toString(), function(error, authData) {
                    if (error) {
                        console.log("Firebase login Failed!", error);
                    } else {
                        console.log("Firebase login Succeeded!", authData);
                    }
                });
                deferred.resolve(ref);

            });
            return deferred.promise;
    	}
    });