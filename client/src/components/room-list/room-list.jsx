import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchRooms } from '../../redux/rooms/rooms.action';

import './room-list.styles.scss';

const RoomList = (props) => {
    useEffect(()=> {
        props.fetchRooms();
    },[]);
    return (
        <div className='col-12'>Loading</div>
    )
}
const mapStateToProps = state => {
    return {
        rooms: state.rooms
    }
  }
  
export default connect(
    mapStateToProps,
    {
        fetchRooms
    }
)(RoomList);