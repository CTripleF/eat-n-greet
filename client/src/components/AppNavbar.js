import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Auth from '../utils/auth';
import CreateMeetup from './CreateMeetup';
import { useMutation } from '@apollo/client';

const AppNavbar = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Brand as={Link} to='/'>
                        Eat N' Greet
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav className='ml-auto'>
                            <Nav.Link as={Link} to='/'>
                                Meetups
                            </Nav.Link>
                            {Auth.loggedIn() ? (
                                <>
                                    <Nav.Link as={Link} to='/create'>
                                        Create Meetup
                                    </Nav.Link>
                                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                                </>
                            ) : (
                                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills'>
                                <Nav.Item>
                                    <Nav.Link eventKey='login'>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <LoginForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                <SignUpForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>
    );
}
export default AppNavbar;