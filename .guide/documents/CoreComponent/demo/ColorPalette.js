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
      <ColorWrapper style={{ backgroundColor: 'var(--red--500)' }} />
      <ColorWrapper style={{ backgroundColor: 'var(--orange--500)' }} />
      <ColorWrapper style={{ backgroundColor: 'var(--green--500)' }} />
      <ColorWrapper style={{ backgroundColor: 'var(--blue--500)' }} />
    </Wrapper>
  );
};

export default Demo;
