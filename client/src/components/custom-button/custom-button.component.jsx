import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, ...props}) => (
    <button {...props} className='btn btn-danger custom'>{children}</button>
);

export default CustomButton;