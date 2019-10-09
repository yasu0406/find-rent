import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchRooms } from '../../redux/rooms/rooms.action';

import './room-list.styles.scss';

const RoomList = (props) => {
    useEffect(()=> {
        props.fetchRooms();
    },[]);
    if(props.rooms.rooms) {
        if(props.category) {
            return props.rooms.rooms.filter((room) => props.category == room.area).filter((room, idx) => idx < 4).map(room => {
                const title = room.title;
                const sliceTitle = title.length > 30 ? title.slice(0, 30) + '…' : title;
                return (
                    <li className='col-md-3' key={room._id}>
                        <Link to={`room-detail/${room._id}`}>
                            <div className='thumb-nail' style={{backgroundImage: `url(${room.img1 ? room.img1: process.env.PUBLIC_URL + '/images/default-img.png'})`}}></div>
                            <p>{room.roomSize}</p>
                            <h3>{sliceTitle}</h3>
                            <p>${room.price}</p>
                        </Link>
                    </li>
                    )
                }
            )
        } else {
            if(props.areaCategoryName == 'all') {
                return props.rooms.rooms.map(room => {
                    const title = room.title;
                    const sliceTitle = title.length > 30 ? title.slice(0, 30) + '…' : title;
                    return (
                        <li className='col-md-3' key={room._id}>
                            <Link to={`room-detail/${room._id}`}>
                                <div className='thumb-nail' style={{backgroundImage: `url(${room.img1 ? room.img1: process.env.PUBLIC_URL + '/images/default-img.png'})`}}></div>
                                <p>{room.roomSize}</p>
                                <h3>{sliceTitle}</h3>
                                <p>${room.price}</p>
                            </Link>
                        </li>
                        )
                    }
                )
            } else {
                return props.rooms.rooms.filter((room) => room.area.toLowerCase().includes(props.areaCategoryName)).map(room => {
                    const title = room.title;
                    const sliceTitle = title.length > 30 ? title.slice(0, 30) + '…' : title;
                    return (
                        <li className='col-md-3' key={room._id}>
                            <Link to={`room-detail/${room._id}`}>
                                <div className='thumb-nail' style={{backgroundImage: `url(${room.img1 ? room.img1: process.env.PUBLIC_URL + '/images/default-img.png'})`}}></div>
                                <p>{room.roomSize}</p>
                                <h3>{sliceTitle}</h3>
                                <p>${room.price}</p>
                            </Link>
                        </li>
                        )
                    }
                )
            }
            
        }
    } else {
        return (
            <div className='col-12'>Loading</div>
        )
    }
}
const mapStateToProps = state => {
    return {
        rooms: state.rooms
    }
  }
  
export default connect(
    mapStateToProps,
    {
        fetchRooms
    }
)(RoomList);