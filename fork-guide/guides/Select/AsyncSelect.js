import React, { useState, useCallback, useRef, useImperativeHandle, useEffect } from 'react';
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
