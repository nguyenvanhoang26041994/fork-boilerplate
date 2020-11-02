import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Avatar, Tooltip, Badge } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Tooltip title="Hoàng Nguyễn">
        <Avatar>H</Avatar>
      </Tooltip>
      <Tooltip title="H">
        <Badge.Dot color="#0df316" overlap bottomRight>
          <Avatar>H</Avatar>
        </Badge.Dot>
      </Tooltip>
    </Wrapper>
  );
};

export default Demo;
