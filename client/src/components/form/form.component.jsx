import React, { useEffect, useState } from 'react';
import SignInSignUp from '../sign-in/signIn-signUp.component';

import './form.styles.scss';

const Form = (props) => {
    const popUpCompoent = () => {
        const { showName, onCancel } = props;
        switch(showName) {
            case 'signIn':
                    return (
                        <SignInSignUp onCancel={onCancel} showName={showName} />
                    );
             case 'signUp':
                   return (
                        <SignInSignUp onCancel={onCancel} showName={showName} />
                   );        
            default:
                return;    
        }
    }
    return (
        <>
         { popUpCompoent() }   
        </>
)};

export default Form;