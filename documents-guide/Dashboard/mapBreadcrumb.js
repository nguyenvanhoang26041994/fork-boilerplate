import React from 'react';
import { Icon } from '@/rc-neumorphism/core';

const _home = {
  key: 'home',
  title: <Icon name="home" />,
  _href: '/',
};

const _components = {
  key: 'components',
  title: <Icon name="device-desktop" />,
  _href: '/',
};

const _overlay = {
  key: 'overlay',
  title: <Icon name="bell" />,
  _href: '/',
};

const _forms = {
  key: 'forms',
  title: <Icon name="box" />,
  _href: '/',
};

const mapBreadcrumb = Object.freeze({
  '/': [],
  '/document/form': [_home, {
    key: 'form',
    title: 'Form',
    _href: '/document/form',
  }],
  '/document/badge': [_home, {
    key: 'badge',
    title: 'Badge',
    _href: '/document/badge',
  }],
  '/document/button': [_home, {
    key: 'button',
    title: 'Button',
    _href: '/document/button',
  }],
  '/document/icon': [_home, {
    key: 'icon',
    title: 'Icon',
    _href: '/document/icon',
  }],
  '/document/typography': [_home, {
    key: 'typography',
    title: 'Typography',
    _href: '/document/typography',
  }],
  '/document/tooltip': [_home, _overlay, {
    key: 'tooltip',
    title: 'Tooltip',
    _href: '/document/tooltip',
  }],
  '/document/checkbox': [_home, _components, {
    key: 'checkbox',
    title: 'Checkbox',
    _href: '/document/checkbox',
  }],
  '/document/radio': [_home, _components, {
    key: 'radio',
    title: 'Radio',
    _href: '/document/radio',
  }],
  '/document/switch': [_home, _components, {
    key: 'switch',
    title: 'Switch',
    _href: '/document/switch',
  }],
  '/document/drawer': [_home, {
    key: 'drawer',
    title: 'Drawer',
    _href: '/document/drawer',
  }],
  '/document/modal': [_home, {
    key: 'modal',
    title: 'Modal',
    _href: '/document/modal',
  }],
  '/document/confirm': [_home, _overlay, {
    key: 'confirm',
    title: 'Confirm',
    _href: '/document/confirm',
  }],
  '/document/popover': [_home, _overlay, {
    key: 'popover',
    title: 'Popover',
    _href: '/document/popover',
  }],
  '/document/alert': [_home, _overlay, {
    key: 'alert',
    title: 'Alert',
    _href: '/document/alert',
  }],
  '/document/notification': [_home, _overlay, {
    key: 'notification',
    title: 'Notification',
    _href: '/document/notification',
  }],
  '/document/timeline': [_home, _components, {
    key: 'timeline',
    title: 'Timeline',
    _href: '/document/timeline',
  }],
  '/document/stepper': [_home, _components, {
    key: 'stepper',
    title: 'Stepper',
    _href: '/document/stepper',
  }],
  '/document/tabs': [_home, {
    key: 'tabs',
    title: 'Tabs',
    _href: '/document/tabs',
  }],
  '/document/collapse': [_home, {
    key: 'collapse',
    title: 'Collapse',
    _href: '/document/collapse',
  }],
  '/document/pagination': [_home, _components, {
    key: 'pagination',
    title: 'Pagination',
    _href: '/document/pagination',
  }],
  '/document/rater': [_home, _components, {
    key: 'rater',
    title: 'Rater',
    _href: '/document/rater',
  }],
  '/document/avatar': [_home, _components, {
    key: 'avatar',
    title: 'Avatar',
    _href: '/document/avatar',
  }],
  '/document/chip': [_home, _components, {
    key: 'chip',
    title: 'Chip',
    _href: '/document/chip',
  }],
  '/document/divider': [_home, _components, {
    key: 'divider',
    title: 'Divider',
    _href: '/document/divider',
  }],
  '/document/breadcrumb': [_home, _components, {
    key: 'breadcrumb',
    title: 'Breadcrumb',
    _href: '/document/breadcrumb',
  }],
  '/document/carousel': [_home, _components, {
    key: 'carousel',
    title: 'Carousel',
    _href: '/document/carousel',
  }],
  '/document/menu': [_home, {
    key: 'menu',
    title: 'Menu',
    _href: '/document/menu',
  }],
  '/document/progress': [_home, _components, {
    key: 'progress',
    title: 'Progress',
    _href: '/document/progress',
  }],
  '/document/affix': [_home, _overlay, {
    key: 'affix',
    title: 'Affix',
    _href: '/document/affix',
  }],
  '/document/textbox': [_home, _forms, {
    key: 'textbox',
    title: 'Textbox',
    _href: '/document/textbox',
  }],
  '/document/password': [_home, _forms, {
    key: 'password',
    title: 'Password',
    _href: '/document/password',
  }],
  '/document/textarea': [_home, _forms, {
    key: 'textarea',
    title: 'Textarea',
    _href: '/document/textarea',
  }],
  '/document/input-number': [_home, _forms, {
    key: 'input-number',
    title: 'Input Number',
    _href: '/document/input-number',
  }],
  '/document/select': [_home, _forms, {
    key: 'select',
    title: 'Select',
    _href: '/document/select',
  }],
  '/document/anchor': [_home, _overlay, {
    key: 'anchor',
    title: 'Anchor',
    _href: '/document/anchor',
  }],
  '/document/slider': [_home, {
    key: 'slider',
    title: 'Slider',
    _href: '/document/slider',
  }],
});

export default mapBreadcrumb;
