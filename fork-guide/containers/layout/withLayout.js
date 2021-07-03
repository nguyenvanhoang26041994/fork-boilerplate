import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import LeftNavigation from './LeftNavigation';
import TopNavigation from './TopNavigation';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 2px;
`;

const MainBody = styled.main`
`;

export default (InputComponent) => {
  const OutputComponent = (props) => {
    const [isLeftMinimal, setLeftMinimal] = useState(true);
    const onToggleLeftMinimal = useCallback(() => setLeftMinimal(prev => !prev), [setLeftMinimal]);

    return (
      <Layout>
        <LeftNavigation minimal={isLeftMinimal} />
        <BodyWrapper>
          <TopNavigation
            onToggleLeftMinimal={onToggleLeftMinimal}
            isLeftMinimal={isLeftMinimal}
          />
          <MainBody>
            <InputComponent {...props} />
          </MainBody>
        </BodyWrapper>
      </Layout>
    );
  };

  return OutputComponent;
};
