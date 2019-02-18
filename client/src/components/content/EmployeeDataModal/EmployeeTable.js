import React, { Component } from 'react'
import { Table } from 'reactstrap'

export const EmployeeTable = (props) => {
	const { employees } = props
	let number = 1
	return(
		<Table hover bordered striped responsive size='sm'>
			<thead>
				<tr>
					<th> No </th>
					<th> First Name </th>
					<th> Last Name </th>
					<th> Age </th>
					<th> Gender </th>
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
						<tr onClick={() => props.toggleModal(employee)}>
							<td> No </td>
							<td> {employee.firstname} </td>
							<td> {employee.lastname}</td>
							<td> {employee.age} </td>
							<td> {employee.gender} </td>
							<td> {employee.country} </td>
							<td> {employee.city} </td>
							<td> {employee.address} </td>
							<td> {employee.education} </td>
							<td> {employee.joindate} </td>
						</tr>
					)
				})}
			</tbody>
		</Table>
	)
}