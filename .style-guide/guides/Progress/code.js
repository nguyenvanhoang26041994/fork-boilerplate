export const Linear = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Progress } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Progress.Linear percent={40} />
    </Wrapper>
  );
};
`,
  demoName: 'Linear',
}

export const Progress = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Progress } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Progress.Circle percent={65}>
        <span>65%</span>
      </Progress.Circle>
    </Wrapper>
  );
};
`,
  demoName: 'Progress',
}

export const SimulateProgress = {
  code: `import React, { useState, useCallback } from 'react';
import { Progress, Flex, Button, ButtonGroup } from '@fork-ui/core';

export default () => {
  const [status, setStatus] = useState();
  const [percent, setPercent] = Progress.useSimulateProgress({
    status: status,
  });

  const onStartLoading = useCallback(() => {
    setStatus('loading');
    setPercent(0);

    setTimeout(() => {
      setStatus('completed');
    }, 2000);
  }, [setStatus, setPercent]);

  const onResetSimulate = useCallback(() => {
    setStatus('completed');
    setPercent(0);
  }, [setStatus, setPercent]);

  return (
    <Flex col w="full">
      <Flex col w="full">
        <Progress.Circle percent={percent} className="mb-5">
          {Math.floor(percent)}
          <span>%</span>
        </Progress.Circle>
        <Progress.Linear percent={percent} animated={status === 'loading'} />
      </Flex>
      <ButtonGroup className="mt-10">
        <Button onClick={onStartLoading} disabled={status === 'loading'}>Start Loading</Button>
        <Button onClick={onResetSimulate} disabled={status === 'loading'}>Reset</Button>
      </ButtonGroup>
    </Flex>
  );
};
`,
  demoName: 'Simulate Progress',
}

export const Size = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Progress } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Progress.Circle
        percent={86}
        size={50}
      />
      <Progress.Circle percent={77} />
      <Progress.Circle
        percent={89}
        size={250}
      />
    </Wrapper>
  );
};
`,
  demoName: 'Size',
}


export const Color = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Progress } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Progress />
    </Wrapper>
  );
};
`,
  demoName: 'Color',
}
