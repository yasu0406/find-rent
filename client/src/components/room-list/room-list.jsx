import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchRooms } from '../../redux/rooms/rooms.action';

import Spinner from '../spinner/spinner.component';

import './room-list.styles.scss';

const RoomList = (props) => {
    useEffect(()=> {
        props.fetchRooms();
    },[]);
    if(props.rooms.rooms) {
        if(props.category) {
            let catUrl = props.category.charAt(0).toLowerCase() + props.category.slice(1).toLowerCase()
            return(
                <>
                    <ul className='row room-list'>
                        {
                            props.rooms.rooms.filter((room) => props.category == room.area).filter((room, idx) => idx < 4).map(room => {
                                const title = room.title;
                                const sliceTitle = title.length > 30 ? title.slice(0, 30) + '…' : title;
                                return (
                                    <li className='col-md-3' key={room._id}>
                                        <Link to={`/rooms/room-detail/${room._id}`}>
                                            <div className='thumb-nail' style={{backgroundImage: `url(${room.imgUrl.img1 ? room.imgUrl.img1: process.env.PUBLIC_URL + '/images/default-img.png'})`}}></div>
                                            <p>{room.roomSize}</p>
                                            <h3>{sliceTitle}</h3>
                                            <p>${room.price}</p>
                                        </Link>
                                    </li>
                                    )
                                }
                                )
                        }
                    </ul>
                    <Link to={`/category/${catUrl}`} className='btn btn-danger'>View All</Link>
                </>
            )
        } else if(props.areaCategoryName) {
            if(props.areaCategoryName == 'all') {
                return (
                    <ul className='row room-list'>
                    {
                        props.rooms.rooms.map(room => {
                            const title = room.title;
                            const sliceTitle = title.length > 30 ? title.slice(0, 30) + '…' : title;
                            return (
                                    <li className='col-md-3' key={room._id}>
                                        <Link to={`/rooms/room-detail/${room._id}`}>
                                            <div className='thumb-nail' style={{backgroundImage: `url(${room.imgUrl.img1 ? room.imgUrl.img1: process.env.PUBLIC_URL + '/images/default-img.png'})`}}></div>
                                            <p>{room.roomSize}</p>
                                            <h3>{sliceTitle}</h3>
                                            <p>${room.price}</p>
                                        </Link>
                                    </li>
                                    )
                                }
                            )
                    }
                    </ul>
                )
            } else {
                return(
                    <ul className='row room-list'>
                        {
                            props.rooms.rooms.filter((room) => room.area.toLowerCase().includes(props.areaCategoryName)).map(room => {
                                const title = room.title;
                                const sliceTitle = title.length > 30 ? title.slice(0, 30) + '…' : title;
                                return (
                                    <li className='col-md-3' key={room._id}>
                                        <Link to={`/rooms/room-detail/${room._id}`}>
                                            <div className='thumb-nail' style={{backgroundImage: `url(${room.imgUrl.img1 ? room.imgUrl.img1: process.env.PUBLIC_URL + '/images/default-img.png'})`}}></div>
                                            <p>{room.roomSize}</p>
                                            <h3>{sliceTitle}</h3>
                                            <p>${room.price}</p>
                                        </Link>
                                    </li>
                                    )
                                    }
                                )
                        }
                    </ul>
                )
            }
        } else {
            return props.rooms.rooms.map(room => {
                const title = room.title;
                const sliceTitle = title.length > 30 ? title.slice(0, 30) + '…' : title;
                return (
                    <li className='col-md-3' key={room._id}>
                        <Link to={`/rooms/room-detail/${room._id}`}>
                            <div className='thumb-nail' style={{backgroundImage: `url(${room.imgUrl.img1 ? room.imgUrl.img1: process.env.PUBLIC_URL + '/images/default-img.png'})`}}></div>
                            <p>{room.roomSize}</p>
                            <h3>{sliceTitle}</h3>
                            <p>${room.price}</p>
                        </Link>
                    </li>
                    )
                }
            )
        }
    } else {
        return (
            <Spinner />
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