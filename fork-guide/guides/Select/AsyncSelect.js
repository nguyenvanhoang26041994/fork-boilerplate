import React, { useCallback } from 'react';
import { AsyncSelect } from '@fork-ui/suggestion';

const FakeAPI = {
  getOption: (id) => {
    return window.fetch(`https://60f431423cb0870017a8a15f.mockapi.io/api/users/${id}`)
      .then(response => response.json());
  },
  getOptions: ({ page = 1, pageSize = 50, searchText = '' }) => {
    return window.fetch(`https://60f431423cb0870017a8a15f.mockapi.io/api/users?page=${page}&limit=${pageSize}&name=${searchText}`)
      .then(response => response.json());
  },
};

export default () => {
  const getOption = useCallback(({ selectedValue }) => {
    return FakeAPI.getOption(selectedValue);
  }, []);

  const getOptions = useCallback(({ searchText }) => {
    return FakeAPI.getOptions({ searchText });
  }, []);

  return (
    <AsyncSelect
      defaultValue="10"
      renderSearchbox
      getOption={getOption}
      getOptions={getOptions}
      valueKey="id"
      nameKey="name"
    />
  );
};
