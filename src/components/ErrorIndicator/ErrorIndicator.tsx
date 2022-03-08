import React from 'react';
import './ErrorIndicator.scss';

export function ErrorIndicator() {
    return (
        <div className="errorIndicator">
            <img
                className="error__icon"
                alt="Triangle with an exclamation mark"
                src={require('../../images/errorIcon.svg')}
            />
            <div className="error__info">
                <p>An error with loading content occured</p>
            </div>
        </div>
    );
}

//source of error icon: https://pixabay.com/pl/vectors/wykrzyknik-ostrze%c5%bcenie-98739/
