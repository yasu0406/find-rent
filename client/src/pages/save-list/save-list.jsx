import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import SaveRooms from '../../components/save-rooms/save-rooms.component';
const SaveList = () => {
    return (
        <section className='container saved-section'>
            <h2>Your Saved</h2>
            <SaveRooms />
        </section>
    )
};

export default SaveList;