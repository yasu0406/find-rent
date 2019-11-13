import { combineReducers } from 'redux';
import roomsReducer from './rooms/rooms.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    rooms: roomsReducer,
    user: userReducer
});

export default rootReducer;