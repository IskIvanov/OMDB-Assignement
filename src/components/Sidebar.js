import React, { useState, useEffect   } from 'react';
import {AiFillStar} from 'react-icons/ai';


export default function Slidebar() {

	const [episode, setEpisode] = useState([]);

	useEffect(() => {
	  fetch(`http://www.omdbapi.com/?apikey=e892871a&t=game+of+thrones&Episode=1`)
		.then(res => res.json())
		.then(
		  (result) => {
			setEpisode(result);
		  }
		)
	}, [])

	  return (
		<div className="Slidebar">
			<img src={episode.Poster} />
			{/* Convert the date string */}
			
			<div className="header">
				<span> {episode.Released} </span>
				<span> <AiFillStar/> {episode.imdbRating} </span>
			</div>
			<hr/>
			<div className="body">
				<h3>{episode.Title}</h3>
				<p>{episode.Plot}</p>
			</div>
		</div>
	  );
}

