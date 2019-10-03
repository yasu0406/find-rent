import React from 'react';
import { Link } from 'react-router-dom';

import useRooms from './useRooms';

const AreaRoomList = ({ area, listNum }) => {
  const rooms = useRooms(area);
  return (
      rooms.filter((rooms, index) => {
          return index < listNum
      }).map(room => (
          <li key={room._id} className='col-md-3'> 
              <Link to=''>
              <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
              <p className='mt-2'>{room.address}</p>
              <h3 className='mt-2 mb-2'>{room.title}</h3>
              <p>$ {room.price}</p>
              </Link>
          </li>
      ))
  )
}

export default AreaRoomList;