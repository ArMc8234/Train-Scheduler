$(document).ready(function(){ 
// <!-- The core Firebase JS SDK is always required and must be listed first -->


// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCjyPETl9n9oeFNPjYxAkBXDu-qDC9r8Dk",
    authDomain: "fir-2-be59f.firebaseapp.com",
    databaseURL: "https://fir-2-be59f.firebaseio.com",
    projectId: "fir-2-be59f",
    storageBucket: "fir-2-be59f.appspot.com",
    messagingSenderId: "963822389297",
    appId: "1:963822389297:web:563f73db0f1881b8f3ad10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var trainName;
  var destination;
  var trainTime;
  var frequency;



          $("#submit").on('click', function(){ 
            event.preventDefault();
            trainName = $("#train-name").val().trim();
            destination = $("#destination").val().trim();
            trainTime = $("#train-time").val().trim();
            frequency = $("#frequency").val().trim();


            database.ref().push({
              trainName: trainName,
              destination: destination,
              trainTime: trainTime,
              frequency: frequency
            });

          });

          database.ref().on("value", function(snapshot){
            var newRow = $("<tr>").append(
              $("<td>").text(trainName),
              $("<td>").text(destination),
              $("<td>").text(trainTime),
              $("<td>").text(frequency),
             );
            
          
            // Append the new row to the table
            $(".table> tbody").append(newRow);
         
          });


 });
