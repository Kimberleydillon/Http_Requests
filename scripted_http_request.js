var request = require("request");

function readHTML (url, callback){
  callback(request(url));
  }
}
}

function getBody (error, response, body)){
  if(!error && response.statusCode === 200){
    console.log(body);
  }
  else {
    console.log(error);
  }

readHTML('http://kimberleydillon.github.io/', getBody);