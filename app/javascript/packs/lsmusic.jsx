import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../app';
 
document.addEventListener('turbolinks:load', function() {
  ReactDOM.render(
    <App/>,
    document.getElementById('root'),
  )
})