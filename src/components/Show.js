import React, { useState, useEffect   } from 'react';

export default function Show() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [series, setSeries] = useState([]);

	useEffect(() => {
	  fetch(`http://www.omdbapi.com/?apikey=e892871a&t=game+of+thrones`)
		.then(res => res.json())
		.then(
		  (result) => {
			setIsLoaded(true);
			setSeries(result);
		  },

		  (error) => {
			setIsLoaded(true);
			setError(error);
		  }
		)
	}, [])
	
	if (error) {
	  return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
	  return <div>Loading...</div>;
	} else {

	  return (
		<div className="Show">
			<span>Season {series.totalSeasons}</span>
	  		<h3>{series.Title}</h3>
	  		<p>{series.Plot}</p>
		</div>
	  );
	}
  }
