import React, { useMemo } from 'react';
import {
  Divider,
  MultiSelect,
  useMultiSelect,
} from '@fork-ui/components/core';

const { Option } = MultiSelect;
const { OptionHeader, OptionBody } = Option;

const users = [
  {
    id: 'hoang-nguyen',
    name: 'Hoang Nguyen',
    jobTitle: 'Frontend Developer',
  },
  {
    id: 'son-le',
    name: 'Son Le',
    jobTitle: 'UI/UX Developer',
  },
  {
    id: 'minh-nguyen',
    name: 'Minh Nguyen',
    jobTitle: 'Product Owner',
  },
  {
    id: 'thuan-le',
    name: 'Thuan Le',
    jobTitle: 'Backend Developer',
  },
  {
    id: 'alexander-joseph',
    name: 'Alexander Joseph',
    jobTitle: 'Database Developer',
  },
  {
    id: 'jacob-lubutu',
    name: 'Jacob Lubutu',
    jobTitle: 'Professional Hacker',
  },
  {
    id: 'luong-cong-thinh',
    name: 'Luong Cong Thinh',
    jobTitle: 'Professional Hacker',
  },
  {
    id: 'nguyen-thi-thu-ngan',
    name: 'Nguyen Thi Thu Ngan',
    jobTitle: 'HR Manager',
  },
  {
    id: 'jack-lobor',
    name: 'Jack Lobor',
    jobTitle: 'Co-worker',
  },
];
const Demo = () => {
  const [{
    selectedOptions,
    onToggleSelect,
    onDeselect,
  }] = useMultiSelect();

  return (
    <MultiSelect selectedOptions={selectedOptions} onChipClose={onDeselect}>
      {users.map((user) => {
        return (
          <Option
            uid={user.id}
            value={user.name}
            data={user}
            onSelected={onToggleSelect}
          >
            <OptionHeader>{user.name}</OptionHeader>
            <OptionBody>{user.jobTitle}</OptionBody>
          </Option>
        );
      })}
    </MultiSelect>
  );
};

export default Demo;
