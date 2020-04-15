import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';

const Link = ({ id, children }) => (
  <a className="px-5" id={id} style={{ height: '200px'}}>
    {children}
  </a>
);

const Demo = () => {
  return (
    <div
      className="flex w-full flex-col"
      style={{
        height: 2000,
      }}
    >
      <Anchor>
        <Anchor.Link key='#things' title="Things" />
        <Anchor.Link key='#stuff' title="Stuff" />
        <Anchor.Link key='#stuff2' title="Stuff 2" />
      </Anchor>

      <div className="flex flex-col flex-1 items-end">
        <Link id='22'>
          <h2>22</h2>
        </Link>
        <Link id='things'>
          <h2>Things</h2>
        </Link>
        <Link id='stuff'>
          <h2>Stuff</h2>
        </Link>
        <Link id='stuff2'>
          <h2>Stuff 2</h2>
        </Link>
      </div>
    </div>
  );
};

export default Demo;
