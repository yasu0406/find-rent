import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchRoomDetail} from '../../redux/rooms/rooms.action';
import EditPostForm from '../../components/edit-post-form/edit-post-form.component';
import Spinner from '../../components/spinner/spinner.component';

const EditPost = (props) => {
    useEffect(() => {
        props.fetchRoomDetail(props.match.params.id);
    },[]);
    if(props.room) {
        return (
            <EditPostForm roomId={props.match.params.id} roomInfo={props.room[0]} history={props.history}/>
        )
    } else {
        return<Spinner />;    
    }
};

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
)(EditPost);