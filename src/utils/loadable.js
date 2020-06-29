import React, { lazy, Suspense } from 'react';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  const LoadableComponent = (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );

  LoadableComponent.displayName = 'LoadableComponent';
  return LoadableComponent;
};

export default loadable;
