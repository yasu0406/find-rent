import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ftechRooms } from '../../redux/rooms/rooms.action';

import RoomList from './room-list';
import SideBar from '../side-bar/side-bar.component';

const RoomListCategory = props => {
  const chanedTitleChar = (categoryTitle) => {
    if (!categoryTitle || typeof categoryTitle !== 'string') return categoryTitle;
    return categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1).toLowerCase();
  };
  useEffect(() => {
    props.ftechRooms();
  },[]); 

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
)(withRouter(RoomListCategory));