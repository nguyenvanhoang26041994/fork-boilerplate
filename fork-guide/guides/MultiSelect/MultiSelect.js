import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Avatar, Badge } from '@fork-ui/core';
import { MultiSelect, AsyncMultiSelect } from '@fork-ui/suggestion';

const FakeAPI = {
  getOption: (id) => {
    return window.fetch(`https://60f431423cb0870017a8a15f.mockapi.io/api/users/${id}`)
      .then(response => response.json());
  },
  getOptionsByIds: (ids) => {
    return Promise.all(ids.map(id => FakeAPI.getOption(id)));
  },
  getOptions: ({ page = 1, pageSize = 20, searchText = '' }) => {
    return window.fetch(`https://60f431423cb0870017a8a15f.mockapi.io/api/users?page=${page}&limit=${pageSize}&name=${searchText}`)
      .then(response => response.json());
  },
};

const StyledOption = styled(AsyncMultiSelect.Option)`
  padding-top: 8px;
  padding-bottom: 8px;
`;

const PagingAsyncMultiSelect = () => {
  const pagingRef = useRef({
    page: 1,
    pageSize: 20,
    isHasNext: true,
  });
  const [value] = useState(['1', '5', '12', '34']);

  const getOptionsByValue = useCallback(({ selectedValue }) => {
    return FakeAPI.getOptionsByIds(selectedValue);
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
    <AsyncMultiSelect
      defaultValue={value}
      renderSearchbox={(props) => (
        <AsyncMultiSelect.Searchbox
          {...props}
          placeholder="Type user name to search..."
        />
      )}
      getOptionsByValue={getOptionsByValue}
      getOptions={getOptions}
      onBottomIntersecting={onBottomIntersecting}
      render={(props, selectedOptions, { valueKey, nameKey }) => (
        <AsyncMultiSelect.Multiple {...props}>
          {selectedOptions.map((option) => (
            <AsyncMultiSelect.Chip closable key={option[valueKey]} value={option[valueKey]}>
              <Badge.Dot overlap placement="bottom-end" color="var(--green-6)">
                <Avatar size={24} src={option.avatar} />
              </Badge.Dot>
              <span className="ml-2">
                {option.name}
              </span>
            </AsyncMultiSelect.Chip>
          ))}
        </AsyncMultiSelect.Multiple>
      )}
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
    </AsyncMultiSelect>
  );
};

export default () => {
  const [loader, setLoader] = useState({
    isLoading: false,
    isSuccess: false,
    isFailure: false,
  });
  const [value] = useState(['4', '5', '6']);
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
      <div className="flex flex-col">
        <MultiSelect defaultValue={value} className="mb-2">
          {options.map((option) => (
            <MultiSelect.Option key={option.id} value={option.id} data={option}>
              {option.name}
            </MultiSelect.Option>
          ))}
        </MultiSelect>
        <PagingAsyncMultiSelect />
      </div>
    );
  }
  return null;
};
