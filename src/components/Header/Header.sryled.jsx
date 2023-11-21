import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav``;
export const NavItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const NavList = styled.ul``;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;

  &.active {
    color: red;
  }
`;
