import React from 'react';
import styled from 'styled-components';
import Codebox from '@@/.guide/Codebox';
import { Flex } from './fork-ui/core';

import TabsBasicGuide from '@@/.guide/_documents/Tabs/demo/Basic';
import CollapseBasicGuide from '@@/.guide/_documents/Collapse/demo/Basic';
import ButtonBasicGuide from '@@/.guide/_documents/Button/demo/Basic';
import RadioBasicGuide from '@@/.guide/_documents/Radio/demo/Basic';
import CheckboxBasicGuide from '@@/.guide/_documents/Checkbox/demo/Basic';
import SwitchBasicGuide from '@@/.guide/_documents/Switch/demo/Basic';
import AllSkeletonGuide from '@@/.guide/_documents/Skeleton/demo/AllSkeleton';
import TypographyGuide from '@@/.guide/_documents/Typography/demo/Basic';
import AvatarGuide from '@@/.guide/_documents/Avatar/demo/Basic';
import AllBadgeGuide from '@@/.guide/_documents/Badge/demo/AllBadge';
import AllLoaderGuide from '@@/.guide/_documents/Loader/demo/AllLoader';
import PaginationBasicGuide from '@@/.guide/_documents/Pagination/demo/Basic';
import StepperGuide from '@@/.guide/_documents/Stepper/demo/Design';
import TimelineGuide from '@@/.guide/_documents/Timeline/demo/Basic';
import TooltipDesign from '@@/.guide/_documents/Tooltip/demo/Design';
import RaterGuide from '@@/.guide/_documents/Rater/demo/Basic';
import CarouselGuide from '@@/.guide/_documents/Carousel/demo/Basic';
import DialogDesign from '@@/.guide/_documents/Dialog/demo/Design';
import FullDialogComponent from '@@/.guide/_documents/Dialog/demo/FullDialogComponent';

ButtonBasicGuide.header = 'BUTTON';
TabsBasicGuide.header = 'TABS';
CollapseBasicGuide.header = 'COLLAPSE';
AllSkeletonGuide.header = 'SKELETON';
RadioBasicGuide.header = 'RADIO';
CheckboxBasicGuide.header = 'CHECKBOX';
SwitchBasicGuide.header = 'SWITCH';
TypographyGuide.header = 'TYPOGRAPHY';
AvatarGuide.header = 'AVATAR';
AllBadgeGuide.header = 'BADGE';
AllLoaderGuide.header = 'LOADER';
PaginationBasicGuide.header = 'PAGINATION';
StepperGuide.header = 'STEPPER';
TooltipDesign.header = 'TOOLIP DEISGN';
TimelineGuide.header = 'TIMELINE';
RaterGuide.header = 'RATER';
DialogDesign.header = 'DIALOG DESIGN';
CarouselGuide.header = 'CAROUSEL';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const ColorWrapper = styled(Flex)`
  min-width: 7rem;
  min-height: 7rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  overflow: hidden;
`;
const ColorShower = styled.div`
  width: 100%;
  height: 100%;
`;

const Color = ({ value }) => (
  <ColorWrapper>
    <ColorShower style={{ backgroundColor: value }} />
  </ColorWrapper>
);

const ColorGuide = () => (
  <Wrapper>
    <Color value="var(--red--500)" />
    <Color value="var(--orange--500)" />
    <Color value="var(--green--500)" />
    <Color value="var(--blue--500)" />
  </Wrapper>
);

ColorGuide.header = 'COLOR PALELLE';
ColorGuide.code = `
<Color value="var(--red--500)" />
<Color value="var(--orange--500)" />
<Color value="var(--green--500)" />
<Color value="var(--blue--500)" />
`;

export default () => {
  return (
    <Flex span="full" style={{ backgroundColor: 'var(---bg)' }}>
      <Flex col span="1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ ColorGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ TypographyGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AvatarGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AllLoaderGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AllSkeletonGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ TabsBasicGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CollapseBasicGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ DialogDesign } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ FullDialogComponent } />
        </div>
      </Flex>

      <Flex col span="1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ ButtonBasicGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ RadioBasicGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CheckboxBasicGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ SwitchBasicGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AllBadgeGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ PaginationBasicGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ StepperGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ TooltipDesign } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ RaterGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ TimelineGuide } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CarouselGuide } />
        </div>
      </Flex>
    </Flex>
  );
};
