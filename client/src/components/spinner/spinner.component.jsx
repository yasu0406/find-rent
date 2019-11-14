import React from 'react';
import Loader from 'react-loader-spinner';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './spinner.styles.scss';

const Spinner = () => {
    return(
        <div className='spinner'>
            <Loader
                    type="TailSpin"
                    color="red"
                    height={100}
                    width={100}
                />
        </div>
    );
};

export default Spinner;