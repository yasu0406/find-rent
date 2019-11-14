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
      <section className='container rooms-section'>
        <div>
          <h2>{chanedTitleChar(props.match.params.category)}</h2>
          <RoomList areaCategoryName={props.match.params.category} />
        </div>
        {/* <SideBar /> */}
        </section>
    </>
  )
}

export default withRouter(RoomListCategory);