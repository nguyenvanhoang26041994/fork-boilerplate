import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {
  Badge,
  Flex,
  Switch,
  Button
} from '@fork-ui/components/core';
import FancyBox from '../../shared/FancyBox';

const SwitchButton = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--btn-bg);
  border-radius: 999px;
  overflow: hidden;

  .fbtn {
    border-radius: 999px;
    background-color: var(--btn-bg);
    border-color: var(--btn-bg);

    &:hover {
      color: var(--primary);
      background-color: var(--btn-bg);
      border-color: var(--btn-bg);
    }
  }

  .f-selected,
  .f-selected:hover,
  .f-selected:focus {
    color: #fff;
    font-weight: 600;
    background-color: var(--primary);
    border-color: var(--primary);
  }
`;

const FlexStyled = styled(Flex)`
  &.fancy-box-circle {
    .fancy-box {
      border-radius: 999px !important;
    }
  }
`;

const Demo = () => {
  const [{ checked, toggle }] = Switch.useSwitch(false);

  return (
    <FlexStyled span="full" col items="center" className={cn({ 'fancy-box-circle': checked })}>
      <Flex col span="full" items="center">
        <Flex>
          <FancyBox hidden className="m-5" />
          <Badge.Counter count={7} topLeft className="m-5" overlap={checked}>
            <FancyBox>TL</FancyBox>
          </Badge.Counter>
          <Badge.Counter count={7} top className="m-5" overlap={checked}>
            <FancyBox>T</FancyBox>
          </Badge.Counter>
          <Badge.Counter count={7} topRight className="m-5" overlap={checked}>
            <FancyBox>TR</FancyBox>
          </Badge.Counter>
          <FancyBox hidden className="m-5" />
        </Flex>

        <Flex>
          <Badge.Counter count={7} leftTop className="m-5" overlap={checked}>
            <FancyBox>LT</FancyBox>
          </Badge.Counter>
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <Badge.Counter count={7} placement="right-top" className="m-5" overlap={checked}>
            <FancyBox>RT</FancyBox>
          </Badge.Counter>
        </Flex>

        <Flex>
          <Badge.Counter count={7} left className="m-5" overlap={checked}>
            <FancyBox>L</FancyBox>
          </Badge.Counter>
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <Badge.Counter count={7} right className="m-5" overlap={checked}>
            <FancyBox>R</FancyBox>
          </Badge.Counter>
        </Flex>

        <Flex>
          <Badge.Counter count={7} leftBottom className="m-5" overlap={checked}>
            <FancyBox>LB</FancyBox>
          </Badge.Counter>
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <Badge.Counter count={7} rightBottom className="m-5" overlap={checked}>
            <FancyBox>RB</FancyBox>
          </Badge.Counter>
        </Flex>

        <Flex>
          <FancyBox hidden className="m-5" />
          <Badge.Counter count={7} bottomLeft className="m-5" overlap={checked}>
            <FancyBox>BL</FancyBox>
          </Badge.Counter>
          <Badge.Counter count={7} bottom className="m-5" overlap={checked}>
            <FancyBox>B</FancyBox>
          </Badge.Counter>
          <Badge.Counter count={7} bottomRight className="m-5" overlap={checked}>
            <FancyBox>BR</FancyBox>
          </Badge.Counter>
          <FancyBox hidden className="m-5" />
        </Flex>
      </Flex>
      <Flex justify="center" className="mt-20">
        <SwitchButton onClick={toggle}>
          <Button className={{ 'f-selected': checked }}>
            OVERLAP
          </Button>
          <Button className={{ 'f-selected': !checked }}>
            NORMAL
          </Button>
        </SwitchButton>
      </Flex>
    </FlexStyled>
  );
};

export default Demo;
