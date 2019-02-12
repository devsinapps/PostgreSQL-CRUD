import React from 'react'
import moment from 'moment'
import { Table } from 'reactstrap'
class EmployeeTable extends React.Component{
	render(){
		const { employees } = this.props
		let number = 1
		return(
			<Table hover striped bordered responsive size='sm'>
				<thead>
					<tr>
						<th> No </th>
						<th> First Name </th>
						<th> Last Name </th>
						<th> Age </th>
						<th> Gender </th>
						<th> Email </th>
						<th> Country </th>
						<th> City </th>
						<th> Address </th>
						<th> Education </th>
						<th> Join Date </th>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee)=>{
						return(
							<tr key={employee.id} onClick={() => this.props.getDataRow(employee)}>
								<td> {number++} </td>
								<td> {employee.firstname} </td>
								<td> {employee.lastname}  </td>
								<td> {employee.age} </td>
								<td> {employee.gender}  </td>
								<td> {employee.email} </td>
								<td> {employee.country}  </td>
								<td> {employee.city}  </td>
								<td> {employee.address}  </td>
								<td> {employee.education}  </td>
								<td> {employee.joindate}  </td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		)
	}
}

export default EmployeeTable