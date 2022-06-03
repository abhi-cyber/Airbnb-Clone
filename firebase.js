// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCft5IBoqDUg7SCJNIXpnPromX61z4oMII",
  authDomain: "airbnb-clone-ec860.firebaseapp.com",
  projectId: "airbnb-clone-ec860",
  storageBucket: "airbnb-clone-ec860.appspot.com",
  messagingSenderId: "375662601178",
  appId: "1:375662601178:web:d9c854617a5cd6797d16e3"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };