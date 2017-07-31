'use strict';

mushApp.factory("MushroomFactory", function($q, $http, FirebaseUrl) {
  
  let getMushrooms = () => {
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseUrl}mushrooms.json`)
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

