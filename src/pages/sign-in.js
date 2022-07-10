import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  let auth=getAuth()
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
    event.preventDefault();

    //  return firebase
    //   .auth()
    //   .signInWithEmailAndPassword(emailAddress, password)
    //   .then(() => {
    //     navigate(ROUTES.BROWSE);
    //   })
    //   .catch((error) => {
    //     setEmailAddress('');
    //     setPassword('');
    //     setError(error.message);
    //   });
    signInWithEmailAndPassword(auth,emailAddress,password)
    .then(()=>{
      navigate(ROUTES.BROWSE);
    }).catch((err)=>{
      setError(err.message.slice(9))
      setEmailAddress('');
      setPassword('');
    })
    
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}
          <form onSubmit={handleSignin} method="POST">
          <Form.Base>
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>
          </form>
          <Form.Text>
            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}