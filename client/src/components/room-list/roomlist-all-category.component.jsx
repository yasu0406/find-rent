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
        <Link to='/downtown' className='btn btn-danger'>View All</Link>
        </section>

      <section className='mt-5 container'>
        <h2>Robson</h2>
        <ul className='row mb-5'>
            <RoomList category='Robson' />
        </ul>
        <Link to='/downtown' className='btn btn-danger'>View All</Link>
      </section>

      <section className='mt-5 container'>
        <h2>Westend</h2>
        <ul className='row mb-5'>
            <RoomList category='Westend' />
        </ul>
        <Link to='/westend' className='btn btn-danger'>View All</Link>
      </section>
    </>
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
      ftechRooms
  }
)(RoomListAllCategory);