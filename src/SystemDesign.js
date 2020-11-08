import React from 'react';
import Codebox from '@@/.guide/Codebox';
import { Flex } from './fork-ui/core';

import TypographyDesign from '@@/.guide/_documents/Typography/demo/Typography';
import CheckboxDesign from '@@/.guide/_documents/Checkbox/demo/Checkbox';
import RadioDesign from '@@/.guide/_documents/Radio/demo/Radio';
import SwitchDesign from '@@/.guide/_documents/Switch/demo/Switch';
import ColorPalette from '@@/.guide/_documents/CoreComponent/demo/ColorPalette';
import AvatarDesign from '@@/.guide/_documents/Avatar/demo/Avatar';
import LoaderDesign from '@@/.guide/_documents/Loader/demo/Loader';
import TabsAllDesign from '@@/.guide/_documents/CoreComponent/demo/Tabs';
import SkeletonDesign from '@@/.guide/_documents/Skeleton/demo/Skeleton';
import CollapseAllDesign from '@@/.guide/_documents/CoreComponent/demo/Collapse';
import DialogAllDesign from '@@/.guide/_documents/CoreComponent/demo/Dialog';
import ButtonDesign from '@@/.guide/_documents/Button/demo/Button';
import BadgeDesign from '@@/.guide/_documents/Badge/demo/Badge';
import PaginationAllDesign from '@@/.guide/_documents/CoreComponent/demo/Pagination';
import StepperAllDesign from '@@/.guide/_documents/CoreComponent/demo/Stepper';
import TooltipAllDesign from '@@/.guide/_documents/CoreComponent/demo/Tooltip';
import RaterAllDesign from '@@/.guide/_documents/CoreComponent/demo/Rater';
import TimelineAllDesign from '@@/.guide/_documents/CoreComponent/demo/Timeline';
import CarouselAllDesign from '@@/.guide/_documents/CoreComponent/demo/Carousel';
import MenuAllDesign from '@@/.guide/_documents/CoreComponent/demo/Menu';
import ChipDesign from '@@/.guide/_documents/Chip/demo/Chip';
import ProgressAllDesign from '@@/.guide/_documents/CoreComponent/demo/Progress';
import LineProgressAllDesign from '@@/.guide/_documents/CoreComponent/demo/LineProgress';
import DividerDesign from '@@/.guide/_documents/Divider/demo/Divider';
import SingleSliderAllDesign from '@@/.guide/_documents/CoreComponent/demo/SingleSlider';
import NativeInput from '@@/.guide/_documents/CoreComponent/demo/NativeInput';
import NotificationAllDesign from '@@/.guide/_documents/CoreComponent/demo/Notification';

import AllPortalComponent from '@@/.guide/_documents/CoreComponent/demo/AllPortalComponent';
import TableDesign from '@@/.guide/_documents/CoreComponent/demo/Table';

export default () => {
  return (
    <Flex col span="full">
      <Flex span="full" style={{ backgroundColor: 'var(---bg)' }}>
        <Flex col span="1/2">
          <div className="w-full" style={ { paddingBottom: '0px' } }>
            <Codebox Component={ ColorPalette } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ TypographyDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ AvatarDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ RaterAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ LoaderDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '0px' } }>
            <Codebox Component={ ProgressAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ LineProgressAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ MenuAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ TabsAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ SkeletonDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ CollapseAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ NotificationAllDesign } />
          </div>
          <div className="flex flex-col flex-1 w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ DialogAllDesign } className="flex-1" />
          </div>
        </Flex>

        <Flex col span="1/2" style={ { paddingLeft: '1px' } }>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ ButtonDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ CheckboxDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ RadioDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ SwitchDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ NativeInput } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ SingleSliderAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ BadgeDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ ChipDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ TooltipAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ PaginationAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ StepperAllDesign } />
          </div>
          {/* <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ DividerDesign } />
          </div> */}
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ TimelineAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ CarouselAllDesign } />
          </div>
          <div className="flex flex-col flex-1 w-full" style={ { paddingBottom: '1px' } }>
            {/* <Codebox Component={ ImageAllDesign } className="flex-1" /> */}
          </div>
        </Flex>
      </Flex>
      <Flex col span="full">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ TableDesign } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AllPortalComponent } />
        </div>
        {/* <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Flexbox } />
        </div> */}
      </Flex>
    </Flex>

  );
};
