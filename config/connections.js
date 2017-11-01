
let mysql = require("mysql");

var connection;
if(process.env.JAWSDB_URL){
	//Heroku deployment
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	//local host
	connection = mysql.createConnection({
    host:"ysp9sse09kl0tzxj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"r7uqo4x5nh5x7jxu",
    password:"vk3a68yw21xrrogu",
	database: "q49pd4euc6n0yq5i"
});
};

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

