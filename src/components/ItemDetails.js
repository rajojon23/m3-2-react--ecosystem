import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './ItemDetails.css';


const ItemDetails = (props) => {


	{/* We will get two different props in here
		one is from the App component via Route's 'render' property (props.items)
		another is from the Route's url param itself (props.match.params)

	*/}

	let imgSrc = props.items[props.match.params.itemId].imageSrc;
	let name = props.items[props.match.params.itemId].name;
	let latinName = props.items[props.match.params.itemId].latinName;
	let desc = props.items[props.match.params.itemId].description;
	let country = props.items[props.match.params.itemId].countryOfOrigin;
	let price = props.items[props.match.params.itemId].price;
	let sellerID = props.items[props.match.params.itemId].sellerId;
	let sellerName = props.sellers[sellerID].id;
	let storeName = props.sellers[sellerID].storeName;
	let sellerPic = props.sellers[sellerID].avatarSrc;
	let quantity = props.items[props.match.params.itemId].quantity;


	return(
		<div className='item_container'>
			<img src={`${imgSrc}`} alt="image item" />
			
			<div className='item_info'>
				<h2 className='item_name'>{name}</h2>
				<p className='item_latin'>{latinName}</p>
				<p className='item_desc'>{desc}</p>
				<p className='item_country'>Product of <span style={{fontWeight:'bold'}}>{country}</span></p>
				<Button quantity={quantity} price={price}/>

				
				<div className='seller_container'>

					<img src={`${sellerPic}`} alt="seller pic" className='item_sellerPic'/>
					<div  className='item_storeName'>{
						<span> Sold by: <span style={{fontWeight:'bold'}}>{storeName}</span></span>
					}
					</div>
				</div>
			</div>
		</div>

	);


};

const Button = (props) => {
	let quantity = props.quantity;
	let price = props.price;
	if(quantity>0){
			return(
				<button className='item_price'>${price} - Buy now</button>
			
			);
	}
	else{
		return(<button className='item_price out_of_stock'>Out of Stock</button>);
	}

};


export default ItemDetails;



