import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/ynu-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;


const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
    cursor:pointer;
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="YNU Logo" />
    </StyledLink>
    <Nav>
      <Link to="/lab_home_page">Home</Link>
      <Link to="/lab_home_page/projects">Projects</Link>
      <Link to="/lab_home_page/people">People</Link>
      <Link to="/lab_home_page/publications">Publications</Link>
      <Link to="/lab_home_page/activities">Activities</Link>
      <a onClick={()=>{alert("ynuids@outlook.com")}}>Contact us</a>
      {/* <PrimaryButton>Click me</PrimaryButton> */}
    </Nav>
  </Headroom>
);

export default NavBar;
