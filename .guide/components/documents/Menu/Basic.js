import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import {
  Message,
  Heart,
  Star,
  Bell,
  Tool,
  Power,
  Copy,
  Dots
} from '@fork-ui/components/icons';

const StyledMenu = styled.div`
  background-color: var(--menu--bg);
  max-width: 220px;
`;

const Menu = (props) => {
  return (
    <StyledMenu {...props} />
  )
}


const StyledItem = styled.button`
  padding: 0.75em 1em;
  border-bottom: 1px solid var(--secondary-bg);
  cursor: pointer;
  transition: background-color 0.25s;
  outline: 0 !important;
  display: block;
  text-align: left;
  width: 100%;

  &.item-active {
    background-color: var(--secondary-bg);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const MenuItem = ({ minimal, children, active, disabled, ...otherProps }) => {
  return (
    <StyledItem  className={cn({ 'item-active': active })} disabled={disabled} {...otherProps}>
      {children}
    </StyledItem>
  )
}

MenuItem.Heading = styled.h3`
  font-weight: 600;
`;

MenuItem.Description = styled.div`
  color: var(--text-secondary);
`;

const Demo = () => {
  const [value, setValue] = useState('value-1');

  return (
    <Menu minimal>
      <MenuItem
        active={value === 'value-1'}
        onClick={() => setValue('value-1')}
      >
        <MenuItem.Heading>Option One</MenuItem.Heading>
        <MenuItem.Description>
          This is description of option One
        </MenuItem.Description>
      </MenuItem>
      <MenuItem
        active={value === 'value-2'}
        onClick={() => setValue('value-2')}
      >
        <MenuItem.Heading>Option Two</MenuItem.Heading>
        <MenuItem.Description>
          This is description of option Two with kinna long description for couple test case
        </MenuItem.Description>
      </MenuItem>
      <MenuItem
        disabled
        active={value === 'value-3'}
        onClick={() => setValue('value-3')}
      >
        <MenuItem.Heading>Option Three</MenuItem.Heading>
        <MenuItem.Description>
          This is description of option Three
        </MenuItem.Description>
      </MenuItem>
    </Menu>
  );
};

export default Demo;
