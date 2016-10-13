var fs = require("fs"); //gets module node fs
var request = require('request'); // get request module



function getRepoContributors (username, reponame, callback){
   var options ={
    url:'https://api.github.com/repos/'+ username + '/' + reponame + '/contributors', // Api URl to be populated with username and repo entered on CLI.
    headers:{
      'User-Agent': 'request'  // an object of headers that has UserAgent for access
    } ,
      json: true // validates the reading of JSON
  }
  request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) { // check connection is ok
    for( var contributor of body){ //runs through each contributor in the html body
      callback(contributor.avatar_url,'avatars/'+ contributor.login + ".jpg"); //runs cb on avatar urls and creates a file path.
    }
  }
  else if (error){
    console.log(error); // if error print error
  }
})
}
getRepoContributors(process.argv[2], process.argv[3], downloadImageByURL);// calls function with CLI input and CB

function downloadImageByURL(url, filePath){
  fs.stat('./avatars', function(error, stats){
    if (error || !stats.isDirectory()){
      fs.mkdir('avatars')
    }
    request(url).pipe(fs.createWriteStream(filePath))
})


}




