import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function fixSidenavHeight() {
  document.getElementById('sidenav').style.maxHeight = window.innerHeight - 70;
}

window.onscroll = function () {
  var sidenav = document.getElementById('sidenav');
  if (window.scrollY >= 230)
    sidenav.className += ' fixed';
  else
  	if (sidenav.className.includes('fixed')) sidenav.className -= ' fixed';

  fixSidenavHeight();
};

fixSidenavHeight();