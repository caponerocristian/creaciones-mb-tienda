import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
{
    apiKey: "AIzaSyCJNg9AHsNIcnhL9kRbKfTgwsdKO_lpRko",
    authDomain: "creacionesmb-ecommerce.firebaseapp.com",
    projectId: "creacionesmb-ecommerce",
    storageBucket: "creacionesmb-ecommerce.appspot.com",
    messagingSenderId: "386810221409",
    appId: "1:386810221409:web:a6441b1119e2f048a82b20"
}
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}