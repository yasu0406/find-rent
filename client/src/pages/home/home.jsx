import React, { useState }  from 'react';
import { Route, withRouter } from 'react-router-dom';

import RoomListAllCategory from '../../components/room-list/roomlist-all-category.component';
import RoomListCategory from '../../components/room-list/roomlist-category.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './home.styles.scss';

const Home = props => {
    const [areaCategoryName, setAreaCategoryName] = useState('all');
    const handleSubmit = (e) => {
        e.preventDefault();
        setAreaCategoryName(e.target.value);
        if(areaCategoryName != e.target.value) {
            let url = `/category/${areaCategoryName}`;
            props.history.push(url);
        }
    }
    const handleChange = (e) => {
        setAreaCategoryName(e.target.value);
    }
    return (
        <>
        <div className='main-visual'>
            <div className='container'>
                <div className='search-form'>
                <h2>Find Rooms</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Select Area</label>
                        <select 
                            name="select-area" 
                            className="form-control" 
                            id="exampleFormControlSelect1"
                            value={areaCategoryName} 
                            onChange={handleChange}
                           >
                            <option value="all">All</option>
                            <option value="downtown">Downtown</option>
                            <option value="robson">Robson</option>
                            <option value="westend">Westend</option>
                            <option value='eastvancouver'>EastVancouver</option>
                            <option value='kitsilano'>Kitsilano</option>
                            <option value='richmond'>Richmond</option>
                            <option value='burnaby'>Burnaby</option>
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