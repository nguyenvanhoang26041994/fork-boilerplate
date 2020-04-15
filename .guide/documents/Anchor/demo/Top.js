import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';

const Link = ({ id, children }) => (
  <a className="px-5" id={id} style={{ height: '100px'}}>
    {children}
  </a>
);

const Demo = () => {
  return (
    <div
      className="flex w-full flex-col"
      style={{
        height: 1000,
      }}
    >
      <Anchor top={100}>
        <Anchor.Link key='#things-top' title="Things" />
        <Anchor.Link key='#stuff-top' title="Stuff" />
        <Anchor.Link key='#stuff2-top' title="Stuff 2" />
      </Anchor>

      <div className="flex flex-col flex-1 items-end">
        <Link id='22'>
          <h2>22</h2>
        </Link>
        <Link id='things-top'>
          <h2>Things</h2>
        </Link>
        <Link id='stuff-top'>
          <h2>Stuff</h2>
        </Link>
        <Link id='stuff2-top'>
          <h2>Stuff 2</h2>
        </Link>
      </div>
    </div>
  );
};

export default Demo;
