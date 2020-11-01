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
  Tabs: {
    icon: <DeviceLaptop />,
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
  // InputField: {
  //   icon: <Box />,
  // },
  Menu: {
    icon: <DotsVertical />,
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
      Collapse: {},
      Popover: {},
      Tooltip: {},
      Timeline: {},
      Carousel: {},
      Stepper: {},
      Chip: {},
      Breadcrumb: {},
      Pagination: {},
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
      Rater: {},
    },
  },
  FormField: {
    type: 'sub',
    icon: <Box />,
    items: {
      Textbox: {},
      Password: {},
      Textarea: {},
      // Number: {},
      // Select: {},
      // Slider: {},
    }
  },
  Loading: {
    type: 'sub',
    icon: <Rotate2 />,
    items: {
      Progress: {},
      Loader: {},
      Skeleton: {},
      // Box: {},
    }
  },
  Staff: {
    type: 'sub',
    icon: <Braces />,
    items: {
      Affix: {},
      Anchor: {},
      Divider: {},
      Upload: {},
      QueryBuilder: {},
      Dialog: {},
    },
  },
};

export default leftSidebar;
