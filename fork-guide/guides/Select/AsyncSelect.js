import React, { useRef, useCallback } from 'react';
import { find } from 'lodash';
import { AsyncSelect } from '@fork-ui/select';

import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';
const fakeOptions = [
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

const FakeAPI = {
  getOption: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(find(fakeOptions, { id }));
      }, 2000);
    });
  },
  getOptions: ({ page = 1, pageSize = 10, searchText = '' }) => {
    return new Promise((resolve, reject) => {
      resolve(fakeOptions);
    });
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
      defaultValue="alex-jonhson"
      ref={ref}
      onChanged={onChanged}
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
