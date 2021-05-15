import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import GuideContext from './GuideContext';
import LeftSidebar from './LeftSidebar';
import TopNavigation from './TopNavigation';
import { ScrollUp, Button } from '@fork-ui/components/core';
import Maximize from '@fork-ui/components/icons/all/Maximize';

import AvatarGuide from './_documents/Avatar/loadable';
import BadgeGuide from './_documents/Badge/loadable';
import ButtonGuide from './_documents/Button/loadable';
import CarouselGuide from './_documents/Carousel/loadable';
import CheckboxGuide from './_documents/Checkbox/loadable';
import ChipGuide from './_documents/Chip/loadable';
import CollapseGuide from './_documents/Collapse/loadable';
import DrawerGuide from './_documents/Drawer/loadable';
import FlexGuide from './_documents/Flex/loadable';
import FormGuide from './_documents/Form/loadable';
import IconGuide from './_documents/Icon/loadable';
import ImageGuide from './_documents/Image/loadable';
import LoaderGuide from './_documents/Loader/loadable';
import ProgressGuide from './_documents/Progress/loadable';
import MenuGuide from './_documents/Menu/loadable';
import ModalGuide from './_documents/Modal/loadable';
import PaginationGuide from './_documents/Pagination/loadable';
import PopoverGuide from './_documents/Popover/loadable';
import PopconfirmGuide from './_documents/Popconfirm/loadable';
import RadioGuide from './_documents/Radio/loadable';
import RaterGuide from './_documents/Rater/loadable';
import SkeletonGuide from './_documents/Skeleton/loadable';
import SpeedDialGuide from './_documents/SpeedDial/loadable';
import StepperGuide from './_documents/Stepper/loadable';
import SwitchGuide from './_documents/Switch/loadable';
import TabsGuide from './_documents/Tabs/loadable';
import TimelineGuide from './_documents/Timeline/loadable';
import TooltipGuide from './_documents/Tooltip/loadable';
import TypographyGuide from './_documents/Typography/loadable';
import ConfirmGuide from './_documents/Confirm/loadable';
import MultiSelectGuide from './_documents/MultiSelect/loadable';
import SystemDesign from './SystemDesign/loadable';

const ToggleFullScreen = ({ toggleFullScreen, className }) => (
  <Button
    className={className}
    onClick={toggleFullScreen}
    circle
    icon={<Maximize />}
  />
);
const ToogleFullScreenFloatingButton = styled(ToggleFullScreen)`
  position: fixed;
  bottom: 4rem;
  right: 1rem;
`;

const Guide = () => {
  const [isDark, setIsDark] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const toggleExpand = useCallback(() => setIsExpanded(prev => !prev), []);
  const toggleIsDark = useCallback(() => setIsDark(val => !val), [setIsDark]);
  const toggleFullScreen = useCallback(() => setIsFullScreen(val => !val), [setIsFullScreen]);

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
          <LeftSidebar isExpanded={isExpanded} style={{ display: isFullScreen ? 'none' : null }} />
          <div className="flex-1 flex flex-col">
            <TopNavigation
              toggleExpand={toggleExpand}
              isExpanded={isExpanded}
              isDark={isDark}
              toggleIsDark={toggleIsDark}
              toggleFullScreen={toggleFullScreen}
              style={{ display: isFullScreen ? 'none' : null }}
            />
            <div className="flex m-1">
              <div className="flex-1">
              <Switch>
                <Route path="/document/multiselect" component={ MultiSelectGuide } />
                <Route path="/document/avatar" component={ AvatarGuide } />
                <Route path="/document/badge" component={ BadgeGuide } />
                <Route path="/document/button" component={ ButtonGuide } />
                <Route path="/document/carousel" component={ CarouselGuide } />
                <Route path="/document/checkbox" component={ CheckboxGuide } />
                <Route path="/document/chip" component={ ChipGuide } />
                <Route path="/document/confirm" component={ ConfirmGuide } />
                <Route path="/document/collapse" component={ CollapseGuide } />
                <Route path="/document/drawer" component={ DrawerGuide } />
                <Route path="/document/flex" component={ FlexGuide } />
                <Route path="/document/inputfield" component={ FormGuide } />
                <Route path="/document/icon" component={ IconGuide } />
                <Route path="/document/image" component={ ImageGuide } />
                <Route path="/document/loader" component={ LoaderGuide } />
                <Route path="/document/progress" component={ ProgressGuide } />
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
                <Route path="/document/popconfirm" component={ PopconfirmGuide } />
                <Route path="/document/typography" component={ TypographyGuide } />
                <Route path="/" component={SystemDesign} />
              </Switch>
              </div>
            </div>
          </div>
          {isFullScreen && <ToogleFullScreenFloatingButton toggleFullScreen={toggleFullScreen} />}
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
