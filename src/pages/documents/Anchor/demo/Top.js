import React from 'react';
import { Anchor } from '@/components';

const Link = ({ id, children }) => (
  <a className="px-5" id={id} style={{ height: '150px'}}>
    {children}
  </a>
);

const Demo = () => {
  return (
    <div className="flex w-full">
      <Anchor hasAffix offset={100}>
        <Anchor.Link href='#things' title="Things" />
        <Anchor.Link href='#stuff' title="Stuff" />
      </Anchor>

      <div className="flex flex-col flex-1 items-end">
        <Link id="_1">#_1</Link>
        <Link id="_2">#_2</Link>
        <section id='things'>
          <h2>Things</h2>
        </section>
        <Link id="_4">#_4</Link>
        <Link id="_5">#_5</Link>
        <section id='stuff'>
          <h2>Stuff</h2>
        </section>
        <Link id="_6">#_6</Link>
      </div>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Anchor } from '@/components';

const Link = ({ id, children }) => (
  <a className="px-5" id={id} style={{ height: '150px'}}>
    {children}
  </a>
);

const AnchorDemo = () => {
  return (
    <div className="flex w-full">
      <Anchor hasAffix offset={100}>
        <Anchor.Link href='#things' title="Things" />
        <Anchor.Link href='#stuff' title="Stuff" />
      </Anchor>

      <div className="flex flex-col flex-1 items-end">
        <Link id="_1">#_1</Link>
        <Link id="_2">#_2</Link>
        <section id='things'>
          <h2>Things</h2>
        </section>
        <Link id="_4">#_4</Link>
        <Link id="_5">#_5</Link>
        <section id='stuff'>
          <h2>Stuff</h2>
        </section>
        <Link id="_6">#_6</Link>
      </div>
    </div>
  );
`;

export default Demo;
