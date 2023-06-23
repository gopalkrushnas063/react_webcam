import React from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrcs, setImgSrcs] = React.useState([]);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrcs(prev => [...prev, imageSrc]);
  }, [webcamRef, setImgSrcs]);

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      {imgSrcs.map(imgSrc =>
        <img
          key={imgSrc}
          src={imgSrc}
          alt="Captured Photo"
        />
      )}
    </>
  );
};

export default WebcamCapture;
