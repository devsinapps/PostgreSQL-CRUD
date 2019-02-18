import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
class EmployeeModal extends React.Component{
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
		const { value, countryStates } = this.props
		return(
			<Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className={this.props.className}>
	          <ModalHeader toggle={this.props.toggleModal}>Modal title</ModalHeader>
	          <ModalBody>
	           		<Form>
						<FormGroup>
							<Label htmlFor='firstname'> First Name </Label>
							<Input
								id='firstname'
								value={value.firstname}
								onChange={this.props.onChange}
							/>
						</FormGroup>								
						<FormGroup>
							<Label htmlFor='lastname'> Last Name </Label>
							<Input
								id='lastname'
								value={value.lastname}
								onChange={this.props.onChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor='age'> Age </Label>
							<Input
								id='age'
								type='number'
								value={value.age}
								onChange={this.props.onChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor='gender'> Gender </Label>
							<CustomInput type='select' onChange={this.props.onChange} id='gender'>
								<option value={value.gender}> {value.gender} </option>
								<option value='male'> Male </option>
								<option value='female'> Female </option>
							</CustomInput>
						</FormGroup>
						<FormGroup>
							<Label htmlFor='country'> Country </Label>
							<CustomInput type='select' onChange={this.props.onChange} id='country'>
								<option value={value.country}> {value.country} </option>
								{countryStates.map((data)=>{
									return(
										<option value={data.country} onClick={() => this.getCity(data)}> {data.country} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
						<FormGroup>
							<Label htmlFor='states'> City </Label>
							<CustomInput type='select' onChange={this.props.onChange} id='city'>
								<option value={value.city}> {value.city} </option>
								{city.map((list)=>{
									return(
										<option value={list}> {list} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
						<FormGroup>
							<Label htmlFor='address'> Address </Label>
							<Input
								id='address'
								type='textarea'
								value={value.address}
								onChange={this.props.onChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor='education'> Education </Label>
							<Input
								id='education'
								value={value.education}
								onChange={this.props.onChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor='joindate'> joindate </Label>
							<Input
								id='joindate'
								type='date'
								value={value.joindate}
								onChange={this.props.onChange}
								disabled
							/>
						</FormGroup>
					</Form>
	          </ModalBody>
	          <ModalFooter className='text-center'>
	            <Button color="warning" onClick={this.props.updateEmployee}>Update</Button>{' '}
	            <Button color="danger" onClick={this.props.deleteEmployee}>Delete</Button>{' '}
	            <Button color="info" onClick={this.props.resetButton}>Reset</Button>{' '}
	          </ModalFooter>
	        </Modal>
		)
	}
}

export default EmployeeModal