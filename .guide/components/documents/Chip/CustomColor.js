import React  from 'react';
import styled from 'styled-components';
import Wrapper from '../../shared/Wrapper';
import { avatarLink } from '../../shared/staff';
import { Chip, Avatar } from '@fork-ui/components/core';

const PrimaryChip = styled(Chip)`
  color: var(--primary);
`;

const RevertPrimaryChip = styled(Chip)`
  background-color: var(--primary);

  &:hover {
    background-color: var(--primary--7);
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <PrimaryChip rounded>
        Stackoverflow
      </PrimaryChip>
      <PrimaryChip closable rounded>
        Slack
      </PrimaryChip>
      <RevertPrimaryChip rounded>
        VS Code
      </RevertPrimaryChip>
      <RevertPrimaryChip
        rounded
        closable
        avatar={<Avatar src={avatarLink}>VS</Avatar>}
      >
        VS Code
      </RevertPrimaryChip>
    </Wrapper>
  );
};

export default Demo;
