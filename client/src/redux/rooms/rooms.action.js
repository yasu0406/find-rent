import axios from 'axios';
import RoomActionTypes from './roomActionTypes';

export const fetchRooms = () => async dispatch => {
    const res = await axios.get('/api/get');
    
    dispatch({type: RoomActionTypes.FETCH_ROOMS, payload: res.data});
}

export const fetchRoomDetail = (roomID) => async dispatch => {
    const res = await axios.post('/api/get-detail/:id', {roomID});

    dispatch({type:RoomActionTypes.FETCH_ROOMDETAIL, payload: res.data});
}

export const submitRoom = (roomInfo, onCancel) => async dispatch => {
    const res = axios.post('/api/post', {roomInfo});
    dispatch({type: RoomActionTypes.FETCH_ROOMS, payload: res.data});
    onCancel();
};
