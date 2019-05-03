
require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);


//var getArtistNames = function(artist) {
    //return artist.name;
//}

var getMeSpotify = function(songName) {

  spotify.search({ type: 'track', query: songName }, function(err,
     data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data.tracks.items[0]);
     
    var songs = data.tracks.items;
    for(var i=0; i<songs.lenght; i++) {
      console.log(i);
      console.log('artist(s): ' + songs[i].artists.map(getArtistNames));   
      console.log('song name: ' + songs[i].name);
      console.log('preview song: ' + songs[i].preview_url);
      console.log('album: ' + songs[i].album.name); 
      console.log('-----------------------------------------------------');
    }
  });
}
 
var pick = function(caseData, functionData) {
    switch(caseData) {
        case 'spotify-this-song':
             getMeSpotify(functionData);
             break;
        default:
        console.log('Liri does not know about that');
  }      
}

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);



//var concert="Mark Anthony"

//axios.get("https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=sdgzxfomMS5yr5rAWpk4ECUGF4dzIPqG&keyword=" + concert)
        //.then(
           //function (response) {
    
           //})
        //.catch(function (error) {
           // console.log(error);
       // });


//console.log("Hello");

//console.log(process.argv);

//console.log("Add song Name")

//songName = process.argv[3];




