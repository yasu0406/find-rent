import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchRooms } from '../../redux/rooms/rooms.action';
import {fetchUser} from '../../redux/user/user.action';

import Spinner from '../spinner/spinner.component';

import './save-rooms.styles.scss';

const SaveRooms = (props) => {
    useEffect(()=> {
        props.fetchRooms();
        props.fetchUser();
    },[]);
    if(props.rooms.rooms && props.user.user) {
        if(props.user.user.savelist) {
            return (
                <ul className='row room-list'>
                    {
                        props.user.user.savelist.map((save) => {
                            return props.rooms.rooms.map((room) => {
                                const title = room.title;
                                const sliceTitle = title.length > 30 ? title.slice(0, 30) + '…' : title;
                                if(room._id === save) {
                                    return (
                                        <li className='col-md-2' key={room._id}>
                                            <Link to={`/rooms/room-detail/${room._id}`}>
                                                <div className='thumb-nail' style={{backgroundImage: `url(${room.imgUrl.img1 ? room.imgUrl.img1: process.env.PUBLIC_URL + '/images/default-img.png'})`}}></div>
                                                <p>{room.roomSize}</p>
                                                <h3>{sliceTitle}</h3>
                                                <p>${room.price}</p>
                                            </Link>
                                        </li>
                                        )
                                    } else if(!room) {
                                        return(
                                            <li className='col-12'><h3>Nothing save room yet</h3></li>
                                        )
                                    }
                                });
                            }
                        )
                    }
                </ul>
            )
        } else {
            return(
                <div><h3>Nothing posted yet</h3></div>
            )
        }
    } else {
        return <Spinner />
    }
}
const mapStateToProps = state => {
    return {
        rooms: state.rooms,
        user: state.user
    }
}
  
export default connect(
    mapStateToProps,
    {
        fetchRooms,
        fetchUser
    }
)(SaveRooms);