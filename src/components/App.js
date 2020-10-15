import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';

import Header from './Header';

import ListingGrid from './ListingGrid';

import Homepage from './Homepage';

import ItemDetails from './ItemDetails';



const App = (props) => {

	console.log("inside App component", props);

	let items = props.items; 
	let sellers = props.sellers; 


  return( 
  	<Router>
  		<Header></Header>
	  <Switch>
	  		<Route exact path="/"><Homepage items={props.items}/></Route>
	  		<Route exact path="/about"><About /></Route>
	  		{/*add all new routes inside this switch component, it WON'T display the page if 
	  		it's inside any other component's switch 
	  		ALSO: pass the 'component' parameter of Route to the component that will display the item. 
	  		This way, its prop will get the dynamic ':itemId' from the URL path we need
			UPDATE: use the 'render' prop of Route to keep the items list that we will use inside the ItemDetails component
	  		*/}
	  		{/*<Route path={`/items/:itemId`} component={ItemDetails}></Route>*/}
			<Route
			  path={`/items/:itemId`}
			  render={(props) => (
			    <ItemDetails {...props} items={items} sellers={sellers}/>
			  )}
			/>
	  </Switch>
	 </Router>
  );
};




const About = (props) => {

	return(
		<React.Fragment>
		<h3>ABOUT</h3>
		<p>Fruit emporium is founded on a very simple principle: <span  style={{fontWeight:'bold'}}>Fruit is good</span>.
			We carry the finest selection of produce from around the world, from 
			tart citrus to sweet cherries. Our sellers are world-class, and your fruit is
			 guaranteed to be worthy of auction in Asian markets.
		</p>
		</React.Fragment>
	);
};


export default App;
