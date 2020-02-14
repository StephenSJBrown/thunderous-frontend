import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-toastify'
import QrReader from "react-qr-scanner";
import Page from '../../components/Page'

const Deposit = ( setCentreObject ) => {
  const history = useHistory()

  const delay = 1000;
  const [result, setResult] = useState("");

  const handleScan = link => {
    if (link) {
      if (link.includes("localhost:5000/api/deposits/create")) {
        console.log('link', link)
        const user = localStorage.getItem("jwt");
        setResult("TEST: That's the right QR code");

        axios({
            method: 'POST',
            url: link,
            data: {
                user_id: user,
            }
        })
            .then(response => {
                console.log(response)
                toast.success(`Centre location recorded`, {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                history.push('/deposit/weigh', {
                  deposit_id: response.data.id,
                  centre_name: response.data.centre.name
                })
            })
            .catch(error => {
                console.error(error)
                toast.error(`Couldn't register you at the centre. Please try again`, {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            )
      } else {
        setResult("That's not a centre QR code!");
      }
    }
  };

  const handleError = err => {
    console.error(err);
  };

  const previewStyle = {
    height: 700,
    width: 1000
  };

  return (
    <Page>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <h3>Scan the QR code at the centre</h3>
      <p>{result}</p>
    </Page>
  );
};

export default Deposit;
