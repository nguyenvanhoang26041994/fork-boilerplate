import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const DemoName = styled.h2`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;
const DemoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 100px;

  &.--centered {
    justify-content: center;
    align-items: center;
  }
`;
const Gap = styled.div`
  height: 55px;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--bg);
`;

export default ({ name, children, centered, style, className }) => (
  <Wrapper style={style} className={className}>
    <DemoName>
      {name}
    </DemoName>
    <DemoWrapper className={cn({ '--centered': centered })}>
      {children}
    </DemoWrapper>
    <Gap />
  </Wrapper>
);
