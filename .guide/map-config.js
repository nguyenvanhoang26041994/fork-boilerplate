import React from 'react';
import leftSidebar from '../guide.config';
import Point from '@fork-ui/components/icons/all/Point';

const splitCamelCase = str => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
}

const mapRouter = (function() {
  const _mapRouter = {};
  const leftSidebarKeys = Object.keys(leftSidebar);

  leftSidebarKeys.forEach(lSBKey => {
    if (leftSidebar[lSBKey].type) {
      const itemKeys = Object.keys(leftSidebar[lSBKey].items);

      itemKeys.forEach(iKey => {
        const iKeyLowerCase = iKey.toLowerCase();
      
        const _key = `/document/${iKeyLowerCase}`;
        const _value = iKeyLowerCase;
        _mapRouter[_key] = _value;
      });
    } else {
      const iKeyLowerCase = lSBKey.toLowerCase();
      const _key = `/document/${iKeyLowerCase}`;
      const _value = iKeyLowerCase;
      _mapRouter[_key] = _value
    }
  });

  return _mapRouter;
})();

const mapMenuItem = (function() {
  const _mapMenuItem = {};
  const leftSidebarKeys = Object.keys(leftSidebar);

  leftSidebarKeys.forEach(lSBKey => {
    if (leftSidebar[lSBKey].type) {
      _mapMenuItem[lSBKey] = {
        ...leftSidebar[lSBKey],
        key: `${leftSidebar[lSBKey].type}-${lSBKey.toLowerCase()}`,
        title: splitCamelCase(lSBKey),
        items: (function() {
          const _items = {...leftSidebar[lSBKey].items};
          const itemKeys = Object.keys(leftSidebar[lSBKey].items);
  
          itemKeys.forEach(iKey => {
            _items[iKey] = {...leftSidebar[lSBKey].items[iKey]};
            _items[iKey].key = iKey.toLowerCase();
            _items[iKey].title = splitCamelCase(iKey);
  
            if (leftSidebar[lSBKey].type === 'sub') {
              _items[iKey].icon = <Point />;
              _items[iKey].titleOnly = true;
            }
          });
  
          return _items;
        })(),
      };
    } else {
      _mapMenuItem[lSBKey] = {
        ...leftSidebar[lSBKey],
        key: `${lSBKey.toLowerCase()}`,
        title: splitCamelCase(lSBKey),
      }
    }
  });

  return _mapMenuItem;
})();

export {
  mapRouter,
  mapMenuItem,
};
