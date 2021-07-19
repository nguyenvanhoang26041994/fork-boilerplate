import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Button } from '@fork-ui/core';
import { Braces } from '@fork-ui/icons/lazy';

const DemoBoxWrapper = styled.div`
  width: 100%;
  background-color: var(--bg);
  border-left: 3px solid transparent;

  .show-when-codebox-hover {
    opacity: 0;
    transition: opacity 0.25s;
  }

  &:hover {
    .show-when-codebox-hover {
      opacity: 1;
    }
  }

  &.--is-active {
    border-color: var(--primary);

    .__name {
      color: var(--primary);
    }
  }
`;

const DemoBoxHeader = styled.h2`
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

const Demo = styled.div`
  padding: 18px;
  min-height: 200px;
`;

const DemoBox = ({ children, name, isActive, onViewCodeClick }) => {
  return (
    <DemoBoxWrapper className={cn({ '--is-active': isActive })}>
      <DemoBoxHeader>
        <span className="__name">{name}</span>
        <Button
          className="show-when-codebox-hover"
          rounded
          color="transparent"
          icon={<Braces />}
          onClick={onViewCodeClick}
        />
      </DemoBoxHeader>
      <Demo>
        {children}
      </Demo>
    </DemoBoxWrapper>
  );
};

export default DemoBox;
