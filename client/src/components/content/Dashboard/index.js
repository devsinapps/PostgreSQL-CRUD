import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
class Dashboard extends Component{
	render(){
		return(
			<div className='Dashboard'>
				<Container fluid>
					<Row>
						<Col lg='12'>
							<Card>
								<CardBody>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Dashboard