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
            // return JSON.stringify(data);
            return data;
        })
        .catch(error => {
            // handle error
            console.log(error);
        });
}

const getFullUserName = (userInfo) => {
    const { name: { first, last } } = userInfo;
    return `${first} ${last}`;
}

function Api() {
    const [randomUser, setRandomUser] = useState('');
    const [userInfos, setUserInfos] = useState([]);

    useEffect(() => {
        fetchData().then(randomData => {
            setRandomUser(JSON.stringify(randomData) || "No user data found.");
            setUserInfos(randomData.results);
            console.log("UserInfos " + userInfos);
        });

    }, []);
    // const userEmail = randomUser.results[0].email;

    return (
        <div>
            <h2>{randomUser}</h2>
            {userInfos.map((userInfo) => {
                return <p>{getFullUserName(userInfo)}</p>
            })}
        </div>
    )
}

export default Api;