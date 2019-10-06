import React from 'react';
import { withRouter } from 'react-router-dom';


import RoomList from './room-list';
import SideBar from '../side-bar/side-bar.component';

const RoomListCategory = props => {
  const chanedTitleChar = (categoryTitle) => {
    if (!categoryTitle || typeof categoryTitle !== 'string') return categoryTitle;
    return categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1).toLowerCase();
  };

  return (
    <>
      <section className='mt-5 row container'>
        <div className='col-md-10'>
          <h2>{chanedTitleChar(props.match.params.category)}</h2>
          <ul className='row mb-5 room-list'>
              <RoomList areaCategoryName={props.match.params.category} />
          </ul>
        </div>
        <SideBar />
        </section>
    </>
  )
}

export default withRouter(RoomListCategory);