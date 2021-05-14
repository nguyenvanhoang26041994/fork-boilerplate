import React from 'react';
import { Select } from '@fork-ui/components/core';
import Message from '@fork-ui/components/icons/all/Message';
import Copy from '@fork-ui/components/icons/all/Copy';
import Tool from '@fork-ui/components/icons/all/Tool';
import Heart from '@fork-ui/components/icons/all/Heart';
import Star from '@fork-ui/components/icons/all/Star';
import Bell from '@fork-ui/components/icons/all/Bell';

const Demo = () => {
  return (
    <Select
      absolute
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
