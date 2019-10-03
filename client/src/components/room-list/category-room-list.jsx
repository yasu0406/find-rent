import React from 'react';

import AreaRoomList from './arearoom-list';

const CategoryRoomList = (props) => {
  return(
    <section class="contaier">
      <h2 className='mb-3'>Downtown</h2>
      <ul className='row mb-5'>
        <AreaRoomList area={props.area} listNum={15}/>
      </ul>
    </section>
  )
}

export default CategoryRoomList;