export const Colors = {
  code: `import React from 'react';
import styled from 'styled-components';
import { Wrapper, ColumnWrapper } from '@style-guide/components';

const FancyBoxColored = styled.div\`
  border-radius: 3px;
  width: 80px;
  height: 80px;
  background-color: \${props => props.color};
\`;

export default () => {
  return (
    <ColumnWrapper>
      <Wrapper>
        <FancyBoxColored color="var(--dark-gray1)" />
        <FancyBoxColored color="var(--dark-gray2)" />
        <FancyBoxColored color="var(--dark-gray3)" />
        <FancyBoxColored color="var(--dark-gray4)" />
        <FancyBoxColored color="var(--dark-gray5)" />
        <FancyBoxColored color="var(--gray1)" />
        <FancyBoxColored color="var(--gray2)" />
        <FancyBoxColored color="var(--gray3)" />
        <FancyBoxColored color="var(--gray4)" />
        <FancyBoxColored color="var(--gray5)" />
        <FancyBoxColored color="var(--light-gray1)" />
        <FancyBoxColored color="var(--light-gray2)" />
        <FancyBoxColored color="var(--light-gray3)" />
        <FancyBoxColored color="var(--light-gray4)" />
        <FancyBoxColored color="var(--light-gray5)" />
      </Wrapper>
      <Wrapper>
        <FancyBoxColored color="var(--yellow1)" />
        <FancyBoxColored color="var(--yellow2)" />
        <FancyBoxColored color="var(--yellow3)" />
        <FancyBoxColored color="var(--yellow4)" />
        <FancyBoxColored color="var(--yellow5)" />
        <FancyBoxColored color="var(--yellow6)" />
        <FancyBoxColored color="var(--yellow7)" />
        <FancyBoxColored color="var(--yellow8)" />
        <FancyBoxColored color="var(--yellow9)" />
        <FancyBoxColored color="var(--yellow10)" />
      </Wrapper>
      <Wrapper>
        <FancyBoxColored color="var(--blue1)" />
        <FancyBoxColored color="var(--blue2)" />
        <FancyBoxColored color="var(--blue3)" />
        <FancyBoxColored color="var(--blue4)" />
        <FancyBoxColored color="var(--blue5)" />
        <FancyBoxColored color="var(--blue6)" />
        <FancyBoxColored color="var(--blue7)" />
        <FancyBoxColored color="var(--blue8)" />
        <FancyBoxColored color="var(--blue9)" />
        <FancyBoxColored color="var(--blue10)" />
      </Wrapper>
      <Wrapper>
        <FancyBoxColored color="var(--red1)" />
        <FancyBoxColored color="var(--red2)" />
        <FancyBoxColored color="var(--red3)" />
        <FancyBoxColored color="var(--red4)" />
        <FancyBoxColored color="var(--red5)" />
        <FancyBoxColored color="var(--red6)" />
        <FancyBoxColored color="var(--red7)" />
        <FancyBoxColored color="var(--red8)" />
        <FancyBoxColored color="var(--red9)" />
        <FancyBoxColored color="var(--red10)" />
      </Wrapper>
    </ColumnWrapper>
  );
};
`,
  demoName: 'Colors',
}

