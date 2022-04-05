import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../customLink/customLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='nav-contain' expand="lg">
                <Container className='py-3'>
                    <Link className='brand' to={'/'}>Modern Tech</Link>
                    <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto">
                            <CustomLink to={'/'}> Home</CustomLink>
                            <CustomLink to={'/reviews'}> Reviews</CustomLink>
                            <CustomLink to={'/Dashboard'}> Dashboard</CustomLink>
                            <CustomLink to={'/blogs'}> Blogs</CustomLink>
                        </Nav>   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;