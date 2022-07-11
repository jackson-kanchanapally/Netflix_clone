import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/home";
import Browse from "./pages/browse";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/signup";
import { IsUserRedirect } from "./helpers/routes";
function App() {
  const user=()=>{
    
  }
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />}></Route>
        <Route exact path="/user" element={<p>hello</p>}></Route>

        <Route exact path={ROUTES.SIGN_IN} element={<SignIn />}></Route>
      
        <Route exact path={ROUTES.SIGN_UP} element={<SignUp />}></Route>
       
        <Route exact path={ROUTES.BROWSE} element={<Browse/>}></Route>
        
        {/* <Route exact path="*" element={<Err/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
