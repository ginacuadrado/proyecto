// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

//Import de los datos de la base de datos en Firestore
export const environment = {
  production: false,
  firebase: {

    apiKey: "AIzaSyDIJxieWFunR9YW7OiJOvBcVNnVcKrsO0s",
    authDomain: "steak-restaurante.firebaseapp.com",
    databaseURL: "https://steak-restaurante.firebaseio.com",
    projectId: "steak-restaurante",
    storageBucket: "steak-restaurante.appspot.com",
    messagingSenderId: "851842595463"
    
  }
};
