import fetch from 'isomorphic-fetch'
import { FETCH_WEATHER, RECV_WEATHER, RESET_WEATHER } from '../constants'

export function fetchWeather(city) {
    return {
        type: FETCH_WEATHER,
        city: city
    }
}

export function receiveWeather(response) {
    return {
        type: RECV_WEATHER,
        response: response
    }
}

export function resetWeather() {
    return {
        type: RESET_WEATHER
    }
}


export function weatherForecast(city) {
    return function (dispatch) {
        dispatch(fetchWeather(city))
        return fetch(`/data/2.5/forecast?q=${city}&APPID=3b5d50834a93b40cb4195b92ec9dd6d2`)
            .then(response => response.json())
            .then(json => dispatch(receiveWeather(json)))
    }
}