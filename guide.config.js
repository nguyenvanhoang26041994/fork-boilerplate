import React from 'react';
import {
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
  DeviceMobileRotated,
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
  Avatar: {
    icon: <User />,
  },
  Badge: {
    icon: <Notification />,
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
  Carousel: {
    icon: <DeviceMobileRotated />
  },
  Menu: {
    icon: <DotsVertical />,
  },
  Rater: {
    icon: <StarHalf />,
  },
  Modal: {
    icon: <LayoutBottombar />,
  },
  Drawer: {
    icon: <LayoutSidebar />,
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
  Popover: {
    icon: <Point />,
  },
  Tooltip: {
    icon: <Point />,
  },
  Breadcrumb: {
    icon: <Point />,
  },
  Confirm: {
    icon: <Point />,
  },
  Popconfirm: {
    icon: <Point />,
  },
  Alert: {
    icon: <Point />,
  },
  Notification: {
    icon: <Bell />,
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
  Progress: {
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
