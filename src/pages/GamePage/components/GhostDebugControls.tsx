import { Col, Row, Switch, Typography } from 'antd';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../components/StoreContext';

const { Text } = Typography;

export const GhostDebugControls = observer(() => {
  const store = useStore();
  return (
    <div className="GhostDebugControls">
    </div>
  );
});
