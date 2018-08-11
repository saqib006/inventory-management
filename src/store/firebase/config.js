import firebase from 'firebase';


  var config = {
    apiKey: "AIzaSyCNB9-ctiiG9xiAyelRv9soTGd5BHEnjMk",
    authDomain: "inventory-management-react.firebaseapp.com",
    databaseURL: "https://inventory-management-react.firebaseio.com",
    projectId: "inventory-management-react",
    storageBucket: "inventory-management-react.appspot.com",
    messagingSenderId: "435111013434"
  };

  var fireObj = firebase.initializeApp(config);
  
  export default fireObj;
