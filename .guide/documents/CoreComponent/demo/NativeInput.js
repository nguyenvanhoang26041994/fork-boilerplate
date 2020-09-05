import React from 'react';
import {
  Textbox,
  Password,
  Textarea,
  Select,
  Number,
  Flex,
} from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Flex col span="full">
      <Flex>
        <Flex span="1/2" style={{ padding: 5 }}>
          <Textbox placeholder="The placeholder" />
        </Flex>
        <Flex span="1/2" style={{ padding: 5 }}>
          <Password placeholder="The placeholder" />
        </Flex>
      </Flex>
      <Flex>
        <Flex span="1/2" style={{ padding: 5 }}>
          <Select>
            <Select.Option value="1">First option</Select.Option>
            <Select.Option value="2">Second option</Select.Option>
            <Select.Option value="3">Third option</Select.Option>
            <Select.Option value="3">Fourth option</Select.Option>
          </Select>
        </Flex>
        <Flex span="1/2" style={{ padding: 5 }}>
          <Number />
        </Flex>
      </Flex>
      <Flex style={{ padding: 5 }}>
        <Textarea placeholder="The placeholder" className="full" />
      </Flex>
    </Flex>
  );
};

export default Demo;
