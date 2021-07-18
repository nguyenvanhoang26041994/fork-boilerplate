import React, { useRef, useCallback } from 'react';
import { AsyncSelect } from '@fork-ui/select';

const FakeAPI = {
  getOption: (id) => {
    return window.fetch(`https://60f431423cb0870017a8a15f.mockapi.io/api/users/${id}`)
      .then(response => response.json());
  },
  getOptions: ({ page = 1, pageSize = 10, searchText = '' }) => {
    return window.fetch('https://60f431423cb0870017a8a15f.mockapi.io/api/users')
      .then(response => response.json());
  },
};

export default () => {
  const ref = useRef();
  const onChanged = () => {
    console.log(ref.current, ref.current.value);
  };

  const getSelectedOption = useCallback(({ selectedValue, getSelectedOptionRequest, getSelectedOptionSuccess, getSelectedOptionFailure }) => {
    getSelectedOptionRequest();
    FakeAPI.getOption(selectedValue).then((option) => {
      console.log(option);
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
