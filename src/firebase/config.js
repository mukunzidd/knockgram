import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDsMol3YNF73rC2qMPEIe2Ygo9B6XEhHYA',
  authDomain: 'me2you-854e9.firebaseapp.com',
  databaseURL: 'https://me2you-854e9.firebaseio.com',
  projectId: 'me2you-854e9',
  storageBucket: 'me2you-854e9.appspot.com',
  messagingSenderId: '264856254213',
  appId: '1:264856254213:web:3976592bc98e2df639e96c',
};

firebase.initializeApp(firebaseConfig);

export const projectFirestore = firebase.firestore();
export const projectStorage = firebase.storage();
