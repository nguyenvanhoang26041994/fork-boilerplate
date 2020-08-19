import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import LeftSidebar from './LeftSidebar';
import TopNavigation from './TopNavigation';
import { ScrollUp } from '@@/fork-ui/src/components/core';

import SystemDesign from '../SystemDesign';
import IconGuide from './guides/IconGuide';

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
