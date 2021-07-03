var firebaseConfig = {
    apiKey: "AIzaSyBwHzjZSLbC84SrFAPKVFn0syCjI8G7Qtk",
    authDomain: "rip-off-twitter.firebaseapp.com",
    databaseURL: "https://rip-off-twitter-default-rtdb.firebaseio.com",
    projectId: "rip-off-twitter",
    storageBucket: "rip-off-twitter.appspot.com",
    messagingSenderId: "499432413647",
    appId: "1:499432413647:web:10092b97a1569379635aba",
    measurementId: "G-50DK9G6424"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref(Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       function send(){
          var msg = document.getElementById("msg").value;
firebase.database().ref(Room_names).push({
    name:Username,
message:msg,
likes:0});
}
document.getElementById(message).innerHTML = "";
} });  }); }
getData();
