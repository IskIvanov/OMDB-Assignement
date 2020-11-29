import React, { useState, useEffect   } from 'react';
import {AiFillStar} from 'react-icons/ai';


export default function Slidebar(props) {
	const date = props.episode.Released;
	const rating = props.episode.imdbRating;
	let month = '';
	let rate;
	
	if(date && rating){
		month = date.substr(3,3);
		rate = rating.substr(0,1);
	}

	  return (
		<div className="Slidebar">
			<img src={props.episode.Poster} />		
			<div className="header">
				{console.log(rate)}
				<span> {props.episode.Released} </span>
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

