import { RECV_SEARCH_CITY } from '../constants'

const initialState = {
    city: ''
};

export default function citySearch(state = initialState, action) {
    switch (action.type) {
        case RECV_SEARCH_CITY: {
            return Object.assign({}, state, {
                cities: action.response.predictions
            });
        }
    }
    return state
}