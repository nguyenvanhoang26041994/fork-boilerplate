import React from 'react';
import {
  Notification,
  Template,
  GridDots,
  Typography,
  Mouse,
  Photo,
  Box,
  DotsVertical,
  Rotate2,
  Eye,
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
  Line,
  ChevronDown,
  PageBreak,
  LoaderQuarter,
  Bookmark,
  StarHalf,
} from '@@/fork-ui/src/components/icons';

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
  DataDisplay: {
    type: 'sub',
    icon: <Eye />,
    items: {
      Popover: {},
      Tooltip: {},
      Timeline: {},
      Carousel: {},
      Stepper: {},
      
      Breadcrumb: {},
      
    }
  },
  Feedback: {
    type: 'sub',
    icon: <Notification />,
    items: {
      Confirm: {},
      Popconfirm: {},
      Alert: {},
      Notification: {},
    },
  },
  FormField: {
    type: 'sub',
    icon: <Box />,
    items: {
      Textbox: {},
      Password: {},
      Textarea: {},
    }
  },
  Loading: {
    type: 'sub',
    icon: <Rotate2 />,
    items: {
      Progress: {},
      
      // Box: {},
    }
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
