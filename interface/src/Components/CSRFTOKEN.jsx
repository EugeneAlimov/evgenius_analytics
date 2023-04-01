import React from 'react';
// import { getCookie } from '../api/settingsApi';

// const csrftoken = getCookie('csrftoken');

// console.log('CSRFTOKEN ', csrftoken);
const CSRFTOKEN = () => {
    return (
        <input
            name="csrfmiddlewaretoken"
            // value={csrftoken} type="hidden"
        />
    );
};

export default CSRFTOKEN;