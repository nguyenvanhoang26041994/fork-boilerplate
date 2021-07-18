import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Avatar, Badge } from '@fork-ui/core';
import { AsyncSelect } from '@fork-ui/select';

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
const StyledOption = styled(AsyncSelect.Option)`
  padding-top: 8px;
  padding-bottom: 8px;
`;
export default () => {
  const pagingRef = useRef({
    page: 1,
    pageSize: 10,
    isHasNext: true,
  });
  const getSelectedOption = useCallback(({ selectedValue, getSelectedOptionRequest, getSelectedOptionSuccess, getSelectedOptionFailure }) => {
    getSelectedOptionRequest();
    FakeAPI.getOption(selectedValue).then((option) => {
      getSelectedOptionSuccess(option);
    }).catch(() => {
      getSelectedOptionFailure();
    });
  }, []);

  const getOptions = useCallback(({ searchText, getOptionsRequest, getOptionsSuccess, getOptionsFailure }) => {
    getOptionsRequest();
    FakeAPI.getOptions({ searchText }).then((options) => {
      getOptionsSuccess(options);
    }).catch(() => {
      getOptionsFailure();
    });
  }, []);

  return (
    <AsyncSelect
      defaultValue="4"
      getSelectedOption={getSelectedOption}
      getOptions={getOptions}
      renderSearchbox={(props) => (
        <AsyncSelect.Searchbox
          {...props}
          placeholder="Type user name to search..."
        />
      )}
      render={(props, selectedOption) => {
        return (
          <AsyncSelect.Single {...props}>
            {selectedOption && (
              <React.Fragment>
                <Badge.Dot overlap placement="bottom-end" color="var(--green-6)">
                  <Avatar size={24} src={selectedOption.avatar} />
                </Badge.Dot>
                <div className="flex flex-col items-start ml-3">
                  <b>{selectedOption.name} (ID: {selectedOption.id})</b>
                </div>
              </React.Fragment>
            )}
          </AsyncSelect.Single>
        );
      }}
    >
      {(option) => (
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
      )}
    </AsyncSelect>
  );
};
