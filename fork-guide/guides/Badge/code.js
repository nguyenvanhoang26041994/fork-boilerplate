export const Badge = {
  code: `import React from 'react';
import { Wrapper, FancyBox } from '@fork-guide/components';
import { Badge } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="2rem">
      <Badge.Dot overlap>
        <FancyBox size="50px" circle/>
      </Badge.Dot>
      <Badge.Dot>
        <FancyBox size="50px" />
      </Badge.Dot>
      <Badge.Counter count={7}>
        <FancyBox size="50px" />
      </Badge.Counter>
      <Badge.Label label="NEW">
        <FancyBox size="50px" />
      </Badge.Label>
    </Wrapper>
  );
};
`,
  demoName: 'Badge',
}

export const Color = {
  code: `import React from 'react';
import { Wrapper, FancyBox } from '@fork-guide/components';
import { Badge } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="25px">
      <Badge.Dot color="var(--green-5)">
        <FancyBox size="50px" />
      </Badge.Dot>
      <Badge.Counter count={7} color="var(--primary)">
        <FancyBox size="50px" />
      </Badge.Counter>
      <Badge.Label label="NEW" color="pink">
        <FancyBox size="50px" />
      </Badge.Label>
    </Wrapper>
  );
};
`,
  demoName: 'Color',
}

export const Custom = {
  code: `import React from 'react';
import { Wrapper, FancyBox } from '@fork-guide/components';
import { Badge, Button } from '@fork-ui/core';
import { Pencil } from '@fork-ui/icons/lazy';

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
`,
  demoName: 'Custom',
}

export const OverflowCount = {
  code: `import React from 'react';
import { Wrapper, FancyBox } from '@fork-guide/components';
import { Badge } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="2em">
      <Badge.Counter count={999} overflow={50}>
        <FancyBox size="50px" />
      </Badge.Counter>
      <Badge.Counter
        count={999}
        overflow={50}
        renderOverflow={overflow => \`More than \${overflow}\`}
      >
        <FancyBox size="50px" />
      </Badge.Counter>
    </Wrapper>
  );
};
`,
  demoName: 'Overflow Count',
}

export const Overlap = {
  code: `import React from 'react';
import { Wrapper, FancyBox } from '@fork-guide/components';
import { Badge } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="20px">
      <Badge.Dot overlap>
        <FancyBox circle size="50px" />
      </Badge.Dot>
      <Badge.Counter count={7} overlap>
        <FancyBox circle size="50px" />
      </Badge.Counter>
      <Badge.Label label="NEW" overlap>
        <FancyBox circle size="50px" />
      </Badge.Label>
    </Wrapper>
  );
};
`,
  demoName: 'Overlap',
}

export const Placement = {
  code: `import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { FancyBox } from '@fork-guide/components';
import { Badge, Flex, Switch, Button } from '@fork-ui/core';

const SwitchButton = styled.div\`
  display: flex;
  align-items: center;
  background-color: var(--btn-bg);
  border-radius: 999px;
  overflow: hidden;
  .fbtn {
    border-radius: 999px;
    background-color: var(--btn-bg);
    border-color: var(--btn-bg);
    &:hover {
      color: var(--primary);
      background-color: var(--btn-bg);
      border-color: var(--btn-bg);
    }
  }
  .f-selected,
  .f-selected:hover,
  .f-selected:focus {
    color: #fff;
    font-weight: 600;
    background-color: var(--primary);
    border-color: var(--primary);
  }
\`;

const FlexStyled = styled(Flex)\`
  &.fancy-box-circle {
    .fancy-box {
      border-radius: 999px !important;
    }
  }
\`;

export default () => {
  const [{ checked, toggle }] = Switch.useSwitch(false);

  return (
    <FlexStyled w="full" col items="center" className={cn({ 'fancy-box-circle': checked })}>
      <Flex col w="full" items="center">
        <Flex>
          <FancyBox hidden className="m-5" />
          <Badge.Counter
            count={7}
            placement="top-start"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>TS</FancyBox>
          </Badge.Counter>
          <Badge.Counter
            count={7}
            placement="top"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>T</FancyBox>
          </Badge.Counter>
          <Badge.Counter
            count={7}
            placement="top-end"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>TE</FancyBox>
          </Badge.Counter>
          <FancyBox hidden className="m-5" />
        </Flex>

        <Flex>
          <Badge.Counter
            count={7}
            placement="left-start"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>LS</FancyBox>
          </Badge.Counter>
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <Badge.Counter
            count={7}
            placement="right-start"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>RS</FancyBox>
          </Badge.Counter>
        </Flex>

        <Flex>
          <Badge.Counter
            count={7}
            placement="left"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>L</FancyBox>
          </Badge.Counter>
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <Badge.Counter
            count={7}
            placement="right"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>R</FancyBox>
          </Badge.Counter>
        </Flex>

        <Flex>
          <Badge.Counter
            count={7}
            placement="left-end"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>LE</FancyBox>
          </Badge.Counter>
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <FancyBox hidden className="m-5" />
          <Badge.Counter
            count={7}
            placement="right-end"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>RE</FancyBox>
          </Badge.Counter>
        </Flex>

        <Flex>
          <FancyBox hidden className="m-5" />
          <Badge.Counter
            count={7}
            placement="bottom-start"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>BS</FancyBox>
          </Badge.Counter>
          <Badge.Counter
            count={7}
            placement="bottom"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>B</FancyBox>
          </Badge.Counter>
          <Badge.Counter
            count={7}
            placement="bottom-end"
            className="m-5"
            overlap={checked}
          >
            <FancyBox>BE</FancyBox>
          </Badge.Counter>
          <FancyBox hidden className="m-5" />
        </Flex>
      </Flex>
      <Flex justify="center" className="mt-20">
        <SwitchButton onClick={toggle}>
          <Button className={{ 'f-selected': checked }}>
            OVERLAP
          </Button>
          <Button className={{ 'f-selected': !checked }}>
            NORMAL
          </Button>
        </SwitchButton>
      </Flex>
    </FlexStyled>
  );
};
`,
  demoName: 'Placement',
}

