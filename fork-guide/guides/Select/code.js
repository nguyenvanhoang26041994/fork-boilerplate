export const AsyncSelect = {
  code: `import React, { useRef, useCallback } from 'react';
import { AsyncSelect } from '@fork-ui/select';

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
  const getSelectedOption = useCallback(({ selectedValue }) => {
    return FakeAPI.getOption(selectedValue);
  }, []);

  const getOptions = useCallback(({ searchText }) => {
    return FakeAPI.getOptions({ searchText });
  }, []);

  return (
    <AsyncSelect
      defaultValue="10"
      renderSearchbox
      getSelectedOption={getSelectedOption}
      getOptions={getOptions}
      valueKey="id"
      nameKey="name"
    />
  );
};
`,
  demoName: 'Async Select',
}

export const ControledAsyncSelect = {
  code: `import React, { useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Avatar, Badge } from '@fork-ui/core';
import { AsyncSelect } from '@fork-ui/select';

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
const StyledOption = styled(AsyncSelect.Option)\`
  padding-top: 8px;
  padding-bottom: 8px;
\`;
const PagingAsyncSelect = ({ value, setValue, className }) => {
  const pagingRef = useRef({
    page: 1,
    pageSize: 20,
    isHasNext: true,
  });
  const getSelectedOption = useCallback(({ selectedValue }) => {
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
      getSelectedOption={getSelectedOption}
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
`,
  demoName: 'Controled Async Select',
}

export const ControlledSelect = {
  code: `import React, { useState } from 'react';
import { Wrapper } from '@fork-guide/components';
import { Select } from '@fork-ui/select';

const options = [
  {
    key: 'vn',
    text: 'Vietnam',
    currency: 'VND'
  },
  {
    key: 'us',
    text: 'United State',
    currency: 'USD'
  },
  {
    key: 'uk',
    text: 'United Kingdom',
    currency: 'GBP'
  },
];

export default () => {
  const [value, setValue] = useState('us');
  return (
    <Wrapper span="20px">
      <div className="w-1/2">
        <Select value={value} setValue={setValue}>
          {options.map((option) => (
            <Select.Option key={option.key} value={option.key}>
              {option.text}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className="w-1/2">
        <Select
          value={value}
          setValue={setValue}
        >
          {options.map((option) => (
            <Select.Option key={option.key} value={option.key}>
              {option.text}
            </Select.Option>
          ))}
        </Select>
      </div>
    </Wrapper>
  );
};
`,
  demoName: 'Controlled Select',
}

export const Custom = {
  code: `import React from 'react';
import styled from 'styled-components';
import { Avatar, Badge } from '@fork-ui/core';
import { Select } from '@fork-ui/select';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';
const options = [
  {
    id: 'hoang-nguyen',
    name: 'Hoang Nguyen',
    jobTitle: 'Frontend Developer',
    color: 'var(--primary)',
    avatar: avatarLink,
  },
  {
    id: 'son-le',
    name: 'Son Le',
    jobTitle: 'Fullstack Developer',
    color: 'var(--red-6)',
    avatar: avatarLink2,
  },
  {
    id: 'son-nguyen',
    name: 'Son Nguyen',
    jobTitle: 'Mobile Developer',
    color: 'var(--green-6)',
    avatar: avatarLink3,
  },
  {
    id: 'alex-jonhson',
    name: 'Alex Jonhson',
    jobTitle: 'UI/UX Designer',
    color: 'var(--green-6)',
    avatar: avatarLink,
  },
];

const StyledOption = styled(Select.Option)\`
  padding-top: 8px;
  padding-bottom: 8px;
\`;
export default () => {
  return (
    <Select
      defaultValue="hoang-nguyen"
      render={(props, selectedOption) => (
        <Select.Single {...props}>
          <Badge.Dot overlap placement="bottom-end" color={selectedOption.data.color}>
            <Avatar size={24} src={selectedOption.data.avatar} />
          </Badge.Dot>
          <div className="flex flex-col items-start ml-3">
            <b>{selectedOption.data.name} - {selectedOption.data.jobTitle}</b>
          </div>
        </Select.Single>
      )}
    >
      {options.map((option) => (
        <StyledOption
          key={option.id}
          value={option.id}
          data={option}
        >
          <Badge.Dot overlap placement="bottom-end" color={option.color}>
            <Avatar src={option.avatar} />
          </Badge.Dot>
          <div className="flex flex-col items-start ml-3">
            <b>{option.name}</b>
            <small>{option.jobTitle}</small>
          </div>
        </StyledOption>
      ))}
    </Select>
  );
};
`,
  demoName: 'Custom',
}

