import React from 'react'
//Components Layout
import TopNavigation from './../components/layout/TopNavigation'
import SideNavigation from './../components/layout/SideNavigation'
//Components Content
import Dashboard from './../components/content/Dashboard'
import EmployeeData from './../components/content/EmployeeData'
import EmployeeDataModal from './../components/content/EmployeeDataModal'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
class Routes extends React.Component{
	render(){
		return(
			<Router>
				<div id='Routes'>
					<TopNavigation />
					<SideNavigation />
					<div className='Content'>
						<Switch>
							<Route path='/' component={Dashboard} exact />
							<Route path='/employeedata' component={EmployeeData} />
							<Route path='/employeedatamodal' component={EmployeeDataModal} />
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

export default Routes