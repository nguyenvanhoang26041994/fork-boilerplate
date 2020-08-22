import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import copyToClipboard from '@@/fork-ui/src/utils/copyToClipboard';
import * as icons from '@@/fork-ui/src/components/icons';
const Check = icons.Check;

const IconBoxWrapper = styled.div`
  display: flex;
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
`;

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
  return (
    <IconGuideWrapper>
      <div className="flex flex-wrap">
        {Object.keys(icons).map(name => (
          <IconBox name={name} Icon={icons[name]} key={name} />
        ))}
      </div>
    </IconGuideWrapper>
  );
};

export default IconGuide;
