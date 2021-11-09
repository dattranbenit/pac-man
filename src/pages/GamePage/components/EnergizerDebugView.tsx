import { Card, Button, Row, Col } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components/macro';
import { useGame } from '../../../components/StoreContext';
import { eatEnergizer } from '../../../model/eatEnergizer';

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export const EnergizerDebugView = observer<{ className?: string }>(
  ({ className }) => {
    const game = useGame();
    return (
      <Layout className="EnergizerDebugView">
      </Layout>
    );
  }
);

const Layout = styled.div``;

const StyledButton = styled(Button)`
  width: 80px;
`;
