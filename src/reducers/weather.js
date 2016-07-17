import { RECV_WEATHER, RESET_WEATHER } from '../constants'

const initialState = {
    forecast: []
};

export default function weather(state = initialState, action) {
    switch (action.type) {
        case RECV_WEATHER: {
            return Object.assign({}, state, {
                forecast: action.response.list
            });
        }
        case RESET_WEATHER: {
            return Object.assign({}, state, {
                forecast: []
            });
        }
    }
    return state
}