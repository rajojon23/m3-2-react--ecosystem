import React from 'react';

import './Header.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const Header = (props) => {

  
  return(
  		
	  		<nav>
	  			<div className="logo">Fruit Emporium</div>

	          <ul>
	            <li>
	              <NavLink activeClassName="selected" exact to="/">Home</NavLink>
	            </li>
	            <li>
	              <NavLink activeClassName="selected" exact to="/about">About</NavLink>
	            </li>
	          </ul>
	        </nav>
	    );
};

export default Header;