import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { capturedImagesState } from '../../recoil/atoms/imageAtom';
import axios from 'axios';
import { Container } from './ProfileSetup.styles';

export interface UploadedImage {
  id: number;
  src: string;
  status: 'pending' | 'success' | 'fail';
}

const ProfileSetupPage: React.FC = () => {
  const capturedImages = useRecoilValue(capturedImagesState); // Recoil 상태 읽기
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const uploadedImage = reader.result as string;

        const newImage: UploadedImage = {
          id: nextId,
          src: uploadedImage,
          status: 'pending', // 초기값은 'pending'
        };

        setUploadedImages((prev) => [...prev, newImage]);
        setNextId((prev) => prev + 1);

        try {
          const response = await axios.post('http://localhost:5000/verify', {
            userId: 'temp-user-id',
            capturedImages, // Recoil에서 가져온 캡처 이미지 배열
            uploadedImage, // 업로드된 이미지
          });

          const success = response.data.success;

          setUploadedImages((prev) =>
            prev.map((img) =>
              img.id === newImage.id
                ? { ...img, status: success ? 'success' : 'fail' }
                : img
            )
          );
        } catch (error) {
          console.error('본인 인증 실패:', error);

          setUploadedImages((prev) =>
            prev.map((img) =>
              img.id === newImage.id ? { ...img, status: 'fail' } : img
            )
          );
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <h1>프로필 설정</h1>
      <div>
        <h3>프로필 사진</h3>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <div>
          {uploadedImages.map((img) => (
            <div
              key={img.id}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <img src={img.src} alt={`Uploaded ${img.id}`} width="100" />
              {img.status === 'success' && (
                <span style={{ color: 'green', fontWeight: 'bold' }}>✔</span>
              )}
              {img.status === 'fail' && (
                <span style={{ color: 'red', fontWeight: 'bold' }}>✘</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProfileSetupPage;
