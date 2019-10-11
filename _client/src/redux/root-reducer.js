import { combineReducers } from 'redux';
import roomsReducer from './rooms/rooms.reducer';

const rootReducer = combineReducers({
    rooms: roomsReducer
});

export default rootReducer;