import RoomActionTypes from './roomActionTypes';

const INITIAL_STATE = {
    rooms: null
}

const roomsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RoomActionTypes.FETCH_ROOMS:
            return {
                ...state,
                rooms: action.payload
            };
         default:
             return state;   
    }
}

export default roomsReducer;