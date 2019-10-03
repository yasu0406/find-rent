import React from 'react';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='form-group'>
        <input className='form-control base-input' type='text' onChange={handleChange} {...otherProps} />
    </div>
);

export default FormInput;