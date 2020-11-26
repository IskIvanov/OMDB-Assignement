import React, { useState, useEffect   } from 'react';

export default function Episode(props) {
	const [error, setError] = useState(null);
	const [episode, setEpisode] = useState([]);

	useEffect(() => {
	  fetch(`http://www.omdbapi.com/?apikey=e892871a&t=game+of+thrones&Season=${props.season}&Episode=${props.episodeNumber}`)
		.then(res => res.json())
		.then(
		  (result) => {
			setEpisode(result);
		  },

		  (error) => {
			setError(error);
		  }
		)
	}, [])
  
	if (error) {
	  return <div>Error: {error.message}</div>;
	} else {
	  return (
		<div className="episode">
			{/* {console.log(props.episodeNumber)} */}
			{/* Image */}
				< img src={episode.Poster} />
			{/* Name of the episode */}
		  		<h3>{episode.Title}</h3>
			{/* Descrition */}
		  		<p>{episode.Plot}</p>
		</div>
	  );
	}
}
