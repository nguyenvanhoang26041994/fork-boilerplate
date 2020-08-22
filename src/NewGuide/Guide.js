import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import LeftSidebar from './LeftSidebar';
import TopNavigation from './TopNavigation';
import { ScrollUp } from '@@/fork-ui/src/components/core';

import SystemDesign from '../SystemDesign';
import AffixDocument from '@@/.guide/_documents/Affix/Document';
import AlertDocument from '@@/.guide/_documents/Alert/Document';
import AnchorDocument from '@@/.guide/_documents/Anchor/Document';
import AvatarGuide from './guides/AvatarGuide';
import BadgeGuide from './guides/BadgeGuide';
import BoxDocument from '@@/.guide/_documents/Box/Document';
import BreadcrumbDocument from '@@/.guide/_documents/Breadcrumb/Document';
import ButtonGuide from './guides/ButtonGuide';
import CarouselGuide from './guides/CarouselGuide';
import CheckboxGuide from './guides/CheckboxGuide';
import ChipDocument from '@@/.guide/_documents/Chip/Document';
import CollapseGuide from './guides/CollapseGuide';
import ConfirmDocument from '@@/.guide/_documents/Confirm/Document';
import DividerDocument from '@@/.guide/_documents/Divider/Document';
import DrawerGuide from './guides/DrawerGuide';
import FlexGuide from './guides/FlexGuide';
import FormGuide from './guides/FormGuide';
import IconGuide from './guides/IconGuide';
import ImageGuide from './guides/ImageGuide';
import InputNumberDocument from '@@/.guide/_documents/InputNumber/Document';
import LoaderGuide from './guides/LoaderGuide';
import MenuGuide from './guides/MenuGuide';
import ModalGuide from './guides/ModalGuide';
import NotificationDocument from '@@/.guide/_documents/Notification/Document';
import PaginationGuide from './guides/PaginationGuide';
import PasswordDocument from '@@/.guide/_documents/Password/Document';
import PopconfirmDocument from '@@/.guide/_documents/Popconfirm/Document';
import PopoverGuide from './guides/PopoverGuide';
import ProgressDocument from '@@/.guide/_documents/Progress/Document';
import QueryBuilderDocument from '@@/.guide/_documents/QueryBuilder/Document';
import RadioGuide from './guides/RadioGuide';
import RaterDocument from '@@/.guide/_documents/Rater/Document';
import SelectDocument from '@@/.guide/_documents/Select/Document';
import SkeletonGuide from './guides/SkeletonGuide';
import SliderDocument from '@@/.guide/_documents/Slider/Document';
import SpeedDialGuide from './guides/SpeedDialGuide';
import StepperGuide from './guides/StepperGuide';
import SwitchGuide from './guides/SwitchGuide';
import TabsGuide from './guides/TabsGuide';
import TextareaDocument from '@@/.guide/_documents/Textarea/Document';
import TextboxDocument from '@@/.guide/_documents/Textbox/Document';
import TimelineGuide from './guides/TimelineGuide';
import TooltipGuide from './guides/TooltipGuide';
import TypographyGuide from './guides/TypographyGuide';
import UploadDocument from '@@/.guide/_documents/Upload/Document';

const Dashboard = ({}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = useCallback(() => setIsExpanded(prev => !prev), []);

  return (
    <div id="main-admin" className="flex">
      <LeftSidebar isExpanded={isExpanded} />
      <div className="flex-1 flex flex-col">
        <TopNavigation toggleExpand={toggleExpand} isExpanded={isExpanded} />
        <div className="flex m-1">
          <div className="flex-1">
            <Switch>
              <Route path="/document/affix" component={ AffixDocument } />
              <Route path="/document/alert" component={ AlertDocument } />
              <Route path="/document/anchor" component={ AnchorDocument } />
              <Route path="/document/avatar" component={ AvatarGuide } />
              <Route path="/document/badge" component={ BadgeGuide } />
              <Route path="/document/box" component={ BoxDocument } />
              <Route path="/document/breadcrumb" component={ BreadcrumbDocument } />
              <Route path="/document/button" component={ ButtonGuide } />
              <Route path="/document/carousel" component={ CarouselGuide } />
              <Route path="/document/checkbox" component={ CheckboxGuide } />
              <Route path="/document/chip" component={ ChipDocument } />
              <Route path="/document/collapse" component={ CollapseGuide } />
              <Route path="/document/confirm" component={ ConfirmDocument } />
              <Route path="/document/divider" component={ DividerDocument } />
              <Route path="/document/drawer" component={ DrawerGuide } />
              <Route path="/document/flex" component={ FlexGuide } />
              <Route path="/document/form" component={ FormGuide } />
              <Route path="/document/icon" component={ IconGuide } />
              <Route path="/document/image" component={ ImageGuide } />
              <Route path="/document/inputnumber" component={ InputNumberDocument } />
              <Route path="/document/loader" component={ LoaderGuide } />
              <Route path="/document/menu" component={ MenuGuide } />
              <Route path="/document/modal" component={ ModalGuide } />
              <Route path="/document/notification" component={ NotificationDocument } />
              <Route path="/document/pagination" component={ PaginationGuide } />
              <Route path="/document/password" component={ PasswordDocument } />
              <Route path="/document/popconfirm" component={ PopconfirmDocument } />
              <Route path="/document/popover" component={ PopoverGuide } />
              <Route path="/document/progress" component={ ProgressDocument } />
              <Route path="/document/querybuilder" component={ QueryBuilderDocument } />
              <Route path="/document/radio" component={ RadioGuide } />
              <Route path="/document/rater" component={ RaterDocument } />
              <Route path="/document/select" component={ SelectDocument } />
              <Route path="/document/skeleton" component={ SkeletonGuide } />
              <Route path="/document/slider" component={ SliderDocument } />
              <Route path="/document/speeddial" component={ SpeedDialGuide } />
              <Route path="/document/stepper" component={ StepperGuide } />
              <Route path="/document/switch" component={ SwitchGuide } />
              <Route path="/document/tabs" component={ TabsGuide } />
              <Route path="/document/textarea" component={ TextareaDocument } />
              <Route path="/document/textbox" component={ TextboxDocument } />
              <Route path="/document/timeline" component={ TimelineGuide } />
              <Route path="/document/tooltip" component={ TooltipGuide } />
              <Route path="/document/typography" component={ TypographyGuide } />
              <Route path="/document/upload" component={ UploadDocument } />
              <Route path="/" component={SystemDesign} />
            </Switch>
          </div>
        </div>
      </div>
      <ScrollUp />
    </div>
  )
};

Dashboard.displayName = 'Dashboard';
Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
