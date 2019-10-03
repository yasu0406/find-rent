import React from 'react';

import AreaRoomList from './arearoom-list';
import './room-list.styles.scss';

const RoomList = () => {
  return (
    <>
      <section className='mt-5 container'>
        <h2 className='mb-3'>Downtown</h2>
        <ul className='row mb-5'>
          <AreaRoomList area={'downtown'} listNum={4} />
        </ul>
        <button className='btn btn-danger'>View</button>
      </section>

      <section className='mt-5 container'>
        <h2 className='mb-3'>Robson</h2>
        <ul className='row mb-5'>
          <AreaRoomList area={'robson'} listNum={4} />
        </ul>
        <button className='btn btn-danger'>View</button>
      </section>

      <section className='mt-5 container'>
        <h2 className='mb-3'>Downtown</h2>
        <ul className='row mb-5'>
          <AreaRoomList area={'hastings'} listNum={4} />
        </ul>
        <button className='btn btn-danger'>View</button>
      </section>
    </>
  )
}

export default RoomList;