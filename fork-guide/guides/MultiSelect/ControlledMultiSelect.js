import React, { useState, useEffect } from 'react';
import { MultiSelect } from '@fork-ui/select';

const FakeAPI = {
  getOptions: ({ page = 1, pageSize = 20, searchText = '' }) => {
    return window.fetch(`https://60f431423cb0870017a8a15f.mockapi.io/api/users?page=${page}&limit=${pageSize}&name=${searchText}`)
      .then(response => response.json());
  },
};

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
      <div className="flex flex-col">
        <MultiSelect value={value} setValue={setValue} className="mb-2">
          {options.map((option) => (
            <MultiSelect.Option key={option.id} value={option.id} data={option}>
              {option.name}
            </MultiSelect.Option>
          ))}
        </MultiSelect>
        <MultiSelect value={value} setValue={setValue} className="mb-2">
          {options.map((option) => (
            <MultiSelect.Option key={option.id} value={option.id} data={option}>
              {option.name}
            </MultiSelect.Option>
          ))}
        </MultiSelect>
      </div>
    );
  }
  return null;
};
