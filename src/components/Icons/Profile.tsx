import React from 'react';
import type { IconsProps } from './dto';

const Profile: React.FC<IconsProps> = ({
  color = '',
  isFilled = false,
  width = '26',
  height = '26',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 23C5.5 21.6739 6.02678 20.4021 6.96447 19.4645C7.90215 18.5268 9.17392 18 10.5 18H20.5C21.8261 18 23.0979 18.5268 24.0355 19.4645C24.9732 20.4021 25.5 21.6739 25.5 23C25.5 23.663 25.2366 24.2989 24.7678 24.7678C24.2989 25.2366 23.663 25.5 23 25.5H8C7.33696 25.5 6.70107 25.2366 6.23223 24.7678C5.76339 24.2989 5.5 23.663 5.5 23Z"
        fill={isFilled ? color : 'none'}
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 13C17.5711 13 19.25 11.3211 19.25 9.25C19.25 7.17893 17.5711 5.5 15.5 5.5C13.4289 5.5 11.75 7.17893 11.75 9.25C11.75 11.3211 13.4289 13 15.5 13Z"
        fill={isFilled ? color : 'none'}
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Profile;
