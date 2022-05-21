export const Color = {
  code: `import React, { useMemo } from 'react';
import { Wrapper } from '@fork-guide/components';
import useUniqueId from 'fork-design/hooks/useUniqueId';
import { Progress } from 'fork-design';

export default () => {
  const linearGradientId = useUniqueId();

  const _linearGradient = useMemo(() => (
    <linearGradient
      id={linearGradientId}
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" stopColor="rgba(243, 8, 231, 1)" />
      <stop offset="100%" stopColor="rgba(24, 119, 242, 1)" />
    </linearGradient>
  ), [linearGradientId]);

  return (
    <Wrapper>
      <Progress.Circle
        percent={75}
        linearGradient={_linearGradient}
        color={\`url(#\${linearGradientId})\`}
      />
      <Progress.Circle percent={68} color="var(--green-5)" />
    </Wrapper>
  );
};
`,
  demoName: 'Color',
}

export const Linear = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Progress } from 'fork-design';

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
import { Wrapper } from '@fork-guide/components';
import { Progress } from 'fork-design';

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
import { Progress, Flex, Button, ButtonGroup } from 'fork-design';

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
import { Wrapper } from '@fork-guide/components';
import { Progress } from 'fork-design';

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

