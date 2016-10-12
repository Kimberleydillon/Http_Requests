//Using Request
var request = require("request"); //requires request module

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


// Using Http

var http = require("http");

var requestOptions = {
  host: "kimberleydillon.github.io",
  path: "/"
};

http.get(requestOptions, (response) => {    // HTTP Response Callback
var allData = ""
  response.setEncoding("utf8");             // Use UTF-8 encoding

  response.on("data", function(data) {           // push html data to variable
    allData += data ;
  });

    console.log(allData);//prints html
  });

});