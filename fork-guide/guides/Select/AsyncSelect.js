import React, { useRef, useCallback } from 'react';
import { AsyncSelect } from '@fork-ui/select';

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
  const ref = useRef();
  const onChanged = (selectedOption) => {
    console.log('AsyncSelect.onChanged', selectedOption, ref.current);
  };

  const getSelectedOption = useCallback(({ selectedValue }) => {
    return FakeAPI.getOption(selectedValue);
  }, []);

  const getOptions = useCallback(({ searchText }) => {
    return FakeAPI.getOptions({ searchText });
  }, []);

  return (
    <AsyncSelect
      defaultValue="10"
      ref={ref}
      onChanged={onChanged}
      renderSearchbox
      getSelectedOption={getSelectedOption}
      getOptions={getOptions}
    >
      {(option) => (
        <AsyncSelect.Option key={option.id} value={option.id} data={option}>
          {option.name}
        </AsyncSelect.Option>
      )}
    </AsyncSelect>
  );
};
