import React from 'react';

import PostedRooms from '../../components/posted-rooms/posted-rooms.component';

const PostedList = () => {
    return(
        <section className='container saved-section'>
            <h2>Your Posted</h2>
            <PostedRooms/>
        </section>
    );
};

export default PostedList;