import React from "react";

import "../../styles/index.css";

import Navbar from "./navbar.jsx"

import Jumbotron from "./jumbotron.jsx"

import Card from "./card.jsx"

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div className="container py-3">
			<Jumbotron/>
			<div className="ms-2 my-3 d-inline-flex justify-content-center">
			<div className="mx-3">
			<Card/>
			</div>
			<div className="mx-3">
			<Card/>
			</div>
			<div className="mx-3">
			<Card/>
			</div>
			<div className="mx-3">
			<Card/>
			</div>
		</div>
		</div>
		<div className ="bg-dark text-white text-center py-3">
			<p>Copyrigth Webside</p>
		</div>
		</>
		
	);
};

export default Home;
