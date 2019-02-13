import React, { Component } from 'react'
//Tools
import { connect } from 'react-redux'
//Component
import EmployeeTable from './EmployeeTable'
import EmployeeForm from './EmployeeForm'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
class EmployeeData extends Component{
	state = {
		employees: [],
		employeeId: '',
		firstname: '',
		lastname: '',
		age: '',
		gender: '',
		email: '',
		country: '',
		city: '',
		address: '',
		education: '',
		joindate: ''
	}

	//Get Data from Database
	componentDidMount(){
		//Get API from server
		fetch('http://localhost:3001/api/employees')
		.then((response)=>{
			response.json()
			.then((data)=>{
				// console.log(data)
				this.setState({
					employees: data
				})
			})
		})
	}

	//Handle Input Form
	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}


	//Handle ADD New Employee
	addEmployee = (e) => {
		e.preventDefault();
		//Get Value From State by Onchange
		const { firstname, lastname, age, gender, email, country, city, address, education, joindate } = this.state
		const data = {
			firstname,
			lastname,
			age,
			gender,
			email,
			country,
			city,
			address,
			education,
			joindate
		}

		//Make API from server
		const request = new Request('http://localhost:3001/api/new-employee',{
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json'}),
			body: JSON.stringify(data)
		});

		//Every new employee input, push data in state
		const { employees } = this.state;
			employees.push(data)
			this.setState({
				employees: employees,
				//If Success, Set Default Value State to null string, so value in input form null
				employeeId: '',
				firstname: '',
				lastname: '',
				age: '',
				gender: '',
				email: '',
				country: '',
				city: '',
				address: '',
				education: '',
				joindate: ''
			})

		//Set Promise
		fetch(request)
		.then((response)=>{
			response.json()
				// .then(function(data){
				// 	console.log(data)
				// })
				.then((data)=>{
					console.log(data)
				})
		})
		.catch((err)=>{
			console.log(err)
		})
	}

	//Get Data Per Row Table
	getDataRow = (employee) => {
		this.setState({
			employeeId: employee.id,
			firstname: employee.firstname,
			lastname: employee.lastname,
			age: employee.age,
			gender: employee.gender,
			email: employee.email,
			country: employee.country,
			city: employee.city,
			address: employee.address,
			education: employee.education,
			joindate: employee.joindate
		})
	}

	//Handle Delete Employee
	deleteEmployee = () => {
		const { employees, employeeId } = this.state
		const check = window.confirm('Delete Data?');
		if(check === true){
			const employee = employees.find(function(employee){
				return employee.id === employeeId
			})

			//Make API from server and send Id 
			const request = new Request('http://localhost:3001/api/delete-employee/'+employeeId,{
				method: "DELETE"
			})

			//Set Promise
			fetch(request)
				.then((response)=>{
					//Set State to up to date data from database, so table view same with database
					employees.splice(employees.indexOf(employee), 1);
					this.setState({
						employees: employees,
						//If Success, Set Defaul Value State to null string, so value input null
						employeeId: '',
						firstname: '',
						lastname: '',
						age: '',
						gender: '',
						email: '',
						country: '',
						city: '',
						address: '',
						education: '',
						joindate: ''
					})
					response.json()
					.then((data)=>{
						// console.log(data)
					})
				})
		}else{
			return null
		}
	}

	//Handle Update Employee
	updateEmployee = () => {
		const { employees, employeeId } = this.state
		const { firstname, lastname, age, gender, email, country, city, address, education, joindate } = this.state
		const data = {
			firstname,
			lastname,
			age,
			gender,
			email,
			country,
			city,
			address,
			education,
			joindate
		}

		const request = new Request('http://localhost:3001/api/update-employee/'+employeeId,{
			method: 'PUT',
			headers: new Headers({ 'Content-Type': 'application/json'}),
			body: JSON.stringify(data)
		})

		fetch(request)
			.then((response)=>{
				response.json()
				.then((data)=>{
					console.log(data)
				})
			})

	}

	//Handle Reset Button 
	resetButton = () => {
		this.setState({
			employeeId: '',
			firstname: '',
			lastname: '',
			age: '',
			gender: '',
			email: '',
			country: '',
			city: '',
			address: '',
			education: '',
			joindate: ''
		})
	}

	
	render(){
		//Disctruction state
		const { employees } = this.state
		//Country States from reducer
		const { countryStates } = this.props
		//Disctruction state
		const { employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate } = this.state
		//Make Variable For State
		const value = { employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate }
		return(
			<div className='EmployeeData'>
				<Container>
					<Row>
						<Col lg='12'>
							<Card className='mb-3'>
								<CardHeader> Employee Data </CardHeader>
								<CardBody>
									<EmployeeTable 
										employees={employees}
										getDataRow={this.getDataRow}
									/>
								</CardBody>
							</Card>
						</Col>
						<Col lg='12' className='mx-auto'>
							<Card className='mb-3'>
								<CardHeader> Employee Form </CardHeader>
								<CardBody>
									<EmployeeForm 
										value={value}
										countryStates={countryStates}
										onChange={this.onChange}
										addEmployee={this.addEmployee}
										deleteEmployee={this.deleteEmployee}
										resetButton={this.resetButton}
										updateEmployee={this.updateEmployee}
									/>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return{
		countryStates: state.countryStates
	}
}

export default connect(mapStateToProps)(EmployeeData)