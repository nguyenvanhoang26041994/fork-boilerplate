# start dev
`yarn install && yarn dev`

# build
`yarn build`

# common
animated
circle
square
rect
left, top, topLeft
color(text-color, background-color)
bgColor(background-color)
textColor
size
shape
placement

border-radius: 50% => border-radiú: 100rem;

# Scroll Up

______________________________________ JUST HERE AND ABOVE____________________


--------------
Anchor, Affix, Loader, Skeleton, Typography -- DONE



Icon, Button, ButtonGroup, Pagination, Avatar, Breadcrumb, Divider, Scroll Up, Chip (4h) -- COMMING

Radio, Checkbox, Switch
Portal, Alert, Confirm, Notifation, Drawer, Modal
Overlay, Tootltip, Popover
Badge, Rater
Timeline, Steps
BaseInput, Textbox, Password, Texarea, InputNumber, Form
Radio, Checkbox, Switch
Slider, Progress
Menu, Select

Memo, Tabs
Collapse


--------------
# Progress.Linear
<Progress.Linear animated />
# Divider
- placement
# Carousel
# Box
const skeleton = (
  <div>
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
);

<Box loading skeleton={skeleton} disabled>
  <form>
    <input defaultValue="2" />
    <input defaultValue="2" />
  </form>
</Box>

# Upload

return children;
# Multi Select
# Slider
# Overlay

## PHASE 2
# Table
# Date
# Calendar
# Context Menu

/core
/chart
/icon
require('fork-ui/core').use(
 'home',
  'heart',
);

// import { Icon } from 'fork-ui/core';


//register-icon.js
const icons = {
  'caret-down': require('./caret-down').default,
};

function use() {
  arguments.forEach(iconName => {
    icons[iconName] = require('./caret-down').default;
  });
}

function add(name, svg) {
  icons[name] = svg;
}

module.exports = { use, svgs: icons };

---------------------------------------
/chat
