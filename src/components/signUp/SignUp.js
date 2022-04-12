
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useFirebase from '../../customHooks/useFirebase';

const SignUp = () => {
    const {googleSignIn} = useFirebase() 
    return (
        <div>
            <Form className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" autoComplete='false' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <Button onClick={googleSignIn} variant="primary" type="submit">
                    Google SignIn
            </Button>
        </div>
    );
};

export default SignUp;