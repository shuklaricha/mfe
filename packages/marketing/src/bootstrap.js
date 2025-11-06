import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// mount function to start up

const mount = (el) => {
    ReactDOM.render(<App ></App>, el)
}


// isolation run

if(process.env.NODE_ENV === 'development'){
    if(document.querySelector('#_feed-dev-root')){
        mount(document.querySelector('#_feed-dev-root'))
    }
}

export {mount}



//run from container