import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";
// mount function to start up

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {

  const history = defaultHistory || createMemoryHistory({
    InitialEntries: [initialPath],
  });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App onSignIn ={onSignIn} history={history}></App>, el);

  return {
    onParentNavigate(location){
    
     const { pathname } = history.location;
         console.log('++++onParentNavigate+++++',pathname);
      if( pathname !== location.pathname){
        history.push(location.pathname);

    }
  }
};

// isolation run

if (process.env.NODE_ENV === "development") {
  if (document.querySelector("#_auth-dev-root")) {
mount(document.querySelector("#_auth-dev-root"), { defaultHistory: createBrowserHistory() });
  }
}
}
export { mount };


//run from container
