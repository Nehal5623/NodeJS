var http = require('http')

var url = require('url')

http.createServer(function(req, res){

    var route = req.url

    if(route==='/')
    {
        res.end('This is the information from backend to home page')
    }
    if(route ==='/getusernames'){
        var usernames = ['Messi', 'Dhoni', 'Triggered']
    }
    res.end(JSON.stringify(usernames));

    console.log("My node js started sucessfully in port 5000")
}).listen(5000)