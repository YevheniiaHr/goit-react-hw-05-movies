// import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  NavItem,
  NavList,
  Navigation,
  StyledLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        {' '}
        <Navigation>
          <NavList>
            <NavItem>
              <StyledLink to="/">Home</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/movies">Movies</StyledLink>
            </NavItem>
          </NavList>
        </Navigation>
      </Header>
      <Outlet />
    </Container>
  );
};

export default Layout;
