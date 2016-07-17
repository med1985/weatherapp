import React from 'react'

export default class WeatherTile extends React.Component {
    render() {
        const { weather } = this.props
        return (
            <weathertile>
                <div key={weather.dt} className='col-sm-3'>
                    <div><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} /></div>
                    <div>{ weather.dt_txt.substring(10) }</div>
                </div>
            </weathertile>
        )
    }
}