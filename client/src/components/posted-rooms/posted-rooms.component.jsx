import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchRooms} from '../../redux/rooms/rooms.action';
import {fetchUserId} from '../../redux/user/user.action';

import Spinner from '../spinner/spinner.component';

import './posted-rooms.styles.scss';

const PostedRooms = (props) => {
    var post = [];
    var count = 0;
    useEffect(() => {
        props.fetchRooms();
        props.fetchUserId();
    },[]);
    if(props.rooms.rooms) {
        return(
            <ul className='row room-list'>
                {
                    props.rooms.rooms.map((room) => {
                        const title = room.title;
                        const sliceTitle = title.length > 30 ? title.slice(0, 30) + '…' : title;
                        if(room.userInfo.userId === props.userId) {
                            post.push(room.userInfo.userId)
                            return(
                                <li className='col-md-2' key={room._id}>
                                    <Link to={`/rooms/room-detail/${room._id}`}>
                                        <div className='thumb-nail' style={{backgroundImage: `url(${room.imgUrl.img1 ? room.imgUrl.img1: process.env.PUBLIC_URL + '/images/default-img.png'})`}}></div>
                                        <p>{room.roomSize}</p>
                                        <h3>{sliceTitle}</h3>
                                        <p>${room.price}</p>
                                    </Link>
                                </li>
                            )
                        } else if(post.length === 0 && count <= 0) {
                            count += 1;
                            return(
                                <li className='col-12' key={count}><h3>Nothing posted yet</h3></li>
                            )
                        }
                    })
                }
            </ul>
        ) 
    } else {
        return <Spinner />
    }
};

const mapStateToProps = state => {
    return {
        rooms: state.rooms,
        userId: state.user.userId
    }
}

export default connect(
    mapStateToProps,
    {
        fetchRooms,
        fetchUserId
    }
)(PostedRooms);