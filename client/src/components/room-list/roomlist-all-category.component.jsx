import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RoomList from './room-list';
import { ftechRooms } from '../../redux/rooms/rooms.action';

const RoomListAllCategory = props => {
  useEffect(() => {
    props.ftechRooms();
  },[]); 

  return (
    <>
      <section className='mt-5 container'>
        <h2>Downtown</h2>
        <ul className='row mb-5'>
            <RoomList category='Downtown' />
        </ul>
        <Link to='/category/downtown' className='btn btn-danger'>View</Link>
        </section>

      <section className='mt-5 container'>
        <h2>Robson</h2>
        <ul className='row mb-5'>
            <RoomList category='Robson' />
        </ul>
        <button className='btn btn-danger'>View</button>
      </section>

      <section className='mt-5 container'>
        <h2>Downtown</h2>
        <ul className='row mb-5'>
            <RoomList category='downtown' />
        </ul>
        <button className='btn btn-danger'>View</button>
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
)(RoomListAllCategory);