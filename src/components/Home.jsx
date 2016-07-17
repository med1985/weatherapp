import React from 'react'
import { connect } from 'react-redux'
import CityTypeahead from './search/CityTypeahead.jsx'
import FiveDay from './forecast/FiveDay.jsx'
import { weatherForecast, resetWeather } from '../actions/weather'

class Home extends React.Component {
    render() {
        const { weatherForecast, resetWeather, weather } = this.props
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        City:  <CityTypeahead onSelected={weatherForecast} reset={resetWeather}/>
                    </div>
                </div>
                <div className='row'>
                    <FiveDay forecast={weather.forecast} />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({ weather: state.weather }),
    { weatherForecast, resetWeather }
)(Home)