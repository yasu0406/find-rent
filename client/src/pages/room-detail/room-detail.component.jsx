import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';

import {fetchRoomDetail} from '../../redux/rooms/rooms.action';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.css';
import './room-detail.styles.scss';

const RoomDetail = (props) => {
    console.log(props);
    if(props.room) {
        console.log(props.room.length);
    }
    useEffect(() => {    
        props.fetchRoomDetail(props.match.params.id);
        return () => {
            props.fetchRoomDetail();
        }
    },[]);

    if(props.room && props.room.length != 0) {
        const {title, area, describe, price, available, houseType, roomSize, roomType, bath, availableSmoke, landry, parking, pet, img1, img2, img3, img4, img5, userInfo} = props.room[0];

        return(
            <>
            <div>
                <div className='carousel-wrap'>
               <Carousel showArrows={true} autoPlay={true} emulateTouch={true} stopOnHover={false} transitionTime={1000} infiniteLoop={true} interval={5000}>
                <div style={{backgroundImage: `url(${img1 ? img1: process.env.PUBLIC_URL + '/images/default-img.png'})`}}>
                    <img src={img1 ? img1: process.env.PUBLIC_URL + '/images/default-img.png'} alt={title}/>
                </div>
                <div style={{backgroundImage: `url(${img2 ? img2: process.env.PUBLIC_URL + '/images/default-img.png'})`}}>
                    <img src={img2 ? img2: process.env.PUBLIC_URL + '/images/default-img.png'} alt={title} />
                </div>
                <div style={{backgroundImage: `url(${img3 ? img3: process.env.PUBLIC_URL + '/images/default-img.png'})`}}>
                    <img src={img3 ? img3: process.env.PUBLIC_URL + '/images/default-img.png'} alt={title} />
                </div>
                <div style={{backgroundImage: `url(${img4 ? img4: process.env.PUBLIC_URL + '/images/default-img.png'})`}}>
                    <img src={img4 ? img4: process.env.PUBLIC_URL + '/images/default-img.png'} alt={title} />
                </div>
                <div style={{backgroundImage: `url(${img5 ? img5: process.env.PUBLIC_URL + '/images/default-img.png'})`}}>
                    <img src={img5 ? img5: process.env.PUBLIC_URL + '/images/default-img.png'} alt={title} />
                </div>
            </Carousel>
                </div>
            </div>
            <div className='container room-info'>
                <section>
                    <div className='row'>
                        <div className='col-md-10'>
                            <h2>{title}</h2>
                            <p>{area}</p>
                        </div>
                        <div className='col-md-2 user-avator'>
                            <img src={userInfo.userPhoto? userInfo.userPhoto : `${process.env.PUBLIC_URL}/images/user-default-img.png`} alt={userInfo.userName}/>
                            <p>{userInfo.userName}</p>
                        </div>
                    </div>
                    <div>
                        <dl>
                            <dt>
                                Private room in apartment
                            </dt>
                            <dd>
                                {roomSize}
                            </dd>
                        </dl>
                        <dl>
                            <dt>Location</dt>
                            <dd>Monmouth Ave</dd>
                        </dl>
                    </div>
                </section>
                    
                <section className='room-describe'>    
                    <div>
                        <h2>The Room</h2>
                        <p>{describe}</p>
                        <p><a className='green-link' href={`mailto:${userInfo.userEmail}`}>Contact host</a></p>
                    </div>
                </section>
                    
                <section>
                    <div>
                        <h2>Amenities</h2>

                    </div>
                </section>    
                
                <section>
                    <div>
                        <h2>The neighborhood</h2>

                    </div>
                </section>     
            </div>
            </>
        );
    } else {
        return (
            <div>Loading</div>
        )
    }
    
}

const mapStateToProps = (state) => {
    console.log(state.rooms.roomDetail);
    return {
        room: state.rooms.roomDetail
    }
}

export default connect(
    mapStateToProps,
    {
        fetchRoomDetail
    }
)(RoomDetail);