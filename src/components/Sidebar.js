import React, { useState, useEffect   } from 'react';
import {AiFillStar} from 'react-icons/ai';


export default function Slidebar(props) {

	  return (
		<div className="Slidebar">
			<img src={props.episode.Poster} />
			{/* Convert the date string */}
			
			<div className="header">
				<span> {props.episode.Released} </span>
				<span> <AiFillStar/> <b>{props.episode.imdbRating}</b>/10 </span>
			</div>
			<hr/>
			<div className="body">
				<h3>{props.episode.Title}</h3>
				<p>{props.episode.Plot}</p>
			</div>
		</div>
	  );
}

