import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar, Badge, MultiSelect } from 'fork-design';

const FakeAPI = {
  getOption: (id) => {
    return window.fetch(`https://60f431423cb0870017a8a15f.mockapi.io/api/users/${id}`)
      .then(response => response.json());
  },
  getOptions: ({ page = 1, pageSize = 20, searchText = '' }) => {
    return window.fetch(`https://60f431423cb0870017a8a15f.mockapi.io/api/users?page=${page}&limit=${pageSize}&name=${searchText}`)
      .then(response => response.json());
  },
};

const StyledOption = styled(MultiSelect.Option)`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export default () => {
  const [loader, setLoader] = useState({
    isLoading: false,
    isSuccess: false,
    isFailure: false,
  });
  const [value, setValue] = useState(['4', '5', '6']);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setLoader({
      isLoading: true,
      isSuccess: false,
      isFailure: false,
    });
    FakeAPI.getOptions({}).then(_options => {
      setOptions(_options);
      setLoader({
        isLoading: false,
        isSuccess: true,
        isFailure: false,
      });
    })
  }, []);

  if (loader.isSuccess) {
    return (
      <MultiSelect
        defaultValue={value}
        filter={(props, { searchRegex }) => {
          return searchRegex.test(props.data.name);
        }}
        renderSearchbox={(props) => (
          <MultiSelect.Searchbox
            {...props}
            placeholder="Type user name to search..."
          />
        )}
        render={(props, selectedOptions) => (
          <MultiSelect.Multiple {...props}>
            {selectedOptions.map((optionProps) => (
              <MultiSelect.Chip closable key={optionProps.value} value={optionProps.value}>
                <Badge.Dot overlap placement="bottom-end" color="var(--green-6)">
                  <Avatar size={24} src={optionProps.data.avatar} />
                </Badge.Dot>
                <span className="ml-2">
                  {optionProps.data.name}
                </span>
              </MultiSelect.Chip>
            ))}
          </MultiSelect.Multiple>
        )}
      >
        {options.map((option) => (
          <StyledOption
            key={option.id}
            value={option.id}
            data={option}
          >
            <Badge.Dot overlap placement="bottom-end" color="var(--green-6)">
              <Avatar src={option.avatar} />
            </Badge.Dot>
            <div className="flex flex-col items-start ml-3">
              <b>{option.name}</b>
              <small>ID: {option.id}</small>
            </div>
          </StyledOption>
        ))}
      </MultiSelect>
    );
  }
  return null;
};
