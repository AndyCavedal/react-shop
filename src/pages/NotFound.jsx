import React from 'react';
import error404 from '@icons/404-error.jpg';
import '@styles/NotFound.scss';

const NotFound = () => {
    return (
        <div>
            <img src={error404} className='error404'></img>
        </div>
    );
}

export default NotFound;