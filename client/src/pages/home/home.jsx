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
            props.history.push(`/${areaCategoryName}`);
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
                        </select>
                    </div>
                    <CustomButton type='submit' className='btn btn-danger'>Serach</CustomButton>
                </form>
                </div>
            </div>
        </div>
        <Route exact path='/' component={RoomListAllCategory} />
        <Route exact path='/:category' component={() => <RoomListCategory areaCategoryName={areaCategoryName} />} />
        </>
    );
}

export default withRouter(Home);