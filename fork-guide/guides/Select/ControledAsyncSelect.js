import React, { useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Avatar, Badge } from '@fork-ui/core';
import { AsyncSelect } from '@fork-ui/suggestion';

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
const PagingAsyncSelect = ({ value, setValue, className }) => {
  const pagingRef = useRef({
    page: 1,
    pageSize: 20,
    isHasNext: true,
  });
  const getOption = useCallback(({ selectedValue }) => {
    return FakeAPI.getOption(selectedValue);
  }, []);

  const getOptions = useCallback(({ searchText }) => {
    pagingRef.current.page = 1;
    return FakeAPI.getOptions({
      searchText,
      page: pagingRef.current.page,
      pageSize: pagingRef.current.pageSize,
    }).then((options) => {
      if (options.length < pagingRef.current.pageSize) {
        pagingRef.current.isHasNext = false;
      } else {
        pagingRef.current.isHasNext = true;
      }
      return options;
    });
  }, []);

  const onBottomIntersecting = useCallback(({ searchText, setDisplayOptions }) => {
    if (!pagingRef.current.isHasNext) {
      return false;
    }
    pagingRef.current.page++;
    return FakeAPI.getOptions({
      searchText,
      pageSize: pagingRef.current.pageSize,
      page: pagingRef.current.page,
    }).then((options) => {
      setDisplayOptions((prev) => {
        return [
          ...prev,
          ...options
        ];
      });
      if (options.length < pagingRef.current.pageSize) {
        pagingRef.current.isHasNext = false;
      }
    });
  }, []);

  return (
    <AsyncSelect
      className={className}
      value={value}
      setValue={setValue}
      getOption={getOption}
      getOptions={getOptions}
      onBottomIntersecting={onBottomIntersecting}
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
      valueKey="id"
      nameKey="name"
    >
      {(props, option) => (
        <StyledOption {...props}>
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

export default () => {
  const [value, setValue] = useState('4');
  return (
    <div className="flex items-center">
      <PagingAsyncSelect value={value} setValue={setValue} className="mr-2" />
      <PagingAsyncSelect value={value} setValue={setValue} />
    </div>
  );
}
