// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAIWZjS-lV52pk4iC6TE9plwMAEEv-P7KE",
    authDomain: "workingbuddy-67af6.firebaseapp.com",
    projectId: "workingbuddy-67af6",
    storageBucket: "workingbuddy-67af6.appspot.com",
    messagingSenderId: "1032809104603",
    appId: "1:1032809104603:web:4d17116cb28acc303178fe",
    measurementId: "G-3RNXLVY0K4"
  },

  paymentUrl: "https://api.sandbox.checkout.com/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
