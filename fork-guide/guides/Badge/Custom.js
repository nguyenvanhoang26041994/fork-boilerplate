import React from 'react';
import { Wrapper, FancyBox } from '@fork-guide/components';
import { Badge, Button } from 'fork-design';
import { Pencil } from 'fork-design/icons/lazy';

const PureBadge = Badge.PureBadge;

export default () => {
  return (
    <Wrapper span="2rem">
      <PureBadge
        overlap
        placement="bottom-end"
        badge={(
          <span className="fbadge-ui fbadge-ui-rounded">
            <Button color="primary" rounded icon={<Pencil />} />
          </span>
        )}
      >
        <FancyBox size="120px" circle />
      </PureBadge>
    </Wrapper>
  );
};
