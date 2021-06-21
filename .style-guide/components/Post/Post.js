import React from 'react';
import styled from 'styled-components';
import { Avatar, Badge, Skeleton } from '@fork-ui/core';
import { Dots } from '@fork-ui/icons/lazy';

const Wrapper = styled.div`
  margin-top: 8px;
  max-width: 700px;
  background-color: var(--bg);
  padding: 14px;
  border-radius: 8px;
  position: relative;
`;
const Header = styled.div`
  display: flex;
`;
const Text = styled.div``;
const Demo = styled.div``;
const Footer = styled.div``;
const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 14px;
  cursor: pointer;
`;

const Post = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <Menu>
        <Dots />
      </Menu>
      <div className="flex">
        <Badge.Dot placement="bottom-end" overlap color="var(--green-6)">
          <Avatar src="https://avatars.githubusercontent.com/u/20764362?v=4">HN</Avatar>
        </Badge.Dot>
        <div className="pl-4 flex flex-col justify-center">
          <span className="font-bold">Hoang Nguyen</span>
          <span style={{ color: 'var(--color-disabled)' }}>Frontend Developer</span>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <p>We collected some button UI here!</p>
      </div>
      <div style={{ minHeight: 200 }} className="flex items-center">
        {children}
      </div>
    </Wrapper>
  );
};

Post.Header = Header;
Post.Text = Text;
Post.Demo = Demo;
Post.Footer = Footer;

export default Post;
