import React from 'react';
import {
  CaretDown,
  Template,
  GridDots,
  Typography,
  Mouse,
  Photo,
  Box,
  LayoutSidebar,
  Browser,
  DotsVertical,
  Bell,
  DeviceDesktop,
  LayoutCards
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
      QueryBuilder: {
        icon: <LayoutCards />,
      },
      Flex: {
        icon: <Template />,
      },
      Image: {
        icon: <Photo />,
      },
      Form: {
        icon: <Box />,
      },
      Drawer: {
        icon: <LayoutSidebar />,
      },
      Modal: {
        icon: <Browser />,
      },
      Menu: {
        icon: <DotsVertical />,
      },
      Tabs: {
        icon: <Browser />,
      },
      Collapse: {
        icon: <CaretDown />,
      },
    }
  },
  Components: {
    type: 'sub',
    icon: <DeviceDesktop />,
    items: {
      Box: {},
      Badge: {},
      Checkbox: {},
      Radio: {},
      Switch: {},
      Breadcrumb: {},
      Avatar: {},
      Carousel: {},
      Timeline: {},
      Stepper: {},
      Chip: {},
      Divider: {},
      Pagination: {},
      Progress: {},
      Slider: {},
      Rater: {},
      Loader: {},
      Skeleton: {},
      Upload: {},
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
    }
  },
  Overlay: {
    type: 'sub',
    icon: <Bell />,
    items: {
      Affix: {},
      Anchor: {},
      Confirm: {},
      Tooltip: {},
      Popconfirm: {},
      Popover: {},
      Alert: {},
      Notification: {},
      SpeedDial: {},
    },
  },
};

export default leftSidebar;
