import React, { useState , useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';

const Login = () => {

 const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
/*
    useEffect(() => {
        const unregisterAuthObserver = auth.onAuthStateChanged(authUser => {
			setIsSignedIn(!!authUser);
        });
		return () => unregisterAuthObserver(); 
    }, []);
*/
	onAuthStateChanged(auth, authUser => {
		if ( authUser)
		setIsSignedIn(!!authUser);
	});

	const submitHandle = (e) => {
		e.preventDefault();
		const email = e.target.formBasicEmail.value;
		const passw = e.target.formBasicPassword.value;
		signInWithEmailAndPassword(auth, email, passw);

	}

	if (!isSignedIn) {
		return (
		  <Container>
			  <Form onSubmit={submitHandle}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
					We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Aceptar
				</Button>
				</Form>
			</Container>
		);
	  }
	  return (
		<div>
			<center>
		  <h1>Bienvenido</h1>
		  <p>{auth.currentUser.displayName}! Estas dentro de la aplicación !</p>
		  <a onClick={() => auth.signOut()}>Sign-out</a>
		  </center>
		</div>
	  );
}

export default Login;