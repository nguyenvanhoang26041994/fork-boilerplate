import React, { useCallback, useState, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import copyToClipboard from '@fork-ui/utils/copyToClipboard';
import Codebox from '../../Codebox';
import Basic from './Basic';
import Color from './Color';
import Size from './Size';
import Stroke from './Stroke';

import { Textbox, Flex } from '@fork-ui/components/core';
import allIcons, { Check } from '@fork-ui/components/icons';
import fuzzysort from '@fork-ui/libs/fuzzysort';
import { debounce } from '@fork-ui/utils/helpers';

const icons = Object.keys(allIcons);

const IconBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;

  .fui-icon {
    cursor: pointer;
  }

  &:hover {
    color: var(--primary);
    transform: scale(1.2);
    transition: 0.25s;
  }
`;

const IconGuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
`;

const SearchBox = styled(Textbox)`
  border-radius: 0;
  background-color: var(--bg);
  border-color: transparent;
  border-bottom: 1px solid var(--primary);

  &:focus,
  &:hover {
    background-color: var(--bg);
    border-color: transparent;
    border-bottom: 1px solid var(--primary);
  }
`;
const SearchBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconBox = ({ Icon }) => {
  const [isCopied, setIsCopied] = useState(false);
  const onClick = useCallback(() => {
    copyToClipboard(Icon.displayName);
    setIsCopied(true);
  }, [Icon.displayName, setIsCopied]);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 1000);
    }
  }, [isCopied, setIsCopied]);

  return (
    <IconBoxWrapper>
      {isCopied
        ? <Check color="var(--primary)" fontSize="1.25rem" />
        : <Icon fontSize="1.25rem" style={{ cursor: 'pointer' }} onClick={onClick} />
      }
    </IconBoxWrapper>
  );
};

const IconGuide = () => {
  const searchRef = useRef();
  const [searchStr, setSearchStr] = useState('');
  const onChange = useCallback(e => setSearchStr(searchRef.current.value), [searchRef, setSearchStr]);
  const debounceChange = useMemo(() => debounce(onChange, 200), [onChange]);

  const _icons = useMemo(() => {
    if (searchStr.trim()) {
      return fuzzysort.go(searchStr, icons).map(obj => <IconBox Icon={allIcons[obj.target]} key={obj.target} />)
    }
    return icons.map(name => <IconBox Icon={allIcons[name]} key={name} />);
  }, [searchStr]);

  return (
    <Flex>
      <Flex col span="1/2">
        <Flex style={{ paddingBottom: '1px' }}>
          <Codebox Component={ Basic } defaultShowCode />
        </Flex>
        <Flex style={{ paddingBottom: '1px' }}>
          <Codebox Component={ Color } />
        </Flex>
        <Flex style={{ paddingBottom: '1px' }}>
          <Codebox Component={ Size } />
        </Flex>
        <Flex style={{ paddingBottom: '1px' }}>
          <Codebox Component={ Stroke } />
        </Flex>
      </Flex>
      <Flex span="1/2" style={{ paddingLeft: '1px' }} >
          <SearchBoxWrapper className="w-full">
            <SearchBox placeholder="What's icon you looking for?" onChange={debounceChange} ref={searchRef} />
            <IconGuideWrapper>
              <div className="flex justify-center w-full flex-wrap">
                {_icons}
              </div>
            </IconGuideWrapper>
          </SearchBoxWrapper>
        </Flex>
    </Flex>
  );
};

export default IconGuide;
