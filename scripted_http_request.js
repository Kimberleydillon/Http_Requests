var request = require("request"); //gets require module

function readHTML (url, callback){ //intial function called
  request(url, callback); //requests url then asychronously applies cb function
  }


function getBody (error, response, body){ // cb function to print body
  if(!error && response.statusCode === 200){//if no error and ok status proceed
    console.log(body);
  }
  else { // if not log error
    console.log(error);
  }
}
readHTML('http://kimberleydillon.github.io/', getBody); //calling main function with url and cb.