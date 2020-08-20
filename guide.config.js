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
  Bell,
  LayoutCards,
  Eye,
  Dots
} from '@@/fork-ui/src/components/icons';

const leftSidebar = {
  Popular: {
    type: 'group',
    items: {
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
      Form: {
        icon: <Box />,
      },
      Menu: {
        icon: <DotsVertical />,
      },
      SpeedDial: {
        icon: <Dots />,
      },
      QueryBuilder: {
        icon: <LayoutCards />,
      },
      Flex: {
        icon: <Template />,
      },
      Breadcrumb: {},
      Avatar: {},
    }
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
      Chip: {},
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
  Form: {
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
    icon: <Bell />,
    items: {
      Progress: {},
      Loader: {},
      Skeleton: {},
    }
  },
  Staff: {
    type: 'sub',
    icon: <Bell />,
    items: {
      Affix: {},
      Anchor: {},
      Box: {},
      Stepper: {},
      Divider: {},
      Pagination: {},
      Upload: {},
    },
  },
};

export default leftSidebar;
