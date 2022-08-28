import React, { useState, useEffect } from 'react';
// import Axios
import axios from "axios";

// https://randomuser.me/api/

function fetchData() {
    return axios.get('https://randomuser.me/api/')
        .then(({ data }) => {
            // handle success
            console.log(data);
            // return data;
            return JSON.stringify(data);
        })
        .catch(error => {
            // handle error
            console.log(error);
        });
}



function Api() {
    const [randomUser, setRandomUser] = useState('');

    useEffect(() => {
        fetchData().then(randomData => {
            setRandomUser(randomData);
        });

    }, []);

    return (
        <div>
            <h2>{randomUser}</h2>
        </div>
    )
}

export default Api;