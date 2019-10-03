import axios from 'axios';
import RoomActionTypes from './roomActionTypes';

export const ftechRooms = () => async dispatch => {
    const res = await axios.get('/api/get');
    
    dispatch({type: RoomActionTypes.FETCH_ROOMS, payload: res.data});
}

export const submitRoom = (roomInfo, onCancel) => async dispatch => {
    const res = axios.post('/api/post', {roomInfo});
    dispatch({type: RoomActionTypes.FETCH_ROOMS, payload: res.data});
    onCancel();
};
