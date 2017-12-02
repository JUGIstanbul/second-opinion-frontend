import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import SwitchLocale from '../../containers/SwitchLocale';

function Header({ items }) {
  return (
    <Main>
      <Logo>Logo Here!</Logo>
      <Menu>
        <Item to="/login"><FormattedMessage id="header.menu.login" /></Item>
        <Item to="/register"><FormattedMessage id="header.menu.register" /></Item>
        <Locale />
      </Menu>
    </Main>
  );
}

export const Main = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 30px 15px;
  background-color: ${props => props.theme.primaryColor};
  border-bottom: 1px solid ${props => props.theme.secondaryColor};
`;

export const Logo = styled.div`
  display: flex;
  font-size: 16px;
`;
export const Menu = styled.div`
  display: flex;
`;
export const Item = styled(Link)`
  font-size: 16px;
  text-transform: uppercase;
  padding-right: 20px;
  color: ${props => props.theme.secondaryColor};
`;

export const Locale = styled(SwitchLocale)`
  display: flex;
`;

export default Header;
