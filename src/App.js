import Home from './components/Home';
import Sidebar from './components/Sidebar';
import React, { useState, useEffect } from 'react';
import { fetchInfo, fetchSeason, fetchEpisode } from './api/data';
import Intro from './components/Intro';
import './style/App.scss';

//TODO: 
	// Export the retch data in function +
	// Make more state variable for simplicity
	// UseEffect+[] mimic componentDidMount
	// Try using more descriptive names
	// @brainhubeu/react-carousel try adding this one for the carousel.


function App() {
	const [info, setInfo] = useState([]);
	const [season, setSeason] = useState([]);
	const [episode, setEpisode] = useState([]);
	
	useEffect(() => {
		fetchInfo().then((info) =>{
			setInfo(info)
		})
		fetchSeason(3).then((season) =>{
			setSeason(season)
		})
		fetchEpisode(5).then((episode) =>{
			setEpisode(episode)
		})
	}, [])

	return (
		<div className="App">
			<Intro info={info}/>
			<Home episode={episode} season={season}/>
		</div>
  );
}

export default App;
