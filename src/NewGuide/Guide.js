import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import LeftSidebar from './LeftSidebar';
import TopNavigation from './TopNavigation';
import { ScrollUp } from '@@/fork-ui/src/components/core';

import SystemDesign from '../SystemDesign';
import IconGuide from './guides/IconGuide';
import ButtonGuide from './guides/ButtonGuide';
import DrawerGuide from './guides/DrawerGuide';
import MenuGuide from './guides/MenuGuide';
import BadgeGuide from './guides/BadgeGuide';
import TabsGuide from './guides/TabsGuide';
import CollapseGuide from './guides/CollapseGuide';
import TypoGuide from './guides/TypoGuide';
import SpeedDialGuide from './guides/SpeedDialGuide';

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
              <Route path="/document/icon" component={ IconGuide } />
              <Route path="/document/button" component={ ButtonGuide } />
              <Route path="/document/drawer" component={ DrawerGuide } />
              <Route path="/document/menu" component={ MenuGuide } />
              <Route path="/document/badge" component={ BadgeGuide } />
              <Route path="/document/tabs" component={ TabsGuide } />
              <Route path="/document/collapse" component={ CollapseGuide } />
              <Route path="/document/typography" component={ TypoGuide } />
              <Route path="/document/speeddial" component={ SpeedDialGuide } />
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
