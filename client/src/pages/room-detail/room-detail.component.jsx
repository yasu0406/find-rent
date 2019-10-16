import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';

import {fetchRoomDetail} from '../../redux/rooms/rooms.action';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.css';
import './room-detail.styles.scss';

const RoomDetail = (props) => {
    useEffect(() => {    
        props.fetchRoomDetail(props.match.params.id);
        return () => {
            props.fetchRoomDetail();
        }
    },[]);

    if(props.room && props.room.length != 0) {
        const {title, area, describe, street, price, available, houseType, roomSize, roomType, bath, availableSmoke, landry, parking, userInfo} = props.room[0];
        const {img1, img2, img3, img4, img5} = props.room[0].imgUrl;
        const {wifi, water, pet, gym} = props.room[0].amenities;

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
                <section className='room-titles'>
                    <div className='row'>
                        <div className='col-md-2 order-md-2 user-avator'>
                            <img src={userInfo.userPhoto? userInfo.userPhoto : `${process.env.PUBLIC_URL}/images/user-default-img.png`} alt={userInfo.userName}/>
                            <p>{userInfo.userName}</p>
                        </div>
                        <div className='col-md-10 order-md-1'>
                            <h2>{title}</h2>
                            <p>{area}</p>
                            <h3>${price}</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <dl className='col-md-3'>
                            <dt>
                                Room Size
                            </dt>
                            <dd>
                                {roomSize}
                            </dd>
                        </dl>
                        <dl className='col-md-3'>
                            <dt>Location</dt>
                            <dd>Monmouth Ave</dd>
                        </dl>
                        <dl className='col-md-3'>
                            <dt>Hose Type</dt>
                            <dd>{houseType}</dd>
                        </dl>
                        <dl className='col-md-3'>
                            <dt>Room Type</dt>
                            <dd>{roomType}</dd>
                        </dl>
                        <dl className='col-md-3'>
                            <dt>Hose Type</dt>
                            <dd>{houseType}</dd>
                        </dl>
                        <dl className='col-md-3'>
                            <dt>Bath</dt>
                            <dd>{bath}</dd>
                        </dl>
                        <dl className='col-md-3'>
                            <dt>Landry</dt>
                            <dd>{landry}</dd>
                        </dl>
                        <dl className='col-md-3'>
                            <dt>Smoke</dt>
                            <dd>{availableSmoke ? 'Yes' : 'No'}</dd>
                        </dl>
                        <dl className='col-md-3'>
                            <dt>Parking</dt>
                            <dd>{parking ? 'Yes' : 'No'}</dd>
                        </dl>
                        <dl className='col-md-3'>
                            <dt>Available</dt>
                            <dd>{available}</dd>
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
                    
                <section className='room-amenities'>
                    <div>
                        <h2>Amenities</h2>
                        <ul className='row'>
                            {wifi ? <li className='col-lg-2'>WI-FI</li> : ''}
                            {water ? <li className='col-lg-2'>Water</li> : ''}
                            {pet ? <li className='col-lg-2'>Pet-Friendly</li> : ''}
                            {gym ? <li className='col-lg-2'>Gym</li> : ''}
                        </ul>
                    </div>
                </section>    
                
                <section>
                    <div>
                        <h2>The neighborhood</h2>
                        <iframe src={`http://maps.google.co.jp/maps?q=${street}&output=embed`} width="100%" height="400" allowFullScreen frameBorder="0"></iframe>
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