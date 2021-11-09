import { Menu } from 'antd';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { VSpace } from './Spacer';

export const AppMenu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const selectedKey = location.pathname;
  return (
    <div className="AppMenu">
    </div>
  );
};

const MenuStyled = styled(Menu)`
  background-color: inherit;
  border-bottom: none;
  margin-left: 4px;

  .ant-menu-item {
    color: white;
  }
`;
