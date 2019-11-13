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
        <Link to='/category/downtown' className='btn btn-danger'>View All</Link>
        </section>

      <section className='container rooms-section'>
        <h2>Robson</h2>
        <ul className='row room-list'>
            <RoomList category='Robson' />
        </ul>
        <Link to='/category/robson' className='btn btn-danger'>View All</Link>
      </section>

      <section className='container rooms-section'>
        <h2>Westend</h2>
        <ul className='row room-list'>
            <RoomList category='Westend' />
        </ul>
        <Link to='/category/westend' className='btn btn-danger'>View All</Link>
      </section>
      <section className='container rooms-section'>
        <h2>EastVancouver</h2>
        <ul className='row room-list'>
            <RoomList category='EastVancouver' />
        </ul>
        <Link to='/category/eastvancouver' className='btn btn-danger'>View All</Link>
      </section>
      <section className='container rooms-section'>
        <h2>Kitsilano</h2>
        <ul className='row room-list'>
            <RoomList category='Kitsilano' />
        </ul>
        <Link to='/category/kitsilano' className='btn btn-danger'>View All</Link>
      </section>
      <section className='container rooms-section'>
        <h2>Richmond</h2>
        <ul className='row room-list'>
            <RoomList category='Richmond' />
        </ul>
        <Link to='/category/richmond' className='btn btn-danger'>View All</Link>
      </section>
      <section className='container rooms-section'>
        <h2>Burnaby</h2>
        <ul className='row room-list'>
            <RoomList category='Burnaby' />
        </ul>
        <Link to='/category/burnaby' className='btn btn-danger'>View All</Link>
      </section>
    </>
  )
}

export default RoomListAllCategory;