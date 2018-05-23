import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDk-zs6r8Zx006iCewMEStT0mHZez3OYm0',
  authDomain: 'ola12-9838f.firebaseapp.com',
  databaseURL: 'https://ola12-9838f.firebaseio.com'
};

const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
