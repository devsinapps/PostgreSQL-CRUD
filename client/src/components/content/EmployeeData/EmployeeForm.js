import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class EmployeeForm extends React.Component{
	//Make State To Handle Combobox Country States
	state = {
		city: []
	}

	//Handle Contry if Clicked
		//And set State with object
	getCityFromCountry = (country) => {
		this.setState({
			city: country.states
		})
	}
	render(){
		//Distruction state
		const { city } = this.state
		//Distruction props
		const { value, countryStates } = this.props
		//Make condition enabled button
		const enabled = value.employeeId > 0
		return(
			<Form onSubmit={this.props.addEmployee}>
				<Row form>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='firstname'> First Name </Label>
							<Input
								id='firstname'
								value={value.firstname}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='lastname'> Last Name </Label>
							<Input
								id='lastname'
								value={value.lastname}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='age'> Age </Label>
							<Input
								id='age'
								type='number'
								value={value.age}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='gender'> Gender </Label>
							<CustomInput id='gender' type='select' onChange={this.props.onChange}>
								<option value={value.gender}> {value.gender} </option>
								<option value='male'> Male </option>
								<option value='female'> Female </option>
							</CustomInput>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='email'> Email </Label>
							<Input
								id='email'
								value={value.email}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='country'> Country </Label>
							<CustomInput type='select' id='country' onChange={this.props.onChange}>
								<option value={value.country}> {value.country} </option>
								{countryStates.map((country)=>{
									return(
										<option value={country.country} key={country.country} onClick={() => this.getCityFromCountry(country)}> {country.country} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='city'> City </Label>
							<CustomInput type='select' id='city' onChange={this.props.onChange}>
								<option value={value.city}> {value.city} </option>
								{city.map((ct)=>{
									return(
										<option value={ct} key={ct}> {ct} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='address'> Address </Label>
							<Input
								id='address'
								value={value.address}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='education'> Education </Label>
							<Input
								id='education'
								value={value.education}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='joindate'> Join Date </Label>
							<Input
								id='joindate'
								type='date'
								value={value.joindate}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup className='text-center'>
					<Label htmlFor='btn' hidden> Last Name </Label>
					<Button color='primary' disabled={enabled}> Save </Button> {' '}
					<Button color='warning' disabled={!enabled} onClick={this.props.updateEmployee}> Update </Button> {' '}
					<Button color='danger' onClick={this.props.deleteEmployee} disabled={!enabled}> Delete </Button> {' '}
					<Button color='info' onClick={this.props.resetButton}> Reset </Button> {' '}
				</FormGroup>
			</Form>
		)
	}
}

export default EmployeeForm