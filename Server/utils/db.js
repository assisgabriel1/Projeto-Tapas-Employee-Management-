import mysql from 'mysql2';

const con = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'msdb',
});

con.connect(err => {
	if (err) {
		console.error('Error connecting to MySQL: ' + err.stack);
		return;
	}
	console.log('Connected to MySQL as id ' + con.threadId);
});



export default con;
