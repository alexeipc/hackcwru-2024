import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBfGwyGAVC1VkueIRJVey9CnWHpbSEAfF0',
  authDomain: 'hackcwru-2024.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'hackcwru-2024',
//   storageBucket: 'your-project-id-1234.appspot.com',
//   messagingSenderId: '12345-insert-yourse',
  appId: '1:498995213085:ios:1ecfddc9c913bd2e9427f4',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };