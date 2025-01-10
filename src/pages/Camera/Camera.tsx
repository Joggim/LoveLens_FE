import React, { useRef, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { capturedImagesState } from '../../recoil/atoms/imageAtom';
import { Container } from './Camera.styles';
import cv from '@techstark/opencv-js'; // OpenCV.js를 설치하여 사용

const CameraPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [capturedImages, setCapturedImages] =
    useRecoilState(capturedImagesState);
  const [isCapturing, setIsCapturing] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const startVideo = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current!.srcObject = stream;
      videoRef.current!.play();
    };

    startVideo();

    const detectFace = () => {
      if (!videoRef.current || !cv) return;

      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const img = cv.imread(canvas);
      const gray = new cv.Mat();
      cv.cvtColor(img, gray, cv.COLOR_RGBA2GRAY);

      const faceCascade = new cv.CascadeClassifier();
      faceCascade.load('haarcascade_frontalface_default.xml');

      const faces = new cv.RectVector();
      faceCascade.detectMultiScale(gray, faces);

      if (faces.size() > 0) {
        const face = faces.get(0);
        if (face.width > 0 && face.height > 0) {
          const image = canvas.toDataURL('image/jpeg');
          setCapturedImages((prev) => [...prev, image]); // Recoil 상태 업데이트
        }
      }

      img.delete();
      gray.delete();
      faces.delete();
      faceCascade.delete();
    };

    if (isCapturing) {
      const interval = setInterval(detectFace, 1000);
      return () => clearInterval(interval);
    }
  }, [isCapturing, setCapturedImages]);

  return (
    <Container>
      <h1>실시간 얼굴 인증</h1>
      <video ref={videoRef} style={{ width: '100%', height: 'auto' }} />
      <button onClick={() => setIsCapturing(!isCapturing)}>
        {isCapturing ? '캡처 중지' : '캡처 시작'}
      </button>
      {capturedImages.length > 0 && (
        <div>
          <h3>캡처된 이미지</h3>
          {capturedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Captured ${index}`}
              width="100"
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default CameraPage;
