# start dev
`yarn install && yarn dev`

# build
`yarn build`

# common
animated
circle
left, top, topLeft
color(text-color, background-color)
bgColor(background-color)
size
shape

# Anchor
- Tránh truyền trực tiếp function vào props kiểu onChange={() => {}} vì nó luôn tạo một clourse mới khi re-render
- state luôn chưa data, không bao giờ chứa DOM. nếu có chứa thì dùng trực tiếp.
- follow BEM with customize
- move import css trong /style/core

# Loader
- <Loader.Spinner />
- <Loader.Linear />
- <Loader.Dot />
- <Loader.Dot
    color="#ffffff"
    color="red"
    color="var(--rc-color--500)"
    color="rgba(124,123,212)"
    size="1.2rem"
    size="1.5em"
    size"22px"
    className="text-lg text-blue--500"
  />
# Skeleton
semanic props: "shape" -> circle typo rect

rc-skeleton --circle --type --rect
var(--rc-color--200) var(--rc-color--300);

.rc-skeleton.--typo, .rc-skeleton.--rect {
  border-radius: $border-radius;
}

.--typo {
  height: 1rem;
}

<Sekeleton  />

# Typo
- color

<Typo disabled />
<Typo strong ilaty /> => fStyle="strong ilaty" ,mFStyle
<Typo underline linethought uppderline /> => tDecoreation="underline" mTDerarion

NO NEED size, fontSize,
ND NEED promary error warning
default tag is p

React.createElement(tag || 'p', props, chidlren );

# Scroll Up

______________________________________ JUST HERE AND ABOVE____________________


--------------
Anchor, Affix, Loader, Skeleton, Typography



Icon, Button, ButtonGroup, Pagination, Avatar, Breadcrumb, Divider, Scroll Up, Chip (4h)

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
/chat
