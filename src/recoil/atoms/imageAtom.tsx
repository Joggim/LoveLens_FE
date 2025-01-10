import { atom } from 'recoil';

// Captured images 상태
export const capturedImagesState = atom<string[]>({
  key: 'capturedImagesState', // 고유 key
  default: [], // 초기값: 빈 배열
});
