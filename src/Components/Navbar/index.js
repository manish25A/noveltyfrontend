import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
function NavBar() {
	return (
		<div>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Navbar.Brand href='/'>Stock Management</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='/transcation'>Transcation</Nav.Link>
							<Nav.Link href='/dashboard'>Dashboard</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
