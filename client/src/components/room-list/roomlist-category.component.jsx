import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RoomList from './room-list';
import { ftechRooms } from '../../redux/rooms/rooms.action';

const RoomListCategory = props => {
  useEffect(() => {
    props.ftechRooms();
  },[]); 

  return (
    <>
      <section className='mt-5 container'>
        <h2>Downtown</h2>
        <ul className='row mb-5'>
            <RoomList areaCategoryName={props.areaCategoryName} />
        </ul>
        </section>
    </>
  )
}

const mapStateToProps = state => {
  console.log(state.rooms);
  return {
      rooms: state.rooms
  }
}


export default connect(
  mapStateToProps,
  {
      ftechRooms
  }
)(RoomListCategory);