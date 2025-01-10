export interface UploadedImage {
  id: number;
  src: string;
  status: 'pending' | 'success' | 'fail';
}
