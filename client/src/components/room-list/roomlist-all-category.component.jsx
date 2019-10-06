import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import RoomList from './room-list';

const RoomListAllCategory = () => {

  return (
    <>
      <section className='mt-5 container'>
        <h2>Downtown</h2>
        <ul className='row mb-5 room-list'>
            <RoomList category='Downtown' />
        </ul>
        <Link to='/downtown' className='btn btn-danger'>View All</Link>
        </section>

      <section className='mt-5 container'>
        <h2>Robson</h2>
        <ul className='row mb-5 room-list'>
            <RoomList category='Robson' />
        </ul>
        <Link to='/downtown' className='btn btn-danger'>View All</Link>
      </section>

      <section className='mt-5 container'>
        <h2>Westend</h2>
        <ul className='row mb-5 room-list'>
            <RoomList category='Westend' />
        </ul>
        <Link to='/westend' className='btn btn-danger'>View All</Link>
      </section>
    </>
  )
}

export default RoomListAllCategory;