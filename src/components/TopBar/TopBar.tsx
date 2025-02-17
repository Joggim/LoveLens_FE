import React from 'react';
import { useNavigate } from 'react-router-dom';

import theme from '../../styles/theme';

import { StyledText } from '../StyledText/StyledText.styles';

import { NavBarContainer, NavBarWrapper, Icon } from './TopBar.styles';

import { TopBarProps } from './dto';

const TopBar: React.FC<TopBarProps> = ({ tab }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <NavBarContainer>
      <NavBarWrapper>
        <Icon onClick={handleClick}>{}</Icon>
        <StyledText $variant="captionMedium">{tab.name}</StyledText>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default TopBar;
