import React, { useState, useEffect   } from 'react';
import {AiFillStar} from 'react-icons/ai';

//TODO:

const dateConvert = (date) =>{
	let dateConverted;
	let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	if(date){
		dateConverted = date.split(' ');
		dateConverted.reverse();
		dateConverted[1]=months.indexOf(dateConverted[1]);
		return dateConverted.join('-')
	}else{
		return date;
	}
};

export default function Slidebar(props) {

	const date = props.episode.Released;
	const rating = props.episode.imdbRating;
	
	let rate;
	if(rating){
		rate = rating.substr(0,1);
	}

	  return (
		<div className="Slidebar">
			<img src={props.episode.Poster} />		
			<div className="header">
				<span>Episode {props.episode.Episode} </span>
				<span> {dateConvert(date)} </span>
				<span> <AiFillStar/> <b>{rate}</b>/10 </span>
			</div>
			<hr/>
			<div className="body">
				<h3>{props.episode.Title}</h3>
				<p>{props.episode.Plot}</p>
			</div>
		</div>
	  );
}

