import React from 'react';
import { Popconfirm, Button, Typo } from '@fork-ui/components/core';
import { QuestionMark } from '@fork-ui/components/icons';

const Demo = () => {
  return (
    <div className="flex">
      <Popconfirm 
        content={(
          <div class="flex items-center">
            <QuestionMark size="10em" stroke="2" color="var(--primary)" />
            <div>
              <Typo h2>Hey handsome!</Typo>
              <Typo>Keep in mind, Confirm is Modal, as alway should be.</Typo>
              <Typo>Are you sure you want to continue this decision?.</Typo>
            </div>
          </div>
        )}
      >
        <Button>Click Me</Button>
      </Popconfirm>
    </div>
  );
};

export default Demo;
