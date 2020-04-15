import React from 'react';
import cn from 'classnames';
import { Icon, Badge } from '@/rc-neumorphism/core';
import DarkModeToggle from '@/components/DarkModeToggle';

require('./TopNavigation.scss');

const TopNavigation = ({ toggleExpand, isExpanded }) => {
  return (
    <div className={cn('top-navigation-container', { '--expanded': isExpanded })}>
      <div className={cn('top-navigation-wrapper', { '--expanded': isExpanded })}>
        <div className={cn('top-navigation', { '--expanded': isExpanded })}>
          <div className="__left">
            <Icon name={isExpanded ? 'indent-decrease' : 'indent-increase'} onClick={toggleExpand} />
            <Icon name="search" className="ml-8" />
          </div>
          <div className="__right">
            <Badge count={14} className="mr-8">
              <Icon name="message-circle" fontSize="1.28rem"/>
            </Badge>
            <Badge count={5} className="mr-8">
              <Icon name="bell" fontSize="1.25rem"/>
            </Badge>
            <DarkModeToggle className="mx-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
