
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var db;
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var configdb = require('./config/database.js');

var app = express();

//setup express app

app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'));
app.use(cookieParser());


//Database
MongoClient.connect(configdb.url, (err,client) => {
	if(err) {
		return console.log(err);
	}
	db = client.db('what-to-watch-db');
	app.listen(3000, ()=> {
		console.log('listening on 3000');
	})
}); 

//Save Movie Questionaire in DB
app.post('/question1', (req,res) => {
	db.collection('question').save(req.body, (err,result) => {
		if(err) return console.log(err)
			
		console.log('saved to database')
		res.redirect('/profile.vue')
	})
})

//Save Show Questionaire in DB
app.post('/question2', (req,res) => {
	db.collection('question2').save(req.body, (err,result) => {
		if(err) return console.log(err)
			
		console.log('saved to database')
		res.redirect('/profile.vue')
	})
})

//launch
app.listen(port,() => {
	console.log('listening on '+ port);
});