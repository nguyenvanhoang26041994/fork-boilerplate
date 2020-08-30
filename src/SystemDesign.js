import React from 'react';
import Codebox from '@@/.guide/Codebox';
import { Flex } from './fork-ui/core';

import TypographyAllDesign from '@@/.guide/_documents/CoreComponent/demo/Typography';
import CheckboxAllDesign from '@@/.guide/_documents/CoreComponent/demo/Checkbox';
import ColorPalette from '@@/.guide/_documents/CoreComponent/demo/ColorPalette';
import AvatarAllDesign from '@@/.guide/_documents/CoreComponent/demo/Avatar';
import LoaderAllDesign from '@@/.guide/_documents/CoreComponent/demo/Loader';
import TabsAllDesign from '@@/.guide/_documents/CoreComponent/demo/Tabs';
import SkeletonAllDesign from '@@/.guide/_documents/CoreComponent/demo/Skeleton';
import CollapseAllDesign from '@@/.guide/_documents/CoreComponent/demo/Collapse';
import DialogAllDesign from '@@/.guide/_documents/CoreComponent/demo/Dialog';
import ButtonAllDesign from '@@/.guide/_documents/CoreComponent/demo/Button';
import BadgeAllDesign from '@@/.guide/_documents/CoreComponent/demo/Badge';
import PaginationAllDesign from '@@/.guide/_documents/CoreComponent/demo/Pagination';
import StepperAllDesign from '@@/.guide/_documents/CoreComponent/demo/Stepper';
import TooltipAllDesign from '@@/.guide/_documents/CoreComponent/demo/Tooltip';
import RaterAllDesign from '@@/.guide/_documents/CoreComponent/demo/Rater';
import TimelineAllDesign from '@@/.guide/_documents/CoreComponent/demo/Timeline';
import CarouselAllDesign from '@@/.guide/_documents/CoreComponent/demo/Carousel';
import MenuAllDesign from '@@/.guide/_documents/CoreComponent/demo/Menu';
import ChipAllDesign from '@@/.guide/_documents/CoreComponent/demo/Chip';
import ProgressAllDesign from '@@/.guide/_documents/CoreComponent/demo/Progress';
import LineProgressAllDesign from '@@/.guide/_documents/CoreComponent/demo/LineProgress';
import DividerAllDesign from '@@/.guide/_documents/CoreComponent/demo/Divider';
import SingleSliderAllDesign from '@@/.guide/_documents/CoreComponent/demo/SingleSlider';
import ImageAllDesign from '@@/.guide/_documents/CoreComponent/demo/Image';

import AllPortalComponent from '@@/.guide/_documents/CoreComponent/demo/AllPortalComponent';
import TableDesign from '@@/.guide/_documents/CoreComponent/demo/Table';
import Flexbox from '@@/.guide/_documents/CoreComponent/demo/Flexbox';

export default () => {
  return (
    <Flex col span="full">
      <Flex span="full" style={{ backgroundColor: 'var(---bg)' }}>
        <Flex col span="1/2">
          <div className="w-full" style={ { paddingBottom: '0px' } }>
            <Codebox Component={ ColorPalette } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ TypographyAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '0px' } }>
            <Codebox Component={ AvatarAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '0px' } }>
            <Codebox Component={ RaterAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ LoaderAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
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
            <Codebox Component={ SkeletonAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ CollapseAllDesign } />
          </div>
          <div className="flex flex-col flex-1 w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ DialogAllDesign } className="flex-1" />
          </div>
        </Flex>

        <Flex col span="1/2" style={ { paddingLeft: '1px' } }>
          <div className="w-full" style={ { paddingBottom: '0px' } }>
            <Codebox Component={ ButtonAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ CheckboxAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ SingleSliderAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '0px' } }>
            <Codebox Component={ BadgeAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '0px' } }>
            <Codebox Component={ ChipAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ TooltipAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '0px' } }>
            <Codebox Component={ PaginationAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ StepperAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ DividerAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ TimelineAllDesign } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ CarouselAllDesign } />
          </div>
          <div className="flex flex-col flex-1 w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ ImageAllDesign } className="flex-1" />
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
