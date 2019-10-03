import React, { useState, useEffect }  from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { ftechRooms } from '../../redux/rooms/rooms.action';

import CustomButton from '../../components/custom-button/custom-button.component';

import './home.styles.scss';



const Home = props => {
    const [areaCategoryName, setAreaCategoryName] = useState('downtown')
    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push(`/${areaCategoryName}`);
    }

    const test = () => {
        if(props.rooms.rooms) {
           return props.rooms.rooms.map((room) => {
                const title = room.title;
				const sliceTitle = title.length > 30 ? title.slice(0, 30) + '…' : title;
                return (
                    <li className='col-md-3' key={room._id}>
                        <Link to={`room-detail/${room._id}`}>
                            <div className='thumb-nail' style={{backgroundImage: `url(${room.img1})`}}></div>
                            <p>{room.roomSize}</p>
                            <h3>{sliceTitle}</h3>
                            <p>${room.price}</p>
                        </Link>
                    </li>
                )
            })
        }
        
    }

    useEffect(() => {
        props.ftechRooms();
    },[]) 

    return (
        <>
        <div className='main-visual'>
            <div className='container'>
                <div className='contact-form'>
                <h2 className='mb-3'>Find Rooms</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Select Area</label>
                        <select 
                            name="select-area" 
                            className="form-control" 
                            id="exampleFormControlSelect1"
                            value={areaCategoryName} 
                            onChange={e => setAreaCategoryName(e.target.value) }
                           >
                            <option value="downtown">DOWNTOWN</option>
                            <option value="robson">ROBSON</option>
                            <option value="westend">WESTEND</option>
                        </select>
                    </div>
                    <CustomButton type='submit' className='btn btn-danger'>Serach</CustomButton>
                </form>
                </div>
            </div>
        </div>
        {/* <Route exact path='/' component={RoomList} />
        <Route exact path={`/${areaCategoryName}`} component={AreaCategoryList} /> */}
        <section className='mt-5 container'>
        <h2 className='mb-3'>Downtown</h2>
        <ul className='row mb-5'>
            {test()}
        </ul>
        <button className='btn btn-danger'>View</button>
      </section>

      <section className='mt-5 container'>
        <h2 className='mb-3'>Robson</h2>
        <ul className='row mb-5'>
        </ul>
        <button className='btn btn-danger'>View</button>
      </section>

      <section className='mt-5 container'>
        <h2 className='mb-3'>Downtown</h2>
        <ul className='row mb-5'>
        </ul>
        <button className='btn btn-danger'>View</button>
      </section>
        </>
    );
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
)(Home)