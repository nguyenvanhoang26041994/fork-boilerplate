import React from 'react';
import {
  AlertCircle,
  Notification,
  Template,
  GridDots,
  Typography,
  Mouse,
  Photo,
  ArrowRightCircle,
  DotsVertical,
  Point,
  Dots,
  Braces,
  LayoutSidebar,
  LayoutBottombar,
  DeviceLaptop,
  Circle,
  ToggleRight,
  Checkbox,
  User,
  GripHorizontal,
  Bell,
  ChevronDown,
  PageBreak,
  LoaderQuarter,
  Bookmark,
  StarHalf,
  Clock,
  Loader,
  DeviceMobileRotated,
  Message2,
  Message,
  QuestionMark,
  Help,
} from '@fork-ui/components/icons';

const leftSidebar = {
  Icon: {
    icon: <GridDots />,
  },
  Button: {
    icon: <Mouse />,
  },
  Checkbox: {
    icon: <Checkbox />,
  },
  Radio: {
    icon: <Circle />,
  },
  Switch: {
    icon: <ToggleRight />,
  },
  Badge: {
    icon: <Notification />,
  },
  Avatar: {
    icon: <User />,
  },
  Typography: {
    icon: <Typography />,
  },
  Skeleton: {
    icon: <GripHorizontal />,
  },
  Loader: {
    icon: <LoaderQuarter />,
  },
  Progress: {
    icon: <Loader />,
  },
  // Divider: {
  //   icon: <Line />,
  // },
  Chip: {
    icon: <Bookmark />,
  },
  Pagination: {
    icon: <PageBreak />,
  },
  Tabs: {
    icon: <DeviceLaptop />,
  },
  Collapse: {
    icon: <ChevronDown />,
  },
  Timeline: {
    icon: <Clock />,
  },
  Stepper: {
    icon: <ArrowRightCircle />
  },
  Rater: {
    icon: <StarHalf />,
  },
  Popover: {
    icon: <Message />,
  },
  Tooltip: {
    icon: <Message2 />,
  },
  Confirm: {
    icon: <QuestionMark />,
  },
  Popconfirm: {
    icon: <Help />,
  },
  Alert: {
    icon: <AlertCircle />,
  },
  Notification: {
    icon: <Bell />,
  },
  Modal: {
    icon: <LayoutBottombar />,
  },
  Drawer: {
    icon: <LayoutSidebar />,
  },
  Carousel: {
    icon: <DeviceMobileRotated />
  },
  Menu: {
    icon: <DotsVertical />,
  },
  Image: {
    icon: <Photo />,
  },
  SpeedDial: {
    icon: <Dots />,
  },
  Flex: {
    icon: <Template />,
  },
  Breadcrumb: {
    icon: <Point />,
  },
  Textbox: {
    icon: <Point />,
  },
  Password: {
    icon: <Point />,
  },
  Textarea: {
    icon: <Point />,
  },
  Staff: {
    type: 'sub',
    icon: <Braces />,
    items: {
      Affix: {},
      Anchor: {},
      Upload: {},
      QueryBuilder: {},
      Dialog: {},
    },
  },
};

export default leftSidebar;
