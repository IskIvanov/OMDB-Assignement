import React, {useEffect, useState} from 'react';
import {fetchEpisode} from '../api/data';

export default function Episode(props) {

	const [episode,setEpisode] = useState([]);	

	useEffect(()=>{
		fetchEpisode(props.epNumber).then((x) =>{
			setEpisode(x);
		})
	},[])

	  return (
		<div className="episode">
			<span>{props.epNumber}</span>
			<img src={episode.Poster} alt='' />
		  	<h3>{episode.Title}</h3>
		  	<p>{episode.Plot}</p>
		</div>
	  );
}
