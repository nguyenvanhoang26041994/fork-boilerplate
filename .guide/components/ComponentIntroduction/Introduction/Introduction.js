import React from 'react';
import styled from 'styled-components';

import { avatarLink } from '../../../shared/staff';
import { Avatar, AvatarGroup } from '@fork-ui/components/core';

const IntroductionWrapper = styled.section`
  background-color: var(--bg);
  padding: 20px 10px;
`;
const ComponentName = styled.h1`
  font-family: monospace;
  font-size: 16px;
  padding: 0 10px;
`;
const ComponentDemoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
`;
const FieldSection = styled.div`
  padding: 10px;
`;
const FieldSectionTitle = styled.h4`
  color: var(--color-low-emphasis);
  font-family: monospace;
`;
const FieldSectionContent = styled.p``;

const Introduction = ({ Component, className, description, header, style }) => {
  return (
    <IntroductionWrapper className={className} style={style}>
      <ComponentName className="mb-20">{header}</ComponentName>
      <ComponentDemoSection>
        <Component />
      </ComponentDemoSection>
      <div className="flex flex-col">
        {description && (
          <FieldSection className="flex-1">
            <FieldSectionTitle className="mb-2">Description</FieldSectionTitle>
            <FieldSectionContent>
              {description}
            </FieldSectionContent>
          </FieldSection>
        )}
      </div>
    </IntroductionWrapper>
  );
};

export default Introduction;
