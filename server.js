//Dispatcher
var dispatcher = require('httpdispatcher');
//Require/import the HTTP module
var http = require('http');

//A port we want to listen to
const PORT=8000;

//Function which handles requests and send response
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources');

//A sample GET request
dispatcher.onGet("/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
    //console.log("get");
});

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
    //console.log("post");
});

//Create a server
var server = http.createServer(handleRequest);

//Start server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening...hopefully
    console.log("Server listening on: http://localhost:%s", PORT);
});
