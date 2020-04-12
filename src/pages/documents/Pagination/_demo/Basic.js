import React, { useState, useCallback } from 'react';
import { Pagination } from '@/components';

const Demo = () => {
  const [activePage, setActivePage] = useState(1);
  const onChange = useCallback((page) => setActivePage(page), []);

  return (
    <Pagination
      activePage={activePage}
      total={300}
      pageSize={10}
      onChange={onChange}
    />
  );
};

export default Demo;

Demo.header = 'BASIC';
Demo.href = 'pagination-basic';
Demo.code = `import React, { useState, useCallback } from 'react';
import { Pagination } from '@/components';

const Demo = () => {
  const [activePage, setActivePage] = useState(1);
  const onChange = useCallback((page) => setActivePage(page), []);

  return (
    <Pagination
      activePage={activePage}
      total={300}
      pageSize={10}
      onChange={onChange}
    />
  );
};

export default Demo;
`;
