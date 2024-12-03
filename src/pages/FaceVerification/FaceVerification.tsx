import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

import { Container } from './FaceVerification.styles';

const FaceVerificationPage = () => {
  const webcamRef = useRef<Webcam>(null); // Webcam의 타입 명시
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [verificationResult, setVerificationResult] = useState<string>('');

  // 캡처된 이미지를 저장
  const captureImage = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot(); // getScreenshot 호출
      setCapturedImage(imageSrc || null); // 캡처된 이미지 저장
    } else {
      console.error('Webcam is not ready');
    }
  }, [webcamRef]);

  // 업로드된 이미지를 저장
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setUploadedImage(reader.result as string); // 업로드된 이미지 저장
      };

      reader.readAsDataURL(file);
    }
  };

  // 인증 요청 (서버로 캡처 이미지와 업로드 이미지를 전송)
  const handleVerification = async () => {
    if (!capturedImage || !uploadedImage) {
      alert('캡처된 이미지와 업로드된 이미지를 모두 제공하세요.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/verify', {
        capturedImage,
        uploadedImage,
      });

      setVerificationResult(response.data.message); // 서버로부터 받은 결과 메시지
    } catch (error) {
      console.error('인증 요청 실패:', error);
      setVerificationResult('인증 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <div>
        <h1>얼굴 인증</h1>

        {/* 카메라 영역 */}
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={320}
          height={240}
        />
        <button onClick={captureImage}>캡처</button>

        {/* 캡처된 이미지 미리보기 */}
        {capturedImage && (
          <div>
            <h3>캡처된 이미지</h3>
            <img src={capturedImage} alt="Captured" width="200" />
          </div>
        )}

        {/* 이미지 업로드 */}
        <div>
          <h3>이미지 업로드</h3>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {uploadedImage && (
            <img src={uploadedImage} alt="Uploaded" width="200" />
          )}
        </div>

        {/* 인증 버튼 */}
        <button onClick={handleVerification}>본인 인증</button>

        {/* 결과 출력 */}
        {verificationResult && (
          <div>
            <h3>인증 결과</h3>
            <p>{verificationResult}</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default FaceVerificationPage;
