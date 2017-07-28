'use strict';

mushApp.factory("MushroomFactory", function($q, $http, FirebaseUrl, FBCreds) {
  let getMushrooms = () => {
    return $q( (resolve, reject) => {
      $http.get("./lib/mushrooms.json")
      .then( (mushrooms) => {
        resolve(mushrooms);
      })
      .catch( (err) => {
        reject(err);
      });
    });
  };
  return {getMushrooms};
});