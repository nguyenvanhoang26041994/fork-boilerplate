import withGuides from '@fork-guide/HOCs/withGuides';
import Avatar from './Avatar';
import AvatarGroup from './AvatarGroup';
import Color from './Color';
import Size from './Size';
import WithBadge from './WithBadge';
import CustomAvatarGroup from './CustomAvatarGroup';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Avatar, name: 'Avatar' },
  { Component: AvatarGroup, name: 'AvatarGroup' },
  { Component: Color, name: 'Color' },
  { Component: Size, name: 'Size' },
  { Component: WithBadge, name: 'WithBadge' },
  { Component: CustomAvatarGroup, name: 'CustomAvatarGroup' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
