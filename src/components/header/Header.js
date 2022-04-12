import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../customHooks/useFirebase';
import CustomLink from '../customLink/customLink';
import './Header.css'

const Header = () => {
    const { user, userSingOut } = useFirebase()
    console.log(user)
    return (
        <div>
            <Navbar className='nav-contain' expand="lg">
                <Container className='py-3'>
                    <Link className='brand' to={'/'}>Modern Tech</Link>
                    <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto">
                            {user?.displayName && <p className='text-light'>{user?.displayName}</p>}
                            <CustomLink to={'/'}> Home</CustomLink>
                            <CustomLink to={'/reviews'}> Reviews</CustomLink>
                            <CustomLink to={'/Dashboard'}> Dashboard</CustomLink>
                            <CustomLink to={'/blogs'}> Blogs</CustomLink>
                            {
                                user?.displayName ?
                                    <Button onClick={userSingOut} variant="link"> LogOut </Button>
                                    :
                                    <CustomLink to={'/login'}> Login </CustomLink>        
                            }
                            <CustomLink to={'/signup'}> SignUp</CustomLink>
                        </Nav>   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;