// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCeTQbj0Qw6ggArtY8haiZnMWwScrw6yVM',
  authDomain: 'anthracite-15f7d.firebaseapp.com',
  projectId: 'anthracite-15f7d',
  storageBucket: 'anthracite-15f7d.appspot.com',
  messagingSenderId: '923230685637',
  appId: '1:923230685637:web:6c0f4751607f3a29a8a3ac',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
