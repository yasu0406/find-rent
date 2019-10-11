import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import RoomList from './room-list';

const RoomListAllCategory = () => {

  return (
    <>
      <section className='container rooms-section'>
        <h2>Downtown</h2>
        <ul className='row room-list'>
            <RoomList category='Downtown' />
        </ul>
        <Link to='/downtown' className='btn btn-danger'>View All</Link>
        </section>

      <section className='container rooms-section'>
        <h2>Robson</h2>
        <ul className='row room-list'>
            <RoomList category='Robson' />
        </ul>
        <Link to='/robson' className='btn btn-danger'>View All</Link>
      </section>

      <section className='container rooms-section'>
        <h2>Westend</h2>
        <ul className='row room-list'>
            <RoomList category='Westend' />
        </ul>
        <Link to='/westend' className='btn btn-danger'>View All</Link>
      </section>
    </>
  )
}

export default RoomListAllCategory;