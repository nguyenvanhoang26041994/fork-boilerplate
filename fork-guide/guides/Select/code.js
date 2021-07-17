export const AsyncSelect = {
  code: `import React, { useState, useCallback, useRef, useImperativeHandle, useEffect } from 'react';
import { Select } from '@fork-ui/core';
import { find } from 'lodash';

const listOption = [
  {
    key: 'vn',
    name: 'Vietname',
    currency: 'VND'
  },
  {
    key: 'us',
    name: 'United State',
    currency: 'USD'
  },
  {
    key: 'uk',
    name: 'United Kingdom',
    currency: 'GBP'
  }
];

const AsyncSelect = React.forwardRef(({
  defaultValueKey
}, _ref) => {
  const [selected, setSelected] = useState(null);
  const onSelect = useCallback(option => setSelected(option), [setSelected]);

  useEffect(() => {
    setSelected();
  }, []);

  const onBottomIntersected = useCallback(() => {

  }, []);

  return (
    <Select
      overlay={(
        <Select.Overlay>
          <Select.OverlayBody onBottomIntersected={onBottomIntersected}>
            {options.map((option) => (
              <Select.Option
                value={option}
                disabled={option.disabled}
                active={option.key === selected.key}
                onSelect={onSelect}
              >
                {option.name} - {option.currency}
              </Select.Option>
            ))}
          </Select.OverlayBody>
        </Select.Overlay>
      )}
    >
      {render(selected)}
    </Select>
  );
});

export default () => {
  const { page, pageSize, setPage } = AsyncSelect.useSelect();

  return (
    <AsyncSelect
      defaultSelected={({ setSelected }) => getSelected(defaultValue).then((selected) => {
        setSelected(selected);
      })}
      options={({ searchTerm, pushOptions }) => callApi({
        searchTerm,
        page: page,
        pageSize: pageSize
      }).then((options) => {
        pushOptions(options);
        setPage(prev => prev + 1);
      })}
    />
  );
};
`,
  demoName: 'Async Select',
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
        <Select value={value} setValue={setValue}>
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

export const ReadonlySelect = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Select } from '@fork-ui/core';
import { User } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <Select>Vietnam - VND</Select>
      <Select>
        <User className="mr-2" />
        <span>United State - USD</span>
      </Select>
    </Wrapper>

  );
};
`,
  demoName: 'Readonly Select',
}

export const Select = {
  code: `import React from 'react';
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
  return (
    <Select defaultValue="us">
      {options.map((option) => (
        <Select.Option key={option.key} value={option.key}>
          {option.text}
        </Select.Option>
      ))}
    </Select>
  );
};
`,
  demoName: 'Select',
}

