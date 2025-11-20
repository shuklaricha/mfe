import React, { lazy, Suspense, useState} from "react";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={isSignedIn} />
          <hr></hr>
         <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/auth">
              <AuthLazy onSignIn= {() => setIsSignedIn(true)}/></Route>
              <Route path="/" component={MarketingLazy}></Route>
            </Switch>
          </Suspense>      
    {/* <MarketingApp /> */}
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
