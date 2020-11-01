import React from 'react';
import styled from 'styled-components';
import Wrapper from '@@/.guide/shared/Wrapper';

const ColorWrapper = styled.div`
  min-width: 7rem;
  min-height: 7rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const Demo = () => {
  return (
    <Wrapper>
      <ColorWrapper style={{ backgroundColor: 'var(--primary)' }} />
      <ColorWrapper style={{ backgroundColor: 'var(--red)' }} />
      <ColorWrapper style={{ backgroundColor: 'var(--green)' }} />
      <ColorWrapper style={{ backgroundColor: 'var(--menu--bg)' }} />
      <ColorWrapper style={{ backgroundColor: 'var(--sub-menu--bg)' }} />
      <ColorWrapper style={{ backgroundColor: 'var(--button--bg)' }} />
    </Wrapper>
  );
};

export default Demo;
