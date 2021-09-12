import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Wrapper } from '@fork-guide/components';

const StyledInput = styled.input`
  outline: 0 !important;
  background-color: transparent;
  width: 100px;
  height: 100px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  margin: 5px;
  font-size: 60px;
  text-align: center;
  vertical-align: middle;
  color: var(--red-5);
`;

const StyledWrapper = styled(Wrapper)`
  &.--is-finished {
    > ${StyledInput} {
      border-color: var(--primary);
      color: var(--primary);
    }  
  }
`;

const Input = ({ onValidValue, onClean, onPaste }) => {
  const [value, setValue] = useState();
  const ref = useRef();
  const onChange = useCallback((e) => {
    if (e.target.value === '') {
      setValue(e.target.value);
      onClean && onClean(ref);
      return;
    }

    if (/^\d{4}$/g.test(e.target.value)) {
      onPaste && onPaste(ref);
      return;
    }

    if (/^\d+$/g.test(e.target.value)) {
      setValue(e.target.value[e.target.value.length - 1]);
      onValidValue && onValidValue(ref);
      return;
    }
    return setValue('');
  }, [onValidValue, setValue, onPaste, onClean]);

  return (
    <StyledInput
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
};

export default () => {
  const wref = useRef();
  const [isFinished, setIsFinished] = useState(false);
  const checkFinished = useCallback(() => {
    let validCount = 0;
    const inputNodes = wref.current.querySelectorAll('input');
    inputNodes.forEach((node) => {
      if (/^\d+$/g.test(node.value)) {
        validCount++;
      }
    });
    setIsFinished(validCount === inputNodes.length);
  }, [setIsFinished]);
  const onValidValue = useCallback((index) => {
    const nextInput = wref.current.querySelectorAll('input')[index + 1];
    nextInput && nextInput.focus();
    checkFinished();
  }, [checkFinished]);
  const onClean = useCallback((index) => {
    const prevInput = wref.current.querySelectorAll('input')[index - 1];
    prevInput && prevInput.focus();
    checkFinished();
  }, [checkFinished]);
  const onValidPasteForFirstInput = useCallback((firstInputRef) => {
    const values = firstInputRef.current.value;
    const inputNodes = wref.current.querySelectorAll('input');
    inputNodes.forEach((node, index) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeInputValueSetter.call(node, values[index]);
      node.dispatchEvent(new Event('input', { bubbles: true }));
    });
    checkFinished();
  }, [checkFinished]);
  return (
    <StyledWrapper className={cn({ '--is-finished': isFinished })} ref={wref}>
      <Input
        onValidValue={() => onValidValue(0)}
        onClean={() => onClean(0)}
        onPaste={onValidPasteForFirstInput}
      />
      <Input
        onValidValue={() => onValidValue(1)}
        onClean={() => onClean(1)}
      />
      <Input
        onValidValue={() => onValidValue(2)}
        onClean={() => onClean(2)}
      />
      <Input
        onValidValue={() => onValidValue(3)}
        onClean={() => onClean(3)}
      />
    </StyledWrapper>
  );
};
