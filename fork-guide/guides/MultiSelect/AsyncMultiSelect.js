import React, { useState, useEffect, useCallback } from 'react';
import { AsyncMultiSelect } from '@fork-ui/select';

const FakeAPI = {
  getOptionsByIds: (ids) => {
    return Promise.all(ids.map(id => {
      return window.fetch(`https://60f431423cb0870017a8a15f.mockapi.io/api/users/${id}`)
        .then(response => response.json());
    }));
  },
  getOptions: ({ page = 1, pageSize = 20, searchText = '' }) => {
    return window.fetch(`https://60f431423cb0870017a8a15f.mockapi.io/api/users?page=${page}&limit=${pageSize}&name=${searchText}`)
      .then(response => response.json());
  },
};

export default () => {
  const [value] = useState(['1', '5', '12', '34']);

  const getOptionsByValue = useCallback(({ selectedValue }) => {
    return FakeAPI.getOptionsByIds(selectedValue);
  }, []);

  const getOptions = useCallback(({ searchText }) => {
    return FakeAPI.getOptions({ searchText });
  }, []);

  return (
    <AsyncMultiSelect
      defaultValue={value}
      renderSearchbox
      getOptionsByValue={getOptionsByValue}
      getOptions={getOptions}
      valueKey="id"
      nameKey="name"
    />
  );
};
