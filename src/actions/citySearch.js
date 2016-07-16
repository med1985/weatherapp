import fetch from 'isomorphic-fetch'
import { FETCH_SEARCH_CITY, RECV_SEARCH_CITY } from '../constants'

export function fetchCitySearch(city) {
    return {
        type: FETCH_SEARCH_CITY,
        city: city
    }
}

export function receiveCitySearch(response) {
    return {
        type: RECV_SEARCH_CITY,
        response: response
    }
}
export function autoCompleteCity(city) {
    return function (dispatch) {
        dispatch(fetchCitySearch(city))
        return fetch(`/maps/api/place/autocomplete/json?input=${city}&types=(cities)&key=AIzaSyChxHwPlMFeJeML2jDDMHusk3Vm8Nw1blg`)
                .then(response => response.json())
                .then(json => dispatch(receiveCitySearch(json)))
    }
}
