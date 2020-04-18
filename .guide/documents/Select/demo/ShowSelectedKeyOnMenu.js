import React from 'react';
import { Select } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Select
      hiddenSelected={false}
      multiple
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    >
      <Select.Option
        key="message"
        icon="message"
        title="Message"
      />
      <Select.Group key="group-action" title="Action">
        <Select.Option key="copy" icon="copy" title="Copy" />
        <Select.Option key="tool" icon="tool" title="Config" />
        <Select.Option key="heart" icon="heart" title="Love" />
      </Select.Group>
      <Select.Group key="group-other" title="Other">
        <Select.Option key="rating" icon="star" title="Rating" />
        <Select.Option key="follow" icon="bell" title="Follow" />
      </Select.Group>
    </Select>
  );
};

export default Demo;
