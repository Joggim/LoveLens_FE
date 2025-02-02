import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import theme from '../../styles/theme';
import Home from '../Icons/Home';
import Like from '../Icons/Like';
import Chat from '../Icons/Chat';
import Profile from '../Icons/Profile';

import { getCurrentUserId } from '../../utils/getCurrentUserId';

import { StyledText } from '../StyledText/StyledText.styles';

import {
  NavBarContainer,
  NavBarWrapper,
  IconWrapper,
  Icon,
} from './NavBar.styles';

const NavBar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const currentUserId = getCurrentUserId();

  const tabs = [
    {
      name: 'Home',
      Icon: (isSelected: boolean) => (
        <Home
          isFilled={isSelected}
          color={
            isSelected ? theme.colors.brand.primary : theme.colors.gray[500]
          }
        />
      ),
      route: '/',
    },
    {
      name: 'Like',
      Icon: (isSelected: boolean) => (
        <Like
          isFilled={isSelected}
          color={
            isSelected ? theme.colors.brand.primary : theme.colors.gray[500]
          }
        />
      ),
      route: '/like',
    },
    {
      name: 'Chat',
      Icon: (isSelected: boolean) => (
        <Chat
          isFilled={isSelected}
          color={
            isSelected ? theme.colors.brand.primary : theme.colors.gray[500]
          }
        />
      ),
      route: '/chat',
    },

    {
      name: 'MyPage',
      Icon: (isSelected: boolean) => (
        <Profile
          isFilled={isSelected}
          color={
            isSelected ? theme.colors.brand.primary : theme.colors.gray[500]
          }
        />
      ),
      route: `/my-page/${currentUserId}`,
    },
  ];

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.route === location.pathname);
    if (currentTab) {
      setSelectedTab(currentTab.name);
    }
  }, [location.pathname]);

  const handleTabClick = (tab: (typeof tabs)[0]) => {
    setSelectedTab(tab.name);
    navigate(tab.route);
    if (tab.name === 'Home') {
      sessionStorage.setItem('scrollPosition', '0');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavBarContainer>
      <NavBarWrapper>
        {tabs.map((tab) => (
          <IconWrapper key={tab.name} onClick={() => handleTabClick(tab)}>
            <Icon>{tab.Icon(selectedTab === tab.name)}</Icon>
            <StyledText
              $variant="captionMedium"
              color={
                selectedTab === tab.name
                  ? theme.colors.brand.primary
                  : theme.colors.gray[500]
              }
            >
              {tab.name}
            </StyledText>
          </IconWrapper>
        ))}
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
