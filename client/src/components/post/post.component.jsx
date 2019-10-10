import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import {submitRoom} from '../../redux/rooms/rooms.action';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FileBase from 'react-file-base64';

import 'react-datepicker/dist/react-datepicker.css';

import './post.styles.scss';

const Post= ({onCancel, user, submitRoom}) => {
    const [roomInfo, setRoomInfo] = useState({
        title:'',
        area:'',
        street:'',
        describe: '',
        price: 0,
        available: '',
        roomSize: '',
        houseType: 'shearhouse',
        roomType: 'privateRoom',
        bath: 'share',
        availableSmoke: true,
        landry: '',
        parking: true,
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: '',
        userInfo: {
            userId: user.id,
            userName: user.displayName,
            userPhoto: user.photoURL? user.photoURL : `${process.env.PUBLIC_URL}/images/user-default-img.png`,
            userEmail: user.email
        },
        amenities: {
            wifi: false,
            water: false,
            pet: false,
            gym: false
        }
    });
    const postHandleSubmit = event => {
        event.preventDefault();
        submitRoom(roomInfo, onCancel);
    };    
    const handleInput = (event) => {
        const { name, checked } = event.target
        setRoomInfo({
            ...roomInfo,
            amenities: {
                ...roomInfo.amenities,
                [name]: checked
            }
        });
    };
    const handleDate = date => {
        setRoomInfo({
            ...roomInfo, 
            available: date
        })
    };
    const handleChange = event => {
        let { value, name } = event.target;
        if(value === 'true') {
            value = true;
        } else if(value === 'false') {
            value = false;
        }
        setRoomInfo({...roomInfo, [name]: value });
    };
    return (
        <div id='myModal' className='modal-form post-form'>
            <div className='modal-content'>
                <span className='close mb-5' onClick={onCancel}>&times;</span>
                <form onSubmit={postHandleSubmit}>
                    <ul className='mb-5 row'>
                        <li className='col-md-8'>
                            <h3><label htmlFor='title'>Room Name*</label></h3>
                            <FormInput
                                id='title'
                                name='title'
                                type='text'
                                handleChange={handleChange}
                                value={roomInfo.title}
                                placeholder='Room name'
                                required
                            />
                        </li>
                        <li className='col-md-2'>
                            <h3><label htmlFor='area'>Area*</label></h3>
                            <select
                                name='area' 
                                id='area'
                                className='form-control'
                                onChange={handleChange}
                                value={roomInfo.address}
                                required 
                                >
                                <option value='select'>Select</option>
                                <option value='Downtown'>Downtown</option>
                                <option value='Robson'>Robson</option>
                                <option value='Westend'>Westend</option> 
                            </select>
                        </li>
                        <li className='col-md-2'>
                            <h3><label htmlFor='street'>Street*</label></h3>
                            <FormInput
                                id='street'
                                name='street'
                                type='text'
                                handleChange={handleChange}
                                value={roomInfo.street}
                                placeholder='Street'
                                required
                            />
                        </li>
                    </ul>   
                    <div className='description-area'>
                        <h3><label htmlFor='describe'>Describe*</label></h3>
                        <textarea 
                            id='describe'
                            className='col-12 form-control' 
                            name='describe'
                            value={roomInfo.describe}
                            onChange={handleChange}
                            required
                        />
                    </div> 
                    <ul className='row mt-5 mb-5'>
                        <li className='col-md-4'> 
                             <img src={roomInfo.img1 ? roomInfo.img1: `${process.env.PUBLIC_URL}/images/default-img.png`} alt='upload-image' className='process__image' />
                             <div className='custom-file'>
                                <FileBase type='file' multiple={false} onDone={(files) => {setRoomInfo({...roomInfo,img1:files.base64.toString()})}} />
                                <label className='custom-file-label' htmlFor='customFile01'>Choose file</label>
                             </div>
                        </li>
                        <li className='col-md-4'> 
                             <img src={roomInfo.img2 ? roomInfo.img2: `${process.env.PUBLIC_URL}/images/default-img.png`} alt='upload-image' className='process__image' />
                             <div className='custom-file'>
                                <FileBase type='file' multiple={false} onDone={(files) => {setRoomInfo({...roomInfo,img2:files.base64.toString()})}} />
                                <label className='custom-file-label' htmlFor='customFile03'>Choose file</label>
                             </div>
                        </li>
                        <li className='col-md-4'> 
                             <img src={roomInfo.img3 ? roomInfo.img3: `${process.env.PUBLIC_URL}/images/default-img.png`} alt='upload-image' className='process__image' />
                             <div className='custom-file'>
                                <FileBase type='file' multiple={false} onDone={(files) => {setRoomInfo({...roomInfo,img3:files.base64.toString()})}} />
                                <label className='custom-file-label' htmlFor='customFile04'>Choose file</label>
                             </div>
                        </li>
                        <li className='col-md-4'> 
                             <img src={roomInfo.img4 ? roomInfo.img4: `${process.env.PUBLIC_URL}/images/default-img.png`} alt='upload-image' className='process__image' />
                             <div className='custom-file'>
                                <FileBase type='file' multiple={false} onDone={(files) => {setRoomInfo({...roomInfo,img4:files.base64.toString()})}} />
                                <label className='custom-file-label' htmlFor='customFile'>Choose file</label>
                             </div>
                        </li>
                        <li className='col-md-4'> 
                             <img src={roomInfo.img5 ? roomInfo.img5: `${process.env.PUBLIC_URL}/images/default-img.png`} alt='upload-image' className='process__image' />
                             <div className='custom-file'>
                                <FileBase type='file' multiple={false} onDone={(files) => {setRoomInfo({...roomInfo,img5:files.base64.toString()})}} />
                                <label className='custom-file-label' htmlFor='customFile'>Choose file</label>
                             </div>
                        </li>
                        
                    </ul>
                    <ul className='row mt-5'>
                        <li className='col-md-3'>
                            <ul className='input-list'>
                                <li>
                                    <h3><label htmlFor='price'>Price*</label></h3>
                                    <FormInput
                                    id='price'
                                    name='price'
                                    type='number'
                                    handleChange={handleChange}
                                    value={roomInfo.price}
                                    placeholder='price'
                                    required 
                                />
                                </li>
                                <li>
                                    <h3><label htmlFor='roomSize'>Room Size*</label></h3>
                                    <FormInput
                                        id='roomSize'
                                        name='roomSize'
                                        type='text'
                                        handleChange={handleChange}
                                        value={roomInfo.roomSize}
                                        placeholder='Room Size'
                                        required 
                                    />
                                </li>
                                <li>
                                    <h3><label htmlFor='available-date'>Available Date*</label></h3>
                                      <DatePicker
                                        id='available-date'
                                        name='available'
                                        selected={roomInfo.available}
                                        onChange={handleDate}
                                        required 
                                        className='form-control'
                                    />
                                </li>
                                <li>
                                    <h3><label htmlFor='landry'>Landry*</label></h3>
                                    <FormInput
                                        name='landry'
                                        type='text'
                                        handleChange={handleChange}
                                        value={roomInfo.landry}
                                        placeholder='Landry'
                                        required 
                                    />
                                </li>
                            </ul>
                        </li>
                        <li className='col-md-2'>
                            <ul className='input-list'>
                                <li className='form-check'>
                                    <ul>
                                        <li className='radio-title'><h3>Hose type*</h3></li>
                                        <li>
                                            <input 
                                                className='form-check-input'
                                                type='radio' 
                                                name='houseType' 
                                                id='shearhouse' 
                                                value='shearhouse' 
                                                checked={roomInfo.houseType === 'shearhouse'} 
                                                onChange={handleChange} 
                                                required 
                                             />
                                            <label className='form-check-label' htmlFor='shearhouse'>
                                                Shear Hose
                                            </label>
                                        </li>
                                        <li>
                                            <input 
                                                className='form-check-input' 
                                                type='radio' 
                                                name='houseType'
                                                id='homestay' 
                                                value='homestay' 
                                                checked={roomInfo.houseType === 'homestay'} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                            <label className='form-check-label' htmlFor='homestay'>
                                                Home Stay
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                                <li className='form-check'>
                                    <ul>
                                        <li className='radio-title'><h3>Room type*</h3></li>
                                        <li>
                                            <input 
                                                className='form-check-input'
                                                type='radio' name='roomType' 
                                                id='privateRoom' 
                                                value='privateRoom' 
                                                checked={roomInfo.roomType === 'privateRoom'} 
                                                onChange={handleChange} 
                                                required 
                                             />
                                            <label className='form-check-label' htmlFor='privateRoom'>
                                                Private room
                                            </label>
                                        </li>
                                        <li>
                                            <input 
                                                className='form-check-input' 
                                                type='radio' 
                                                name='roomType' 
                                                id='shareRoom' 
                                                value='shareRoom' 
                                                checked={roomInfo.roomType === 'shareRoom'} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                            <label className='form-check-label' htmlFor='shareRoom'>
                                                Share room
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                                <li className='form-check'>
                                    <ul>
                                        <li className='radio-title'><h3>Bath*</h3></li>
                                        <li>
                                            <input 
                                                className='form-check-input' 
                                                type='radio' 
                                                name='bath' 
                                                id='share' 
                                                value='share' 
                                                checked={roomInfo.bath === 'share'} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                            <label className='form-check-label' htmlFor='share'>
                                                Share
                                            </label>
                                        </li>
                                        <li>
                                            <input 
                                                className='form-check-input' 
                                                type='radio' 
                                                name='bath' 
                                                id='private' 
                                                value='private' 
                                                checked={roomInfo.bath === 'private'} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                            <label className='form-check-label' htmlFor='private'>
                                                Private
                                            </label>
                                        </li>
                                        <li>
                                            <input 
                                                className='form-check-input' 
                                                type='radio' 
                                                name='bath' 
                                                id='others' 
                                                value='others' 
                                                checked={roomInfo.bath === 'others'} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                            <label className='form-check-label' htmlFor='others'>
                                                Others
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className='col-md-2'>
                            <ul className='input-list'>
                                <li className='form-check'>
                                    <ul>
                                        <li className='radio-title'><h3>Smoke*</h3></li>
                                        <li>
                                            <input 
                                                className='form-check-input' 
                                                type='radio' 
                                                name='availableSmoke' 
                                                id='smoke' 
                                                value='true' 
                                                checked={roomInfo.availableSmoke === true} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                            <label className='form-check-label' htmlFor='smoke'>
                                                Yes
                                            </label>
                                        </li>
                                        <li>
                                            <input 
                                                className='form-check-input' 
                                                type='radio' 
                                                name='availableSmoke' 
                                                id='no-smoke' 
                                                value='false' 
                                                checked={roomInfo.availableSmoke === false} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                            <label className='form-check-label' htmlFor='no-smoke'>
                                                No
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                                <li className='form-check'>
                                    <ul>
                                        <li className='radio-title'><h3>Parking*</h3></li>
                                        <li>
                                            <input 
                                                className='form-check-input' 
                                                type='radio' 
                                                name='parking' 
                                                id='parking' 
                                                value='true' 
                                                checked={roomInfo.parking === true} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                            <label className='form-check-label' htmlFor='parking'>
                                                Yes
                                            </label>
                                        </li>
                                        <li>
                                            <input 
                                                className='form-check-input' 
                                                type='radio' 
                                                name='parking' 
                                                id='no-parking' 
                                                value='false' 
                                                checked={roomInfo.parking === false} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                            <label className='form-check-label' htmlFor='no-parking'>
                                                No
                                            </label>
                                        </li>
                                    </ul>
                                </li>   
                            </ul>
                        </li>
                        <li className='col-md-5 options'>
                            <h3>Options</h3>
                            <ul>
                                <li>
                                    <input
                                        id='wifi'
                                        name='wifi'
                                        type='checkbox'
                                        checked={roomInfo.amenities.wifi === true}
                                        onChange={handleInput} />
                                    <label htmlFor="wifi">Wifi</label>
                                </li>
                                <li>
                                    <input
                                        id='water'
                                        name='water'
                                        type='checkbox'
                                        checked={roomInfo.amenities.water === true}
                                        onChange={handleInput} />
                                    <label htmlFor="water">Water</label>
                                </li>
                                <li>
                                    <input
                                        id='pet'
                                        name='pet'
                                        type='checkbox'
                                        checked={roomInfo.amenities.pet === true}
                                        onChange={handleInput} />
                                    <label htmlFor="pet">Pet</label>
                                </li>
                                <li>
                                    <input
                                        id='gym'
                                        name='gym'
                                        type='checkbox'
                                        checked={roomInfo.amenities.gym === true}
                                        onChange={handleInput} />
                                    <label htmlFor='gym'>Gym</label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <CustomButton type='submit'>Post</CustomButton> 
                </form>
            </div>
        </div>
    );
};

export default connect(
    null,
    {
        submitRoom
    }
)(withRouter(Post));