import React, {useState} from 'react';
import Episode from './Episode';
import Sidebar from './Sidebar';

//TODO: 
	// Mapping does not work - component renders too many times
	// Create Carousel/Slider component for the Episodes
	// After clicking on one episode change the Slider content by passing the props from episode

export default function Home(props) {
	const season = props.season.Episodes
	const episode = props.episode;

	if(season){
		return (
		<div className="Home">
			<Sidebar episode={episode} />
			<div className="Episodes">
				<ul>
					{/* {season.map(x=>{
						console.log(x.Episode);
						<li><Episode epNumber={x.Episode}/></li>
						// <li key={x.Episode}> HI THIS WORKS... I HOPE </li>
					})} */}
					{/* Find the number of the episode */}
					<li><Episode epNumber={1}/></li>
					<li><Episode epNumber={2}/></li>
					<li><Episode epNumber={3}/></li>
					<li><Episode epNumber={4}/></li>
					<li><Episode epNumber={5}/></li>
					<li><Episode epNumber={6}/></li>
					<li><Episode epNumber={7}/></li>
					<li><Episode epNumber={8}/></li>
					<li><Episode epNumber={9}/></li>
				</ul>
			</div>
		</div>
		)
	}else{
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		)
	}
}