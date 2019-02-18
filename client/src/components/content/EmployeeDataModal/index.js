import React from 'react'
//Tools
import { connect } from 'react-redux'
//Component
import { EmployeeTable } from './EmployeeTable'
import EmployeeForm from './EmployeeForm'
import EmployeeModal from './EmployeeModal'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
class EmployeeDataModal extends React.Component{
	state = {
		modal: false,
		employees: [],
		employeeId: '',
		firstname: '',
		lastname: '',
		age: '',
		email: '',
		gender: '',
		country: '',
		city: '',
		address: '',
		education: '',
		joindate: ''
	}

	toggleModal = (employeeData) => {
		this.setState({
			modal: !this.state.modal,
			employeeId: employeeData.id,
			firstname: employeeData.firstname,
			lastname: employeeData.lastname,
			age: employeeData.age,
			email: employeeData.email,
			gender: employeeData.gender,
			country: employeeData.country,
			city: employeeData.city,
			address: employeeData.address,
			education: employeeData.education,
			joindate: employeeData.joindate
		})
	}

	//Handle Value from form Input
	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}


	//Get Data From Database PostgreSql from server 
	componentDidMount(){
		fetch('http://localhost:3001/api/employees')
		.then((response)=>{
			response.json()
			.then((data)=>{
				this.setState({
					employees: data
				})
			})
		})
	}

	//Handle Reset Button
	resetButton = () => {
		this.setState({
			modal: !this.state.modal,
			firstname: '',
			lastname: '',
			age: '',
			email: '',
			gender: '',
			country: '',
			city: '',
			address: '',
			education: '',
			joindate: ''
		})
	}


	//CRUD METHOD
	//Input new Employee
	inputEmployee = (e) => {
		e.preventDefault();
		const { firstname, lastname, age, email,gender, country, city, address, education, joindate } = this.state
		const data = {
			firstname, 
			lastname, 
			age, 
			email,
			gender, 
			country, 
			city, 
			address, 
			education,
			joindate
		}

		const request = new Request('http://localhost:3001/api/new-employee',{
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json'}),
			body: JSON.stringify(data)
		})

		const { employees } = this.state
				employees.push(data)
				this.setState({
					employees: employees,
					//Handle State to Default if Success
					firstname: '',
					lastname: '',
					age: '',
					email: '',
					gender: '',
					country: '',
					city: '',
					address: '',
					education: '',
					joindate: ''

				})

		fetch(request)
			.then((response)=>{
				response.json()
				.then((data)=>{
					console.log(data)
				})
			})
			.catch((err)=>{
				console.log(err)
			})

	}

	//Delete Employee
	deleteEmployee = () => {
		const { employees, employeeId } = this.state
		const check = window.confirm('Delete?')
		if(check === true){
			const employee = employees.find((employee)=>{
				return employee.id === employeeId
			})
			const request = new Request('http://localhost:3001/api/delete-employee/' + employeeId, {
				method: 'DELETE',
			})

			fetch(request)
			.then((response)=>{
				employees.splice(employees.indexOf(employee), 1)
				this.setState({
					modal: !this.state.modal,
					firstname: '',
					lastname: '',
					age: '',
					email: '',
					gender: '',
					country: '',
					city: '',
					address: '',
					education: '',
					joindate: ''
				})
				response.json()
				.then((data)=>{
					console.log(data)
				})
			})
		}else{
			return null
		}	
	}


	//Update Employee
	updateEmployee = () => {
		const check = window.confirm('Update?')
		const { employeeId, firstname, lastname, age, email, gender, country, city, address, education, joindate } = this.state
		const data = {
			firstname, 
			lastname, 
			age, 
			email,  
			gender, 
			country, 
			city, 
			address, 
			education, 
			joindate 
		}

		if(check === true){
			const request = new Request('http://localhost:3001/api/update-employee/'+employeeId, {
				method: 'PUT',
				headers: new Headers({ 'Content-Type': 'application/json'}),
				body: JSON.stringify(data)
			})

			this.setState({
				modal: !this.state.modal,
				firstname: '',
				lastname: '',
				age: '',
				email: '',
				gender: '',
				country: '',
				city: '',
				address: '',
				education: '',
				joindate: ''
			})
		}else{
			return null
		}
		// fetch(request)
		// .then((response)=>{
		// 	this.setState({
		// 		modal: !this.state.modal,
		// 		firstname: '',
		// 		lastname: '',
		// 		age: '',
		// 		email: '',
		// 		gender: '',
		// 		country: '',
		// 		city: '',
		// 		address: '',
		// 		education: '',
		// 		joindate: ''
		// 	})
		// 	response.json()
		// 	.then((data)=>{
		// 		console.log(data)
		// 	})
		// })
	}
	/////////////////////////////////////////////////////////////


	render(){
		console.log(this.state)
		const { modal, employees } = this.state
		const { firstname, lastname, age, gender, country, city, address, education, joindate } = this.state
		const { countryStates } = this.props
		const value = { firstname, lastname, age, gender, country, city, address, education, joindate }
		return(
			<div className='EmployeeDataModal'>
				<Container fluid>
					<Row>
						<Col lg='12'>
							<Card className='mb-3'>
								<CardBody>
									<EmployeeTable 
										employees={employees}
										toggleModal={this.toggleModal}
									/>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col lg='12'>
							<Card className='mb-3'>
								<CardBody>
									<EmployeeForm 
										countryStates={countryStates}
										onChange={this.onChange}
										inputEmployee={this.inputEmployee}
									/>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						<EmployeeModal 
							value={value}
							modal={modal}
							countryStates={countryStates}
							toggleModal={this.toggleModal}
							onChange={this.onChange}
							resetButton={this.resetButton}
							deleteEmployee={this.deleteEmployee}
							updateEmployee={this.updateEmployee}
						/>
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

export default connect(mapStateToProps)(EmployeeDataModal)