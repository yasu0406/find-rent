import React, { useState }  from 'react';
import { Route, withRouter } from 'react-router-dom';

import RoomListAllCategory from '../../components/room-list/roomlist-all-category.component';
import RoomListCategory from '../../components/room-list/roomlist-category.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './home.styles.scss';

const Home = props => {
    const [areaCategoryName, setAreaCategoryName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push(`category/${areaCategoryName}`);
    }
    return (
        <>
        <div className='main-visual'>
            <div className='container'>
                <div className='contact-form'>
                <h2>Find Rooms</h2>
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
        <Route exact path='/' component={RoomListAllCategory} />
        <Route exact path='/category/:category' component={() => <RoomListCategory areaCategoryName={areaCategoryName} />} />
        </>
    );
}

export default withRouter(Home);