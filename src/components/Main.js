import React, {useState} from 'react';
import axios from 'axios';

import Context from '../Context';

import Header from './Header';
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
const API_KEY = 'cca1c9dd2e99915f4619d130aa75375c';

const Main = () => {
    const [weather, setWeather] = useState();
    const api_call = async (e) => {
        e.preventDefault();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${API_KEY}&units=metric`;
        const request = axios.get(url);
        const response = await request;
        setWeather(response.data.main);
    }
 

 
    return (
        <div className="main">
            <Header />
            <Content>
               <Context.Provider value={{api_call, weather}}>
               <WeatherSearch />
               { weather && <WeatherData  /> }
               </Context.Provider>
            </Content>
        </div>
    )
}

export default Main
