export const MultiSelect = {
  code: `import React, { useState, useEffect } from 'react';
import { Wrapper } from '@fork-guide/components';
import { MultiSelect } from '@fork-ui/select';
const FakeAPI = {
  getOption: (id) => {
    return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users/\${id}\`)
      .then(response => response.json());
  },
  getOptions: ({ page = 1, pageSize = 50, searchText = '' }) => {
    return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users?page=\${page}&limit=\${pageSize}&name=\${searchText}\`)
      .then(response => response.json());
  },
};

export default () => {
  const [loader, setLoader] = useState({
    isLoading: false,
    isSuccess: false,
    isFailure: false,
  });
  const [value, setValue] = useState([]);
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
      <div className="flex items-center">
        <div className="w-full">
          <MultiSelect defaultValue={value}>
            {options.map((option) => (
              <MultiSelect.Option key={option.id} value={option.id} data={option}>
                {option.name}
              </MultiSelect.Option>
            ))}
          </MultiSelect>
        </div>
      </div>
    );
  }
  return null;
};
`,
  demoName: 'Multi Select',
}


export const CustomSelect = {
  code: ``,
  demoName: 'Custom Select',
}
