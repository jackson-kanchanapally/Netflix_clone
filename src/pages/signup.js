import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { Footer, Form } from "../components";
import { HeaderContainer } from "../container/header";
import { FooterContainer } from "../container/footer";
import { getAuth, updateProfile,createUserWithEmailAndPassword } from "firebase/auth";
import * as ROUTES from "../constants/routes";

export default function SignUp() {
  let auth = getAuth();
 const navigate=useNavigate()
  const [err, setErr] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const isInvalid = password === "" || email === "" || name === "";
  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((result) => {
       updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:Math.floor(Math.random()*5)+1,
       })
       .then(()=>{
        navigate(ROUTES.BROWSE)
       })
      })
      .catch((err) => {
        setErr(err.message)
        setEmail('')
        setPassword('')
        setName('')
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {err && <Form.Error>{err}</Form.Error>}

          <form onSubmit={handleSignUp} method="POST">
            <Form.Base>
              <Form.Input
                type="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                autoComplete="off"
                placeholder="Email id"
              ></Form.Input>
              <Form.Input
                value={name}
                onChange={({target}) => setName(target.value)}
                placeholder="First Name"
              ></Form.Input>
              <Form.Input
                type="password"
                value={password}
                autoComplete="off"
                placeholder="Password"
                onChange={({target}) => setPassword(target.value)}
              ></Form.Input>
              <Form.Submit disabled={isInvalid}>Sign up</Form.Submit>
              <Form.Text>
                Already have an account ?{" "}
                <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link>
              </Form.Text>
            </Form.Base>
          </form>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
