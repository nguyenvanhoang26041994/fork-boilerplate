import React from 'react';
import { Select } from '@@/fork-ui/src/components/core';
import { Message, Copy, Tool, Heart, Star, Bell } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
    <Select
      multiple
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    >
      <Select.Option
        key="message"
        icon={<Message />}
        title="Message"
      />
      <Select.Group key="group-action" title="Action">
        <Select.Option key="copy" icon={<Copy />} title="Copy" />
        <Select.Option key="tool" icon={<Tool />} title="Config" />
        <Select.Option key="heart" icon={<Heart />} title="Love" />
      </Select.Group>
      <Select.Group key="group-other" title="Other">
        <Select.Option key="rating" icon={<Star />} title="Rating" />
        <Select.Option key="follow" icon={<Bell />} title="Follow" />
      </Select.Group>
    </Select>
  );
};

export default Demo;
