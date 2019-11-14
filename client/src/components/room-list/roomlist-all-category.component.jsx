import React, { useEffect } from 'react';

import RoomList from './room-list';

const RoomListAllCategory = () => {
  
  return (
    <>
      <section className='container rooms-section'>
        <h2>Downtown</h2>
          <RoomList category='Downtown' />
        </section>

      <section className='container rooms-section'>
        <h2>Robson</h2>
        <RoomList category='Robson' />
      </section>

      <section className='container rooms-section'>
        <h2>Westend</h2>
        <RoomList category='Westend' />
      </section>
      <section className='container rooms-section'>
        <h2>EastVancouver</h2>
        <RoomList category='EastVancouver' />
      </section>
      <section className='container rooms-section'>
        <h2>Kitsilano</h2>
        <RoomList category='Kitsilano' />
      </section>
      <section className='container rooms-section'>
        <h2>Richmond</h2>
        <RoomList category='Richmond' />
      </section>
      <section className='container rooms-section'>
        <h2>Burnaby</h2>
        <RoomList category='Burnaby' />
      </section>
    </>
  )
}

export default RoomListAllCategory;