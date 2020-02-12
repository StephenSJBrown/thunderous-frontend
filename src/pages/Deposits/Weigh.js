import React, {useEffect} from 'react'
import {useHistory, useLocation, Link} from 'react-router-dom'

import axios from 'axios'
import {toast } from 'react-toastify'

const Weigh = () => {
    const { state: dataFromPreviousPage = 'default value' } = useLocation()

    // location: {
    //     pathname: '/weight',
    //     state: {
    //         centre: '..'
    //     }
    // }

    
    // check if weight of new deposit has changed

// LIREN'S NOTE, SET INTERVAL

    useEffect(() => {
        axios({
            method: 'POST',
            url: `http://localhost:5000/api/deposits/show/${deposit}`,
        })
            .then(response => {
                console.log(response)
                toast.success(`Found the deposit`, {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                // then
            })
            .catch(error => {
                console.error(`Error: ${error}`) // so that we know what went wrong if the request failed
                toast.error(`Something went wrong`, {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            )
      }, []);


    return <>
        <h2>You are at</h2>
        <h3>{name}</h3>
        <h2>Waiting for trash...</h2>
        <Link to="/deposit/result">Result</Link>
    </>
}

export default Weigh