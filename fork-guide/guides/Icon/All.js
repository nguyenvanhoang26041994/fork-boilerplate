import React, { useMemo, useCallback, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';

import copyToClipboard from 'fork-design/utils/copyToClipboard';
import fuzzysort from 'fork-design/libs/fuzzysort';
import * as allIcons from 'fork-design/icons';

const icons = Object.keys(allIcons);
const Check = allIcons.Check;

const StyledIconName = styled.span`
  max-width: 65px;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0;
`;
const IconBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;

  .ficon {
    --icon-size: 18px;
  }

  &:hover {
    color: var(--primary);
    background-color: var(--primary-low-emphasis);

    .ficon {
      transform: scale(1.3);
      transition: 0.25s;
    }
    ${StyledIconName} {
      opacity: 1;
      transition: 0.25s;
    }
  }
`;

const IconGuideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--bg);
`;

const SearchBox = styled.input`
  padding: 10px;
  border-radius: 0;
  background-color: var(--bg);
  border-color: transparent;
  border-bottom: 1px solid var(--primary);
  outline: 0 !important;

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
    <IconBoxWrapper onClick={onClick}>
      <div>
        {isCopied
          ? <Check color="var(--primary)" />
          : <Icon />
        }
      </div>
      <StyledIconName>
        {Icon.displayName}
      </StyledIconName>
    </IconBoxWrapper>
  );
};

const LazyIconDemo = () => {
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
    <SearchBoxWrapper className="w-full">
      <SearchBox placeholder="Type icon name to search" onChange={debounceChange} ref={searchRef} />
      <IconGuideWrapper>
        {_icons}
      </IconGuideWrapper>
    </SearchBoxWrapper>
  );
};

export default LazyIconDemo;
