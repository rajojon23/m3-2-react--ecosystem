
import React from 'react';

import './Homepage.css';

import ListingGrid from './ListingGrid';

const Homepage = (props) => {

	return(
		 <div>
		<h3>HOME</h3>
		<p>Fruit emporium sells the finest fruits from this world and beyond.</p>
		<p   style={{fontWeight:'bold'}}>Browse items:</p>
		<ListingGrid itemList ={Object.values(props.items)}></ListingGrid>
		</div>

	);
};

export default Homepage;