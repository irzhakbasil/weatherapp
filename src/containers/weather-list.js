import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/google-maps';

class WeatherList extends Component{

    renderWeather(cityData){
    
            const temps = cityData.list.map(weather => weather.main.temp);
            const celsium = temps.map(degree => degree - 273.15);
            const pressure = cityData.list.map(weather => weather.main.pressure);
            const humidity = cityData.list.map(weather => weather.main.humidity);
            console.log(temps);
            const { lat, lon } = cityData.city.coord;
    
           return(
            <tr key={cityData.city.id}>
                <td>
                    <GoogleMaps lat={lat} lon={lon}/>
                    </td>
                <td>
                    <Chart data={celsium} color="blue" units="C"/>
                </td>
                <td>
                    <Chart data={pressure} color="red" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="green" units="%"/>
                </td>
            </tr>
           );

    }

    render(){
        console.log('props ', this.props.weather)
        return(
           <table className="table table-hover">
               <thead>
                   <tr>
                       <th>City</th>
                       <th>Temerature ( C )</th>
                       <th>Pressure (hPa)</th>
                       <th>Humidity ( % )</th>
                   </tr>
               </thead>
               <tbody>
                    {this.props.weather.map(this.renderWeather)}
               </tbody>
           </table>
        );
    }
}

function mapStateToProps(state){
    return {
        weather: state.weather
    }
}


export default connect(mapStateToProps)(WeatherList);