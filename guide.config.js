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
} from '@@/fork-ui/src/components/icons';

const leftSidebar = {
  Icon: {
    icon: <GridDots />,
  },
  Button: {
    icon: <Mouse />,
  },
  Typography: {
    icon: <Typography />,
  },
  Image: {
    icon: <Photo />,
  },
  InputField: {
    icon: <Box />,
  },
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
      Tabs: {},
      Modal: {},
      Drawer: {},
      Badge: {},
      Collapse: {},
      Popover: {},
      Tooltip: {},
      Timeline: {},
      Carousel: {},
      Stepper: {},
      Chip: {},
      Breadcrumb: {},
      Pagination: {},
      Avatar: {},
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
      InputNumber: {},
      Select: {},
      Checkbox: {},
      Radio: {},
      Switch: {},
      Slider: {},
    }
  },
  Loading: {
    type: 'sub',
    icon: <Rotate2 />,
    items: {
      Progress: {},
      Loader: {},
      Skeleton: {},
      Box: {},
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
    },
  },
};

export default leftSidebar;
