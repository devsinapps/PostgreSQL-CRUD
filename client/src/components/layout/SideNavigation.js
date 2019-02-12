import React, { Component } from 'react'

class SideNavigation extends Component{
	render(){
		return(
			<div className='SideNavigation'>
				<div className='MenuBar'>
					<div className='Menu'>
						<ul>
							<li> Dashboard </li>
							<li> Crud </li>
							<li> Dropdown </li>
						</ul>
					</div>
				</div>
				<div className='toggle'>
				</div>
			</div>
		)
	}
}

export default SideNavigation