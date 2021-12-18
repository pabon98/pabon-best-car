import React from 'react';
import error from '../../images/error-page.jpg'

const NotFound = () => {
    return (
        <div>
            <h2>Error 404!! Page not found</h2>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;