import withGuides from '@fork-guide/HOCs/withGuides';

import Notification from './Notification';
import Custom from './Custom';
import WithAvatarGroup from './WithAvatarGroup';
import PushNotification from './PushNotification';
import UpdateNotification from './UpdateNotification';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Notification, name: 'Notification' },
  { Component: PushNotification, name: 'PushNotification' },
  { Component: UpdateNotification, name: 'UpdateNotification' },
  { Component: Custom, name: 'Custom' },
  { Component: WithAvatarGroup, name: 'WithAvatarGroup' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
