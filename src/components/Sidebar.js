import React, { useState, useEffect   } from 'react';

export default function Show() {

	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
	  fetch(`http://www.omdbapi.com/?apikey=e892871a&t=game+of+thrones`)
		.then(res => res.json())
		.then(
		  (result) => {
			setSeries(result);
		  },
		  
		  (error) => {
			setIsLoaded(true);
		  }
		)
	}, [])

	  return (
		<div className="Slidebar">
			
		</div>
	  );
}

