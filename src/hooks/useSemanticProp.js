import { useMemo } from 'react';
import getLatestTruthyProp from '../utils/getLatestTruthyProp';
import { hasOwnProperty } from '../utils/helpers';

const makeDepsTracking = (props, deps) => deps.map(name => props[name]);

export default (name, props, deps) => {
  return useMemo(() => {
    if (hasOwnProperty(props, `${name}`)) {
      return props[name];
    }

    return getLatestTruthyProp(props, deps);
  }, [
    ...makeDepsTracking(props, deps),
    props[name],
  ]);
}
