import React from 'react';
import { Pagination } from '@@/fork-ui/src/components/core';

const Demo = () => {
  const [props] = Pagination.usePagination(1);

  return (
    <Pagination
      {...props}
      total={300}
      pageSize={10}
      max={7}
    />
  );
};

export default Demo;
