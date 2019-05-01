require("dotenv").config();

const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);

//spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
   // if (err) {
     // return console.log('Error occurred: ' + err);
   // }
   
  //console.log(data); 
  //});