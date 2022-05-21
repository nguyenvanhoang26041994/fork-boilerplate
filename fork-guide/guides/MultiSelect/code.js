export const AsyncMultiSelect = {
  code: `import React, { useState, useCallback } from 'react';
import { AsyncMultiSelect } from 'fork-design';

const FakeAPI = {
  getOptionsByIds: (ids) => {
    return Promise.all(ids.map(id => {
      return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users/\${id}\`)
        .then(response => response.json());
    }));
  },
  getOptions: ({ page = 1, pageSize = 20, searchText = '' }) => {
    return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users?page=\${page}&limit=\${pageSize}&name=\${searchText}\`)
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
`,
  demoName: 'Async Multi Select',
}

export const ControlledAsyncMultiSelect = {
  code: `import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Avatar, Badge, AsyncMultiSelect } from 'fork-design';

const FakeAPI = {
  getOption: (id) => {
    return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users/\${id}\`)
      .then(response => response.json());
  },
  getOptionsByIds: (ids) => {
    return Promise.all(ids.map(id => FakeAPI.getOption(id)));
  },
  getOptions: ({ page = 1, pageSize = 20, searchText = '' }) => {
    return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users?page=\${page}&limit=\${pageSize}&name=\${searchText}\`)
      .then(response => response.json());
  },
};

const StyledOption = styled(AsyncMultiSelect.Option)\`
  padding-top: 8px;
  padding-bottom: 8px;
\`;

const PagingAsyncMultiSelect = ({ value, setValue, className }) => {
  const pagingRef = useRef({
    page: 1,
    pageSize: 20,
    isHasNext: true,
  });

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
      className={className}
      value={value}
      setValue={setValue}
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
  const [value, setValue] = useState(['4', '32', '12']);
  return (
    <div className="flex flex-col">
      <PagingAsyncMultiSelect value={value} setValue={setValue} className="mb-2" />
      <PagingAsyncMultiSelect value={value} setValue={setValue} />
    </div>
  );
};
`,
  demoName: 'Controlled Async Multi Select',
}

export const ControlledMultiSelect = {
  code: `import React, { useState, useEffect } from 'react';
import { MultiSelect } from 'fork-design';

const FakeAPI = {
  getOptions: ({ page = 1, pageSize = 20, searchText = '' }) => {
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
`,
  demoName: 'Controlled Multi Select',
}

export const CustomAsyncMultiSelect = {
  code: `import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Avatar, Badge, AsyncMultiSelect } from 'fork-design';

const FakeAPI = {
  getOptionsByIds: (ids) => {
    return Promise.all(ids.map(id => {
      return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users/\${id}\`)
        .then(response => response.json());
    }));
  },
  getOptions: ({ page = 1, pageSize = 20, searchText = '' }) => {
    return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users?page=\${page}&limit=\${pageSize}&name=\${searchText}\`)
      .then(response => response.json());
  },
};

const StyledOption = styled(AsyncMultiSelect.Option)\`
  padding-top: 8px;
  padding-bottom: 8px;
\`;

export default () => {
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
`,
  demoName: 'Custom Async Multi Select',
}

export const CustomMultiSelect = {
  code: `import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar, Badge, MultiSelect } from 'fork-design';

const FakeAPI = {
  getOption: (id) => {
    return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users/\${id}\`)
      .then(response => response.json());
  },
  getOptions: ({ page = 1, pageSize = 20, searchText = '' }) => {
    return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users?page=\${page}&limit=\${pageSize}&name=\${searchText}\`)
      .then(response => response.json());
  },
};

const StyledOption = styled(MultiSelect.Option)\`
  padding-top: 8px;
  padding-bottom: 8px;
\`;

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
`,
  demoName: 'Custom Multi Select',
}

export const MultiSelect = {
  code: `import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Avatar, Badge, MultiSelect, AsyncMultiSelect } from 'fork-design';

const FakeAPI = {
  getOption: (id) => {
    return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users/\${id}\`)
      .then(response => response.json());
  },
  getOptionsByIds: (ids) => {
    return Promise.all(ids.map(id => FakeAPI.getOption(id)));
  },
  getOptions: ({ page = 1, pageSize = 20, searchText = '' }) => {
    return window.fetch(\`https://60f431423cb0870017a8a15f.mockapi.io/api/users?page=\${page}&limit=\${pageSize}&name=\${searchText}\`)
      .then(response => response.json());
  },
};

const StyledOption = styled(AsyncMultiSelect.Option)\`
  padding-top: 8px;
  padding-bottom: 8px;
\`;

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
`,
  demoName: 'Multi Select',
}

