import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";
// mount function to start up

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
     initialEntries: [initialPath],
  });
 
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history}></App>, el);

  return {
    onParentNavigate(location){
        console.log('++++onParentNavigate+++++',location);
    }
  }
};

// isolation run

if (process.env.NODE_ENV === "development") {
  if (document.querySelector("#_feed-dev-root")) {
mount(document.querySelector("#_feed-dev-root"), { defaultHistory: createBrowserHistory() });
  }
}

export { mount };

//run from container
