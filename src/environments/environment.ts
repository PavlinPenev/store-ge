// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from 'firebase/app';

export const environment = {
  production: false,
  webApiBaseUrl: 'https://localhost:44343',
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  firebase: {
    apiKey: 'AIzaSyCAAwA54iwrp-Fzw7CHa3lPHwcvKwPIBfA',
    authDomain: 'store-ge.firebaseapp.com',
    projectId: 'store-ge',
    storageBucket: 'store-ge.appspot.com',
    messagingSenderId: '415853399157',
    appId: '1:415853399157:web:38c6b71ea2609ffa80bc3c',
  },
};
