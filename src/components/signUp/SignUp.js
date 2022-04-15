
import React from 'react';
import './SignUp.css';
import { Button, Form } from 'react-bootstrap';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig'

const SignUp = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div className=' user-form'>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light mb-0'>Name</Form.Label>
                    <Form.Control className='input-fild' placeholder='Name' type="text"  />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light mb-0'>Email</Form.Label>
                    <Form.Control className='' placeholder='Email' type="email"  />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-light mb-0'>Password</Form.Label>
                    <Form.Control type="password" placeholder='Password'  autoComplete='false' />
                </Form.Group>
                <div className='text-center mb-3'>
                    <Button className='submit-btn' type="submit"> Sign Up </Button>
               </div>
            </Form>
            <div className='d-flex justify-content-evenly text-light'>
                <hr className='line' />
                <p>Or</p>
                <hr className=' line' />
            </div>
            <div className="text-center">
                <Button onClick={()=>signInWithGoogle()} className='' variant="primary" type="submit">
                    Google SignIn
                </Button>
            </div>
        </div>
    );
};

export default SignUp;