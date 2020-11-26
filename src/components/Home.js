import React, { useState, useEffect   } from 'react';
import Show from './Show';
import Episode from './Episode';
import Whirligig from 'react-whirligig'

export default function Home() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [series, setSeries] = useState([]);
	let whirligig;
	const next = () => whirligig.next();
	const prev = () => whirligig.prev();

	// const settings = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 3
	// };

	useEffect(() => {
	  fetch(`http://www.omdbapi.com/?apikey=e892871a&t=game+of+thrones&Season=1`)
		.then(res => res.json())
		.then(
		  (result) => {
			setIsLoaded(true);
			setSeries(result.Episodes);
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
		<div className="Episodes">
			<Show/>
			<div>
				<ul>
					<Whirligig
						visibleSlides={5}
						gutter="1em"
						ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
					>
						<li><Episode season={2} episodeNumber={1}/></li>
						<li><Episode season={2} episodeNumber={2}/></li>
						<li><Episode season={2} episodeNumber={3}/></li>
						<li><Episode season={2} episodeNumber={4}/></li>
						<li><Episode season={2} episodeNumber={5}/></li>
						<li><Episode season={2} episodeNumber={6}/></li>
						<li><Episode season={2} episodeNumber={7}/></li>
						<li><Episode season={2} episodeNumber={8}/></li>
						<li><Episode season={2} episodeNumber={9}/></li>
					</Whirligig>	
				</ul>
			</div>

			<div className="arrowButtons">
				<button className="Right" onClick={next}></button>
				<button className="Left" onClick={prev}></button>
			</div>
			
		</div>
	  );
	}
  }
