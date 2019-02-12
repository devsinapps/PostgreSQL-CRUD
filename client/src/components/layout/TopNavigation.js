import React, { Component } from 'react'
//Style Component
import { Navbar, NavbarBrand } from 'reactstrap'

class TopNavigation extends Component{
	render(){
		return(
			<Navbar className='TopNavigation'>
				<NavbarBrand active> PostgreSQL - React JS </NavbarBrand>
			</Navbar>
		)
	}
}

export default TopNavigation