import React from 'react';
import leftSidebar from '@@/guide.config';
import { Point, Home, DeviceDesktop, Box, Bell } from '@@/fork-ui/src/components/icons'

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const _mapRouterForBreadcrumb = {};
const mapRouter = (function() {
  const _mapRouter = {};
  const leftSidebarKeys = Object.keys(leftSidebar);

  leftSidebarKeys.forEach(lSBKey => {
    const itemKeys = Object.keys(leftSidebar[lSBKey].items);

    itemKeys.forEach(iKey => {
      const iKeyLowerCase = iKey.toLowerCase();
    
      const _key = `/document/${iKeyLowerCase}`;
      const _value = iKeyLowerCase;
      _mapRouter[_key] = _value;
      _mapRouterForBreadcrumb[_key] = lSBKey;
    });
  });

  return _mapRouter;
})();

const mapMenuItem = (function() {
  const _mapMenuItem = {};
  const leftSidebarKeys = Object.keys(leftSidebar);

  leftSidebarKeys.forEach(lSBKey => {
    _mapMenuItem[lSBKey] = {
      ...leftSidebar[lSBKey],
      key: `${leftSidebar[lSBKey].type}-${lSBKey.toLowerCase()}`,
      title: lSBKey,
      items: (function() {
        const _items = {...leftSidebar[lSBKey].items};
        const itemKeys = Object.keys(leftSidebar[lSBKey].items);

        itemKeys.forEach(iKey => {
          _items[iKey] = {...leftSidebar[lSBKey].items[iKey]};
          _items[iKey].key = iKey.toLowerCase();
          _items[iKey].title = iKey;

          if (leftSidebar[lSBKey].type === 'sub') {
            _items[iKey].icon = <Point />;
            _items[iKey].titleOnly = true;
          }
        });

        return _items;
      })(),
    };
  });

  return _mapMenuItem;
})();

const mapBreadcrumb = (function() {
  const _home = {
    key: 'home',
    title: 'Home',
    icon: <Home />,
    _href: '/',
  };
  
  const _components = {
    key: 'components',
    title: 'Components',
    icon: <DeviceDesktop />,
    _href: '/',
  };
  
  const _overlay = {
    key: 'overlay',
    icon: <Bell />,
    title: 'Overlay',
    _href: '/',
  };
  
  const _form = {
    key: 'form',
    icon: <Box />,
    title: 'Form',
    _href: '/',
  };

  const _mapBreadcrumb = {
    '/': [],
  };

  Object.keys(mapRouter).forEach(key => {
    const inject = [_home];
    if (_mapRouterForBreadcrumb[key] === 'Components') {
      inject.push(_components);
    }

    if (_mapRouterForBreadcrumb[key] === 'Form') {
      inject.push(_form);
    }

    if (_mapRouterForBreadcrumb[key] === 'Overlay') {
      inject.push(_overlay);
    }

    const self = {
      key: mapRouter[key],
      _href: key,
      title: capitalizeFirstLetter(mapRouter[key]),
    };
    inject.push(self);
    _mapBreadcrumb[key] = inject;
  });

  return _mapBreadcrumb; 
})();

export {
  mapRouter,
  mapMenuItem,
  mapBreadcrumb,
};
