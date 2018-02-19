import axios from 'axios';

const API_KEY = 'abf641bfa057d555babb043454129e64';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?q=`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    
    const url = `${ROOT_URL}${city},ua&APPID=${API_KEY}`;
    const request = axios.get(url);

    console.log('Request ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
