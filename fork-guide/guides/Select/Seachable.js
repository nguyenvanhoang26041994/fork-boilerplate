import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Avatar, Badge } from 'fork-design';
import { Select } from 'fork-design';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';
const options = [
  {
    id: 'hoang-nguyen',
    name: 'Hoang Nguyen',
    jobTitle: 'Frontend Developer',
    color: 'var(--primary)',
    avatar: avatarLink,
  },
  {
    id: 'son-le',
    name: 'Son Le',
    jobTitle: 'Fullstack Developer',
    color: 'var(--red-6)',
    avatar: avatarLink2,
  },
  {
    id: 'son-nguyen',
    name: 'Son Nguyen',
    jobTitle: 'Mobile Developer',
    color: 'var(--green-6)',
    avatar: avatarLink3,
  },
  {
    id: 'alex-jonhson',
    name: 'Alex Jonhson',
    jobTitle: 'UI/UX Designer',
    color: 'var(--green-6)',
    avatar: avatarLink,
  },
];

const StyledOption = styled(Select.Option)`
  padding-top: 8px;
  padding-bottom: 8px;
`;
export default () => {
  return (
    <Wrapper span="10px">
      <div className="w-1/2">
        <Select
          renderSearchbox
          defaultValue="son-nguyen"
        >
          {options.map((option) => (
            <Select.Option
              key={option.id}
              value={option.id}
            >
              {option.name}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className="w-1/2">
        <Select
          defaultValue="son-nguyen"
          render={(props, selectedOption) => (
            <Select.Single {...props}>
              <Badge.Dot overlap placement="bottom-end" color={selectedOption.data.color}>
                <Avatar size={24} src={selectedOption.data.avatar} />
              </Badge.Dot>
              <div className="flex flex-col items-start ml-3">
                <b>{selectedOption.data.name} - {selectedOption.data.jobTitle}</b>
              </div>
            </Select.Single>
          )}
          renderSearchbox={(props) => (
            <Select.Searchbox
              {...props}
              placeholder="Type to search..."
            />
          )}
          filter={(props, { searchRegex }) => {
            return searchRegex.test(props.data.name) || searchRegex.test(props.data.jobTitle);
          }}
        >
          {options.map((option) => (
            <StyledOption
              key={option.id}
              value={option.id}
              data={option}
            >
              <Badge.Dot overlap placement="bottom-end" color={option.color}>
                <Avatar src={option.avatar} />
              </Badge.Dot>
              <div className="flex flex-col items-start ml-3">
                <b>{option.name}</b>
                <small>{option.jobTitle}</small>
              </div>
            </StyledOption>
          ))}
        </Select>
      </div>
    </Wrapper>
  );
};
