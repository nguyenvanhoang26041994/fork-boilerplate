import React from 'react';
import { Flex } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Flex col span="full">
      <Flex span="full" style={{ height: '130px', backgroundColor: 'var(--primary--100)', marginBottom: '1px' }} />
      <Flex style={{ marginBottom: '1px' }}>
        <Flex span="1/2" style={{ height: '120px', backgroundColor: 'var(--primary--200)' }} />
        <Flex span="1/2" style={{ height: '120px', backgroundColor: 'var(--primary--300)' }} />
      </Flex>
      <Flex style={{ marginBottom: '1px' }}>
        <Flex span="2/3" style={{ height: '120px', backgroundColor: 'var(--primary--200)' }} />
        <Flex span="1/3" style={{ height: '120px', backgroundColor: 'var(--primary--300)' }} />
      </Flex>
      <Flex style={{ marginBottom: '1px' }}>
        <Flex span="1/3" style={{ height: '130px', backgroundColor: 'var(--primary--200)' }} />
        <Flex span="1/3" style={{ height: '130px', backgroundColor: 'var(--primary--300)' }} />
        <Flex span="1/3" style={{ height: '130px', backgroundColor: 'var(--primary--400)' }} />
      </Flex>
      <Flex style={{ marginBottom: '1px' }}>
        <Flex span="3/12" style={{ height: '130px', backgroundColor: 'var(--primary--200)' }} />
        <Flex span="6/12" style={{ height: '130px', backgroundColor: 'var(--primary--300)' }} />
        <Flex span="3/12" style={{ height: '130px', backgroundColor: 'var(--primary--400)' }} />
      </Flex>
      <Flex style={{ marginBottom: '1px' }}>
        <Flex span="1/4" style={{ height: '130px', backgroundColor: 'var(--primary--200)' }} />
        <Flex span="1/4" style={{ height: '130px', backgroundColor: 'var(--primary--300)' }} />
        <Flex span="1/4" style={{ height: '130px', backgroundColor: 'var(--primary--400)' }} />
        <Flex span="1/4" style={{ height: '130px', backgroundColor: 'var(--primary--500)' }} />
      </Flex>
      <Flex style={{ marginBottom: '1px' }}>
        <Flex span="1/5" style={{ height: '130px', backgroundColor: 'var(--primary--200)' }} />
        <Flex span="1/5" style={{ height: '130px', backgroundColor: 'var(--primary--300)' }} />
        <Flex span="1/5" style={{ height: '130px', backgroundColor: 'var(--primary--400)' }} />
        <Flex span="1/5" style={{ height: '130px', backgroundColor: 'var(--primary--500)' }} />
        <Flex span="1/5" style={{ height: '130px', backgroundColor: 'var(--primary--600)' }} />
      </Flex>
      <Flex style={{ marginBottom: '1px' }}>
        <Flex span="1/6" style={{ height: '130px', backgroundColor: 'var(--primary--200)' }} />
        <Flex span="1/6" style={{ height: '130px', backgroundColor: 'var(--primary--300)' }} />
        <Flex span="1/6" style={{ height: '130px', backgroundColor: 'var(--primary--400)' }} />
        <Flex span="1/6" style={{ height: '130px', backgroundColor: 'var(--primary--500)' }} />
        <Flex span="1/6" style={{ height: '130px', backgroundColor: 'var(--primary--600)' }} />
        <Flex span="1/6" style={{ height: '130px', backgroundColor: 'var(--primary--700)' }} />
      </Flex>
    </Flex>
  );
};

export default Demo;
