import React from 'react'
import WeatherTile from './WeatherTile.jsx'

export default class FiveDay extends React.Component {
    render() {
        const { forecast } = this.props

        const dailyWeather = forecast.reduce((obj, value) => {
            var day = value.dt_txt.substring(0, 10); // TODO: parse the date to make this more reliable
            const list = obj[day] || []
            list.push(<WeatherTile key={value.dt} weather={value}/>)
            obj[day] = list
            return obj
        }, {});

        return (
            <fivedayforecast>
                <div className='col-sm-12'>
                        {
                            Object.keys(dailyWeather).map((day) =>
                                <div key={day} className='row five-day'>
                                    <div className='col-sm-12'>
                                        <div>{ day }</div>
                                        <div>{ dailyWeather[day] }</div>
                                    </div>
                                </div>
                            )
                        }
                </div>
            </fivedayforecast>
        )
    }
}