export const CustomAsyncSelect = {
  code: `import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Avatar, Badge } from '@fork-ui/core';
import { AsyncSelect } from '@fork-ui/select';

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
const StyledOption = styled(AsyncSelect.Option)\`
  padding-top: 8px;
  padding-bottom: 8px;
\`;
export default () => {
  const pagingRef = useRef({
    page: 1,
    pageSize: 20,
    isHasNext: true,
  });

  const getSelectedOption = useCallback(({ selectedValue }) => {
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
      defaultValue="4"
      getSelectedOption={getSelectedOption}
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
`,
  demoName: 'Custom Async Select',
}

export const Seachable = {
  code: `import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Avatar, Badge } from '@fork-ui/core';
import { Select } from '@fork-ui/select';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';
const options = [
  {
    id: 'hoang-nguyen',
    name: 'Hoang Nguyen',
    jobTitle: 'Frontend Developer',
    color: 'var(--primary)',
    avatar: avatarLink,
  },
  {
    id: 'son-le',
    name: 'Son Le',
    jobTitle: 'Fullstack Developer',
    color: 'var(--red-6)',
    avatar: avatarLink2,
  },
  {
    id: 'son-nguyen',
    name: 'Son Nguyen',
    jobTitle: 'Mobile Developer',
    color: 'var(--green-6)',
    avatar: avatarLink3,
  },
  {
    id: 'alex-jonhson',
    name: 'Alex Jonhson',
    jobTitle: 'UI/UX Designer',
    color: 'var(--green-6)',
    avatar: avatarLink,
  },
];

const StyledOption = styled(Select.Option)\`
  padding-top: 8px;
  padding-bottom: 8px;
\`;
export default () => {
  return (
    <Wrapper span="10px">
      <div className="w-1/2">
        <Select
          renderSearchbox
          defaultValue="son-nguyen"
        >
          {options.map((option) => (
            <Select.Option
              key={option.id}
              value={option.id}
            >
              {option.name}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className="w-1/2">
        <Select
          defaultValue="son-nguyen"
          render={(props, selectedOption) => (
            <Select.Single {...props}>
              <Badge.Dot overlap placement="bottom-end" color={selectedOption.data.color}>
                <Avatar size={24} src={selectedOption.data.avatar} />
              </Badge.Dot>
              <div className="flex flex-col items-start ml-3">
                <b>{selectedOption.data.name} - {selectedOption.data.jobTitle}</b>
              </div>
            </Select.Single>
          )}
          renderSearchbox={(props) => (
            <Select.Searchbox
              {...props}
              placeholder="Type to search..."
            />
          )}
          optionFilter={(props, { searchRegex }) => {
            return searchRegex.test(props.data.name) || searchRegex.test(props.data.jobTitle);
          }}
        >
          {options.map((option) => (
            <StyledOption
              key={option.id}
              value={option.id}
              data={option}
            >
              <Badge.Dot overlap placement="bottom-end" color={option.color}>
                <Avatar src={option.avatar} />
              </Badge.Dot>
              <div className="flex flex-col items-start ml-3">
                <b>{option.name}</b>
                <small>{option.jobTitle}</small>
              </div>
            </StyledOption>
          ))}
        </Select>
      </div>
    </Wrapper>
  );
};
`,
  demoName: 'Seachable',
}

export const Select = {
  code: `import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Avatar, Badge } from '@fork-ui/core';
import { Select, AsyncSelect } from '@fork-ui/select';

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


const StyledOption = styled(AsyncSelect.Option)\`
  padding-top: 8px;
  padding-bottom: 8px;
\`;
const LazyLoadAsyncSelect = () => {
  const pagingRef = useRef({
    page: 1,
    pageSize: 20,
    isHasNext: true,
  });
  const getSelectedOption = useCallback(({ selectedValue }) => {
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
      defaultValue="4"
      getSelectedOption={getSelectedOption}
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

const options = [
  {
    key: 'vn',
    text: 'Vietnam',
    currency: 'VND'
  },
  {
    key: 'us',
    text: 'United State',
    currency: 'USD'
  },
  {
    key: 'uk',
    text: 'United Kingdom',
    currency: 'GBP'
  },
];

export default () => {
  return (
    <div className="flex items-center">
      <Select defaultValue="us" className="mr-2">
        {options.map((option) => (
          <Select.Option key={option.key} value={option.key}>
            {option.text}
          </Select.Option>
        ))}
      </Select>
      <LazyLoadAsyncSelect />
    </div>
  );
};
`,
  demoName: 'Select',
}

