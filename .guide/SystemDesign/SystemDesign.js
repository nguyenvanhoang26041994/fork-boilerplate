import React from 'react';
import styled from 'styled-components';
import { Flex } from '@fork-ui/components/core';
import ComponentIntroduction from '../components/ComponentIntroduction';

import LoaderDesign from '../_documents/Loader/Loader';
import SkeletonDesign from '../_documents/Skeleton/Skeleton';
import SwitchDesign from '../_documents/Switch/Switch';
import RadioDesign from '../_documents/Radio/Radio';
import CheckboxDesign from '../_documents/Checkbox/Checkbox';
import BadgeDesign from '../_documents/Badge/Badge';
import ButtonDesign from '../_documents/Button/Button';
import AvatarDesign from '../_documents/Avatar/Avatar';
import TabsDesign from '../_documents/Tabs/Tabs';
import CollapseDesign from '../_documents/Collapse/Basic';
import StepperDesign from '../_documents/Stepper/Stepper';
import IconDesign from '../_documents/Icon/Icon';


const SystemDesignWrapper = styled.div``;
const RightSection = styled.div``;
const LeftSection = styled.div``;

const SystemDesign = () => {
  return (
    <SystemDesignWrapper>
      <Flex span="full">
        <LeftSection style={{ width: '50%', padding: '1px' }}>
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={LoaderDesign}
            header={LoaderDesign.header}
            style={{ paddingBottom: '1px' }}
          />
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={IconDesign}
            header={IconDesign.header}
            style={{ paddingBottom: '1px' }}
          />
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={SwitchDesign}
            header={SwitchDesign.header}
            style={{ paddingBottom: '1px' }}
          />
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={RadioDesign}
            header={RadioDesign.header}
            style={{ paddingBottom: '1px' }}
          />
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={CheckboxDesign}
            header={CheckboxDesign.header}
            style={{ paddingBottom: '1px' }}
          />
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={StepperDesign}
            header={StepperDesign.header}
            style={{ paddingBottom: '1px' }}
          />
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={TabsDesign}
            header={TabsDesign.header}
            style={{ paddingBottom: '1px' }}
          />
        </LeftSection>
        <RightSection style={{ width: '50%', padding: '1px' }}>
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={SkeletonDesign}
            header={SkeletonDesign.header}
            style={{ paddingBottom: '1px' }}
          />
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={BadgeDesign}
            header={BadgeDesign.header}
            style={{ paddingBottom: '1px' }}
          />
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={ButtonDesign}
            header={ButtonDesign.header}
            style={{ paddingBottom: '1px' }}
          />
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={AvatarDesign}
            header={AvatarDesign.header}
            style={{ paddingBottom: '1px' }}
          />
          <ComponentIntroduction
            className="w-full"
            IntroductionComponent={CollapseDesign}
            header={CollapseDesign.header}
            style={{ paddingBottom: '1px' }}
          />
        </RightSection>
      </Flex>
    </SystemDesignWrapper>
  );
};

export default SystemDesign;
