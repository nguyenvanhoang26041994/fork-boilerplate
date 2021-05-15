import React from 'react';
import styled from 'styled-components';
import Introduction from './Introduction';

const ComponentIntroductionWrapper = styled.div``;

const ComponentIntroduction = ({ IntroductionComponent, children, description, header, className, style }) => {
  return (
    <ComponentIntroductionWrapper className={className} style={style}>
      <Introduction
        Component={IntroductionComponent}
        description={description}
        header={header}
        style={{ marginBottom: '1px' }}
      />
      {children}
    </ComponentIntroductionWrapper>
  );
};

export default ComponentIntroduction;
