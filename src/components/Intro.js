import React from 'react';

export default function Intro(props) {
	  return (
		<div className="Show">
			<span>Season {props.info.totalSeasons}</span>
	  		<h3>{props.info.Title}</h3>
	  		<p>{props.info.Plot}</p>
		</div>
	  );
}
