import React from 'react';
import {
  CaretDown,
  Template,
  Apps,
  Typography,
  Mouse,
  Photo,
  Box,
  LayoutSidebar,
  Browser,
  DotsVertical,
  Bell,
  DeviceDesktop
} from '@@/fork-ui/src/components/Icon';

const leftSidebar = {
  Popular: {
    type: 'group',
    items: {
      QueryBuilder: {
        icon: <Template />,
      },
      Flex: {
        icon: <Template />,
      },
      Icon: {
        icon: <Apps />,
      },
      Typography: {
        icon: <Typography />,
      },
      Button: {
        icon: <Mouse />,
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
