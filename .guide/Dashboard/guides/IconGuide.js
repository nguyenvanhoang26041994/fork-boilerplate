import React, { useCallback, useState, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import copyToClipboard from '@@/fork-ui/src/utils/copyToClipboard';
import Codebox from '@@/.guide/Codebox';
import Basic from '@@/.guide/_documents/Icon/demo/Basic';
import Color from '@@/.guide/_documents/Icon/demo/Color';

import { Textbox, Flex } from '@@/fork-ui/src/components/core';
import * as allIcons from '@@/fork-ui/src/components/icons';
import fuzzysort from '@@/fork-ui/src/libs/fuzzysort';
import { debounce } from '@@/fork-ui/src/utils/helpers';

const icons = Object.keys(allIcons);
const Check = allIcons.Check;

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
    color: var(--primary--500);
    transform: scale(1.2);
    transition: 0.25s;
  }
`;
const IconGuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
`;

const SearchBox = styled(Textbox)``;

const IconBox = ({ Icon, name }) => {
  const [isCopied, setIsCopied] = useState(false);
  const onClick = useCallback(() => {
    copyToClipboard(name);
    setIsCopied(true);
  }, [name, setIsCopied]);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 2500);
    }
  }, [isCopied]);

  return (
    <IconBoxWrapper>
      {isCopied ? <Check color="green" fontSize="1.25rem" /> : <Icon fontSize="1.25rem" onClick={onClick} />}
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
      return fuzzysort.go(searchStr, icons).map(obj => <IconBox name={obj.target} Icon={allIcons[obj.target]} key={obj.target} />)
    }
    return icons.map(name => <IconBox name={name} Icon={allIcons[name]} key={name} />);
  }, [searchStr]);

  return (
    <Flex col>
      <Flex span="full" style={ { paddingBottom: '1px' } }>
        <Flex span="1/2">
          <Codebox Component={ Basic } defaultShowCode />
        </Flex>
        <Flex span="1/2" style={ { paddingLeft: '1px' } }>
          <Codebox Component={ Color } defaultShowCode />
        </Flex>
      </Flex>
      <SearchBox className="mb-1" placeholder="What's icon you looking for?" onChange={debounceChange} ref={searchRef} />
      <IconGuideWrapper>
        <div className="flex w-full flex-wrap">
          {_icons}
        </div>
      </IconGuideWrapper>
    </Flex>
  );
};

export default IconGuide;
