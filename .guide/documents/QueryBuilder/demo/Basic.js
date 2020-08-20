import React from 'react';
import { QueryBuilder } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <div
      className="flex w-full flex-col"
      style={{
        height: 2000,
      }}
    >
      <QueryBuilder>
      </QueryBuilder>
    </div>
  );
};

export default Demo;
