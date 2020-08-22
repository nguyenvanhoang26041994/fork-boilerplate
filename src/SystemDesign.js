import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Codebox from '@@/.guide/Codebox';
import {
  Flex,
  Button,
  Badge,
  Slider,
  Loader,
  Pagination,
  Stepper,
  Progress,
  Menu,
  Timeline,
  Rater,
  Skeleton,
  Avatar,
  Textbox,
  Password,
  Textarea,
  Select,
  InputNumber,
  Dialog,
  PureNotification,
  PureAlert,
  Divider,
  Breadcrumb,
  Carousel,
  DatePicker,
} from './fork-ui/core';
import { Send, Star, Bell, Copy, Tool, Share, Heart, Power, Apps, Message, Check, Trash, Dots, Home } from '@@/fork-ui/src/components/icons';
import DemoContent from '@@/.guide/shared/DemoContent';
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

const listProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

const SectionWrapper = styled(Flex)`
  width: 100%;
  padding: 0.5rem;
`;

const Section = ({ ...otherProps }) => {
  return (
    <SectionWrapper {...otherProps} />
  );
};

const Boxer = styled.div`
  width: 3em;
  height: 3em;
  border-radius: var(--border-radius);
  background-color: var(--secondary-bg);
`;

const NotificationBox = () => {
  return (
    <Flex className="mb-5" style={{ width: 300 }}>
      <div>
        <Badge
          dot
          overlap
          color="#0df316"
          bottomRight
        >
          <Avatar name="H" size="0.75rem" />
        </Badge>
      </div>
      <Flex col className="ml-2 flex-1">
        <Skeleton p  w="70%" />
        <Skeleton p  w="20%" />
      </Flex>
    </Flex>
  );
};

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
        
        <Section className="--space-5" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <div className="fui-overlay fui-tooltip fui-overlay--arrow fui-overlay--top" style={{ position: 'relative' }}>
            Top Tooltip
          </div>
          <div className="fui-overlay fui-tooltip fui-overlay--arrow fui-overlay--right" style={{ position: 'relative' }}>
            Right Tooltip
          </div>
          <div className="fui-overlay fui-tooltip fui-overlay--arrow fui-overlay--bottom" style={{ position: 'relative' }}>
            Bottom Tooltip
          </div>
          <div className="fui-overlay fui-tooltip fui-overlay--arrow fui-overlay--left" style={{ position: 'relative' }}>
            Left Tooltip
          </div>
        </Section>
      </Flex>
    </Flex>
  );
};
