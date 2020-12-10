import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import GuideContext from './GuideContext';

import LeftSidebar from './LeftSidebar';
import TopNavigation from './TopNavigation';
import { ScrollUp } from '@fork-ui/components/core';

import AvatarGuide from './_documents/Avatar';
import BadgeGuide from './_documents/Badge';
import ButtonGuide from './_documents/Button';
import CarouselGuide from './_documents/Carousel';
import CheckboxGuide from './_documents/Checkbox';
import ChipGuide from './_documents/Chip';
import CollapseGuide from './_documents/Collapse';
import DrawerGuide from './_documents/Drawer';
import FlexGuide from './_documents/Flex';
import FormGuide from './_documents/Form';
import IconGuide from './_documents/Icon';
import ImageGuide from './_documents/Image';
import LoaderGuide from './_documents/Loader';
import MenuGuide from './_documents/Menu';
import ModalGuide from './_documents/Modal';
import PaginationGuide from './_documents/Pagination';
import PopoverGuide from './_documents/Popover';
import RadioGuide from './_documents/Radio';
import RaterGuide from './_documents/Rater';
import SkeletonGuide from './_documents/Skeleton';
import SpeedDialGuide from './_documents/SpeedDial';
import StepperGuide from './_documents/Stepper';
import SwitchGuide from './_documents/Switch';
import TabsGuide from './_documents/Tabs';
import TimelineGuide from './_documents/Timeline';
import TooltipGuide from './_documents/Tooltip';
import TypographyGuide from './_documents/Typography';

const Guide = () => {
  const [isDark, setIsDark] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = useCallback(() => setIsExpanded(prev => !prev), []);
  const toggleIsDark = useCallback(() => setIsDark(val => !val), [setIsDark]);

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
    <GuideContext.Provider value={{ isDark, setIsDark, toggleIsDark }}>
      <BrowserRouter>
        <div id="main-admin" className="flex">
          <LeftSidebar isExpanded={isExpanded} />
          <div className="flex-1 flex flex-col">
            <TopNavigation
              toggleExpand={toggleExpand}
              isExpanded={isExpanded}
              isDark={isDark}
              toggleIsDark={toggleIsDark}
            />
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
    </GuideContext.Provider>
  );
};

Guide.displayName = 'Guide';
Guide.propTypes = {};
Guide.defaultProps = {};

export default Guide;
