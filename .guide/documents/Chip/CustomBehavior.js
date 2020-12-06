import React  from 'react';
import styled from 'styled-components';
import Wrapper from '../../shared/Wrapper';
import { Chip } from '@fork-ui/components/core';

const CustomHover = styled(Chip)`
  .fchip-close {
    display: none;
  }

  &:hover {
    .fchip-close {
      display: block;
    }
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <CustomHover closable>
        Slack
      </CustomHover>
      <CustomHover rounded closable>
        VS Code
      </CustomHover>
    </Wrapper>
  );
};

export default Demo;
