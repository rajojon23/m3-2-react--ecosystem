
import React from 'react';

import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './ListingGrid.css';

import ItemDetails from './ItemDetails';

const ListingGrid = ({ itemList }) => {

	console.log(itemList);


  return <div  className='fruits_container' >{
	    itemList.map((item) => {

	   
	      return <Item key={item.id}
	      			id={item.id}
	                name={item.name} 
	                price = {item.price}
	                imgSrc={item.imageSrc}
	              	latinName={item.latinName}
	              />;
	    })  

	}</div>;
};




const Item = (props) => {


	return(
		

			<div  className='fruit_container' >
				<Link to={`/items/${props.id}`}>
					<ul>
						<li><img src={`${props.imgSrc}`} alt=""/></li>				
						<li className='fruit_name'>{props.name}</li>
						<li  className='fruit_latin'>{props.latinName}</li>
					</ul>

				</Link>
		  	</div>
		


	);

};







ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default ListingGrid;