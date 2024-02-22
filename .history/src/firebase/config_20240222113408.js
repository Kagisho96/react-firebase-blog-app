import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// dotenv.config({ path: '../' }); // Adjust the path as needed
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBMyfMHSOMEp2P6tS_uzAA11FjguJx92QQ",

  authDomain: "library-blog-8540c.firebaseapp.com",

  projectId: "library-blog-8540c",

  storageBucket: "library-blog-8540c.appspot.com",

  messagingSenderId: "583906563141",

  appId: "1:583906563141:web:29639b69ae857c69d37f2c"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


