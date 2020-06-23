import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'


function initCheckout(data){
  console.log(data)
  const wrapper = document.querySelector(data.selector);
  wrapper ? ReactDOM.render(
    <App/>,
    wrapper
  ):false;
  
}

export {
  initCheckout
}