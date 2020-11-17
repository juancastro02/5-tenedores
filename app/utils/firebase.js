import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBOu1IxrrvV7Ci6bTe24j4SyjzeLxNTFkU",
    authDomain: "tenedores-e6856.firebaseapp.com",
    databaseURL: "https://tenedores-e6856.firebaseio.com",
    projectId: "tenedores-e6856",
    storageBucket: "tenedores-e6856.appspot.com",
    messagingSenderId: "562364455126",
    appId: "1:562364455126:web:f51c6596785603c5271177"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);
