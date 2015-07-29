//don't push node modules to git/server, it takes up a lot of space and are not needed on heroku
// ".dsstore" file > anytime you navigate to anyting in finder, macOS uses this to display info
//creating any file with "dot" at beginning will make it invisible in file structure. gitignore file will tell server which KINDS of files to ignore broadly
//npm is a package manager, there are others such as "bower" -- is a sort of file manager that takes and deals with the files we need
//to add bootstrap, etc just do "npm install [the thing] --save"
//npm uninstall express --save will uninstall whatever
// .idea folder webstorm's file to save settings etc, add to .gitignore file
//to initialize heroku: "heroku create"
//scott recommended workflow: push changes to github until you are pretty much ready to publish, then go to heroku
//if we push to heroku, we push through git
// express is sort of to node as jquery is to js. express is FAST and simpler

//EXPRESS CODE

var express = require('express'); //requiring express
var app = express(); //creating app that will run/use express
var path = require('path');

app.set('port', (process.env.PORT || 5000)); //setting port property, the process property/functionality, heroku has this set for us. make sure whatever port heroku has set for us is being used, OR port 5000.

app.get('/', function(req, res){
    //res.send("hello");
    res.sendFile(path.join(__dirname, "./public/views/index.html")); //"__dirname" is basically where the project came from initially, or root folder originally -- we use path even though it's not necessary, to create more "robust" code.
});

app.listen(app.get('port'), function(){  //the function parameter is NOT necessary/required, just using the callback function to test functionality is all working
    console.log("listening has begun on port: " + app.get('port'));
});


