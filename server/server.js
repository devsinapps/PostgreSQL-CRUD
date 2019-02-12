const express 		= require('express'),
	  bodyParser 	= require('body-parser'),
	  morgan  		= require('morgan'),
	  pg	 		= require('pg'),
	  cors 			= require('cors');

//Set PORT 
const PORT = 3001;

//Connect Script to Postgresql Database
const pool = new pg.Pool({
	port: 5432,
	password: 'admin',
	database: 'main_database',
	max: 10,
	host: 'localhost',
	user: 'postgres'
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(morgan('dev'));

//This code you can get from web https://enable-cors.org/server_expressjs.html
	//Just Copy and edit 
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Action CRUD
	//Action GET data from database
		app.get('/api/employees', ((request, response)=>{
			pool.connect((err, db, done)=>{
				if(err) {
					return response.status(400).send(err);
				}else{
					db.query('SELECT * FROM human_resources.employees',((err,table)=>{
						done();
						if(err){
							return response.status(400).send(err);
						}else{
							return response.status(200).send(table.rows);
						}
					}))
				}
			}) 
		}))
	//Action SAVE to Database
		app.post('/api/new-employee', ((request, response)=>{
			// console.log(request.body)
			const firstname = request.body.firstname;
			const lastname 	= request.body.lastname;
			const age 		= request.body.age;
			const email 	= request.body.email;
			const gender 	= request.body.gender;
			const country 	= request.body.country;
			const city 		= request.body.city;
			const address 	= request.body.address;
			const education = request.body.education;
			const joindate 	= request.body.joindate;
			const values 	= [firstname, lastname, age, gender, email, country, city, address, education, joindate ];
			pool.connect((err, db, done) => {
				if(err){
					return console.log(err);
				}else{
					db.query('INSERT INTO human_resources.employees (firstname, lastname, age, gender, email, country, city, address, education, joindate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 )', [...values], (err, table) => {
						if(err){
							return response.status(400).send(err);
						}
						else{
							console.log("DATA INSERTED");
							db.end();
							response.status(201).send({message: 'DATA INSERTED'});
						}
					})
				}
			})
		}))

	//Actions Delete
	app.delete('/api/delete-employee/:id', ((request, response)=>{
		const id = request.params.id;
		// console.log(id)
		pool.connect((err, db, done)=>{
			if(err){
				return response.status(400).send(err);
			}else{
				db.query(`DELETE FROM human_resources.employees WHERE id = ${id}` , ((err, result)=>{
					done();
					if(err){
						return response.status(400).send(err);
					}else{
						response.status(200).send({message: 'DELETE'});
					}
				}))
			}
		})
	}))

app.listen(PORT, () => console.log('Postgresql Server On Port ' + PORT))
