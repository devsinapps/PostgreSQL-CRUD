import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class EmployeeForm extends React.Component{
	state = {
		city: []
	}

	getCity = (data) => {
		this.setState({
			city: data.states
		})
	}
	render(){
		const { city } = this.state
		const { countryStates } = this.props
		return(
			<Form onSubmit={this.props.inputEmployee}>
				<Row form>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='firstname'> First Name </Label>
							<Input
								id='firstname'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='lastname'> Last Name </Label>
							<Input
								id='lastname'
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
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='email'> Email </Label>
							<Input
								id='email'
								type='email'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='gender'> Gender </Label>
							<CustomInput type='select' id='gender' onChange={this.props.onChange}>
								<option value=''> Select Gender </option>
								<option value='male'> Male </option>
								<option value='female'> Female </option>
							</CustomInput>
						</FormGroup>
					</Col>

					<Col md='4'>
						<FormGroup>
							<Label htmlFor='country'> Country </Label>
							<CustomInput type='select' onChange={this.props.onChange} id='country'>
								<option value=''> Select Country </option>
								{countryStates.map((data)=>{
									return(
										<option value={data.country} onClick={() => this.getCity(data)}> {data.country} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='states'> City </Label>
							<CustomInput type='select' onChange={this.props.onChange} id='city'>
								<option value=''> Select City </option>
								{city.map((list)=>{
									return(
										<option value={list}> {list} </option>
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
								type='textarea'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='education'> Education </Label>
							<Input
								id='education'
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
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup className='text-center'>
					<Button color='primary'> Save </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default EmployeeForm