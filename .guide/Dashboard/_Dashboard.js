import React, { useState, useCallback, useMemo } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import LeftSidebar from './LeftSidebar';
import TopNavigation from './TopNavigation';
import loadable from '@/utils/loadable';
import { Breadcrumb, Icon, Loader } from '@/rc-neumorphism/core';
import { mapBreadcrumb } from '../map-config';

const fallback = (
  <div
    style={ {
      position: 'fixed',
      top: '50%',
      left: '50%',
      zIndex: 10000,
      transform: 'translate(-50%, -50%)',
    } }
  >
    <Loader.Dot size="2rem" />
  </div>
);

const AffixDocument = loadable(() => import('../_documents/Affix'), { fallback });
const AlertDocument = loadable(() => import('../_documents/Alert'), { fallback });
const AnchorDocument = loadable(() => import('../_documents/Anchor'), { fallback });
const AvatarDocument = loadable(() => import('../_documents/Avatar'), { fallback });
const BadgeDocument = loadable(() => import('../_documents/Badge'), { fallback });
const BreadcrumbDocument = loadable(() => import('../_documents/Breadcrumb'), { fallback });
const ButtonDocument = loadable(() => import('../_documents/Button'), { fallback });
const CarouselDocument = loadable(() => import('../_documents/Carousel'), { fallback });
const CheckboxDocument = loadable(() => import('../_documents/Checkbox'), { fallback });
const ChipDocument = loadable(() => import('../_documents/Chip'), { fallback });
const CollapseDocument = loadable(() => import('../_documents/Collapse'), { fallback });
const ConfirmDocument = loadable(() => import('../_documents/Confirm'), { fallback });
const DividerDocument = loadable(() => import('../_documents/Divider'), { fallback });
const DrawerDocument = loadable(() => import('../_documents/Drawer'), { fallback });
const FormDocument = loadable(() => import('../_documents/Form'), { fallback });
const IconDocument = loadable(() => import('../_documents/Icon'), { fallback });
const InputNumberDocument = loadable(() => import('../_documents/InputNumber'), { fallback });
const LoaderDocument = loadable(() => import('../_documents/Loader'), { fallback });
const MenuDocument = loadable(() => import('../_documents/Menu'), { fallback });
const ModalDocument = loadable(() => import('../_documents/Modal'), { fallback });
const NotificationDocument = loadable(() => import('../_documents/Notification'), { fallback });
const PaginationDocument = loadable(() => import('../_documents/Pagination'), { fallback });
const PasswordDocument = loadable(() => import('../_documents/Password'), { fallback });
const PopoverDocument = loadable(() => import('../_documents/Popover'), { fallback });
const ProgressDocument = loadable(() => import('../_documents/Progress'), { fallback });
const RadioDocument = loadable(() => import('../_documents/Radio'), { fallback });
const RaterDocument = loadable(() => import('../_documents/Rater'), { fallback });
const SelectDocument = loadable(() => import('../_documents/Select'), { fallback });
const SkeletonDocument = loadable(() => import('../_documents/Skeleton'), { fallback });
const SliderDocument = loadable(() => import('../_documents/Slider'), { fallback });
const StepperDocument = loadable(() => import('../_documents/Stepper'), { fallback });
const SwitchDocument = loadable(() => import('../_documents/Switch'), { fallback });
const TabsDocument = loadable(() => import('../_documents/Tabs'), { fallback });
const TextareaDocument = loadable(() => import('../_documents/Textarea'), { fallback });
const TextboxDocument = loadable(() => import('../_documents/Textbox'), { fallback });
const TimelineDocument = loadable(() => import('../_documents/Timeline'), { fallback });
const TooltipDocument = loadable(() => import('../_documents/Tooltip'), { fallback });
const TypographyDocument = loadable(() => import('../_documents/Typography'), { fallback });

const Dashboard = ({}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleExpand = useCallback(() => setIsExpanded(prev => !prev), []);

  const location = useLocation();

  const breadcrumb = useMemo(() => {
    return mapBreadcrumb[location.pathname] || [];
  }, [location.pathname]);

  return (
    <div id="main-admin" className="flex pr-2">
      <LeftSidebar isExpanded={isExpanded} />
      <div className="flex-1 flex flex-col">
        <TopNavigation toggleExpand={toggleExpand} isExpanded={isExpanded} />
        <Breadcrumb className="mb-3">
          {breadcrumb.map(props => (
            <Breadcrumb.Item
              key={props.key}
              title={props.icon ? (<Icon name={props.icon} />) : props.title}
              href={props._href}
            />
          ))}
        </Breadcrumb>
        <div className="flex">
          <div className="flex-1">
            <Switch>
              <Route path="/document/affix" component={ AffixDocument } />
              <Route path="/document/alert" component={ AlertDocument } />
              <Route path="/document/anchor" component={ AnchorDocument } />
              <Route path="/document/avatar" component={ AvatarDocument } />
              <Route path="/document/badge" component={ BadgeDocument } />
              <Route path="/document/breadcrumb" component={ BreadcrumbDocument } />
              <Route path="/document/button" component={ ButtonDocument } />
              <Route path="/document/carousel" component={ CarouselDocument } />
              <Route path="/document/checkbox" component={ CheckboxDocument } />
              <Route path="/document/chip" component={ ChipDocument } />
              <Route path="/document/collapse" component={ CollapseDocument } />
              <Route path="/document/confirm" component={ ConfirmDocument } />
              <Route path="/document/divider" component={ DividerDocument } />
              <Route path="/document/drawer" component={ DrawerDocument } />
              <Route path="/document/form" component={ FormDocument } />
              <Route path="/document/icon" component={ IconDocument } />
              <Route path="/document/inputnumber" component={ InputNumberDocument } />
              <Route path="/document/loader" component={ LoaderDocument } />
              <Route path="/document/menu" component={ MenuDocument } />
              <Route path="/document/modal" component={ ModalDocument } />
              <Route path="/document/notification" component={ NotificationDocument } />
              <Route path="/document/pagination" component={ PaginationDocument } />
              <Route path="/document/password" component={ PasswordDocument } />
              <Route path="/document/popover" component={ PopoverDocument } />
              <Route path="/document/progress" component={ ProgressDocument } />
              <Route path="/document/radio" component={ RadioDocument } />
              <Route path="/document/rater" component={ RaterDocument } />
              <Route path="/document/select" component={ SelectDocument } />
              <Route path="/document/skeleton" component={ SkeletonDocument } />
              <Route path="/document/slider" component={ SliderDocument } />
              <Route path="/document/stepper" component={ StepperDocument } />
              <Route path="/document/switch" component={ SwitchDocument } />
              <Route path="/document/tabs" component={ TabsDocument } />
              <Route path="/document/textarea" component={ TextareaDocument } />
              <Route path="/document/textbox" component={ TextboxDocument } />
              <Route path="/document/timeline" component={ TimelineDocument } />
              <Route path="/document/tooltip" component={ TooltipDocument } />
              <Route path="/document/typography" component={ TypographyDocument } />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
};

Dashboard.displayName = 'Dashboard';
Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
