import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBXYW7z_rx4AhAjENPyM9-12bfPKB54nX0",
    authDomain: "firevuechat-6ec06.firebaseapp.com",
    projectId: "firevuechat-6ec06",
    storageBucket: "firevuechat-6ec06.appspot.com",
    messagingSenderId: "374210493105",
    appId: "1:374210493105:web:b1fbd931c563feb0bd4090"
}

const db = firebase.initializeApp(config);
export default db;