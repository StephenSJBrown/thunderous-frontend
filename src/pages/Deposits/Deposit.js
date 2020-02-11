import React, {useState} from "react";
import QrReader from "react-qr-scanner";

const Deposit = () => {
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState("No Result");

  const handleScan = data => {
    setResult(data);
  };

  const handleError = err => {
    console.error(err);
  };

  const previewStyle = {
    height: 100,
    width: 100
  };

  return (
    <div>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </div>
  );
};

export default Deposit;
