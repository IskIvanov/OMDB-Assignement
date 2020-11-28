import axios from 'axios';

export const fetchInfo = () => {
	return	axios.get('http://www.omdbapi.com/?apikey=e892871a&t=game+of+thrones')
		.then(res => {
		// handle success
			// console.log(res.data);
			return res.data;
		})
		.catch(err => {
		// handle error
			console.log(err);
		})
}
export const fetchSeason = (season) => {
	return	axios.get(`http://www.omdbapi.com/?apikey=e892871a&t=game+of+thrones&Season=${season}`)
		.then(res => {
		// handle success
			// console.log(res.data);
			return res.data;
		})
		.catch(err => {
		// handle error
			console.log(err);
		})
}
export const fetchEpisode = (episode) => {
	return	axios.get(`http://www.omdbapi.com/?apikey=e892871a&t=game+of+thrones&Season=3&Episode=${episode}`)
		.then(res => {
		// handle success
			// console.log(res.data);
			return res.data;
		})
		.catch(err => {
		// handle error
			console.log(err);
		})
}