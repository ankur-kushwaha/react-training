import React from 'react';
import ReactDOM from 'react-dom'
import App, {test} from './App'





// function initCheckout(data){
//   console.log(data)
//   const wrapper = document.querySelector(data.selector);
//   wrapper ? ReactDOM.render(
//     <App/>,
//     wrapper
//   ):false;
  
// }

// test()

function initCheckout({selector, egResponse}){
  const wrapper = document.querySelector(selector);
  ReactDOM.render(
   <h1>Post Purchase</h1>,
    wrapper
  )
}

export {
  initCheckout
}