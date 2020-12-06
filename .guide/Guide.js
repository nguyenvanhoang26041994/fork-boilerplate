import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import LeftSidebar from './components/LeftSidebar';
import TopNavigation from './components/TopNavigation';
import { ScrollUp } from '@fork-ui/components/core';

import AvatarGuide from './components/_documents/Avatar';
import BadgeGuide from './components/_documents/Badge';
import ButtonGuide from './components/_documents/Button';
import CarouselGuide from './components/_documents/Carousel';
import CheckboxGuide from './components/_documents/Checkbox';
import ChipGuide from './components/_documents/Chip';
import CollapseGuide from './components/_documents/Collapse';
import DrawerGuide from './components/_documents/Drawer';
import FlexGuide from './components/_documents/Flex';
import FormGuide from './components/_documents/Form';
import IconGuide from './components/_documents/Icon';
import ImageGuide from './components/_documents/Image';
import LoaderGuide from './components/_documents/Loader';
import MenuGuide from './components/_documents/Menu';
import ModalGuide from './components/_documents/Modal';
import PaginationGuide from './components/_documents/Pagination';
import PopoverGuide from './components/_documents/Popover';
import RadioGuide from './components/_documents/Radio';
import RaterGuide from './components/_documents/Rater';
import SkeletonGuide from './components/_documents/Skeleton';
import SpeedDialGuide from './components/_documents/SpeedDial';
import StepperGuide from './components/_documents/Stepper';
import SwitchGuide from './components/_documents/Switch';
import TabsGuide from './components/_documents/Tabs';
import TimelineGuide from './components/_documents/Timeline';
import TooltipGuide from './components/_documents/Tooltip';
import TypographyGuide from './components/_documents/Typography';

const Guide = () => {
  const [isDark, setIsDark] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = useCallback(() => setIsExpanded(prev => !prev), []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }, [isDark]);

  return (
      <BrowserRouter>
        <div id="main-admin" className="flex">
          <LeftSidebar isExpanded={isExpanded} />
          <div className="flex-1 flex flex-col">
            <TopNavigation toggleExpand={toggleExpand} isExpanded={isExpanded} />
            <div className="flex m-1">
              <div className="flex-1">
              <Switch>
                <Route path="/document/avatar" component={ AvatarGuide } />
                <Route path="/document/badge" component={ BadgeGuide } />
                <Route path="/document/button" component={ ButtonGuide } />
                <Route path="/document/carousel" component={ CarouselGuide } />
                <Route path="/document/checkbox" component={ CheckboxGuide } />
                <Route path="/document/chip" component={ ChipGuide } />
                <Route path="/document/collapse" component={ CollapseGuide } />
                <Route path="/document/drawer" component={ DrawerGuide } />
                <Route path="/document/flex" component={ FlexGuide } />
                <Route path="/document/inputfield" component={ FormGuide } />
                <Route path="/document/icon" component={ IconGuide } />
                <Route path="/document/image" component={ ImageGuide } />
                <Route path="/document/loader" component={ LoaderGuide } />
                <Route path="/document/menu" component={ MenuGuide } />
                <Route path="/document/modal" component={ ModalGuide } />
                <Route path="/document/pagination" component={ PaginationGuide } />
                <Route path="/document/popover" component={ PopoverGuide } />
                <Route path="/document/radio" component={ RadioGuide } />
                <Route path="/document/rater" component={ RaterGuide } />
                <Route path="/document/skeleton" component={ SkeletonGuide } />
                <Route path="/document/speeddial" component={ SpeedDialGuide } />
                <Route path="/document/stepper" component={ StepperGuide } />
                <Route path="/document/switch" component={ SwitchGuide } />
                <Route path="/document/tabs" component={ TabsGuide } />
                <Route path="/document/timeline" component={ TimelineGuide } />
                <Route path="/document/tooltip" component={ TooltipGuide } />
                <Route path="/document/typography" component={ TypographyGuide } />
                <Route path="/" component={IconGuide} />
                </Switch>
              </div>
            </div>
          </div>
          <ScrollUp />
        </div>
      </BrowserRouter>
  );
};

Guide.displayName = 'Guide';
Guide.propTypes = {};
Guide.defaultProps = {};

export default Guide;
