import React from "react";
import {
  Switch,
  Route,
  Router,
} from "react-router-dom/cjs/react-router-dom.min";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

import SignIn from "./components/Signin";
import Signup from "./components/Signup";
// import { Component } from "react";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            {/* <p>test</p> */}
            <Route path="/auth/signin">
              <SignIn onSignIn={onSignIn}> </SignIn>
            </Route>
             <Route path="/auth/signUp">
              <Signup onSignIn={onSignIn}> </Signup>
            </Route>
            {/* <Route path="/auth/signUp" component={Signup}></Route> */}
            {/* <SignIn></SignIn>
            <Signup></Signup> */}
            {/* <Route exact path="/pricing" component={Pricing}></Route>
            <Route path="/" component={Landing}></Route> */}
          </Switch>
        </Router>
      </StylesProvider>
    </BrowserRouter>
  );
};
