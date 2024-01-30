import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Frontend = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/login')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {
                data.map((data, i) => {
                    return (
                        <div key={i}>
                            <h1>{data.id}</h1>
                            <h1>{data.name}</h1>
                            <p>{data.username}</p>
                        </div>
                    );
                })
            }
        </div>
    );
      }

export default Frontend;
