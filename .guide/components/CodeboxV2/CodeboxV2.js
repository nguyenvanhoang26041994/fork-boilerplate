import React from 'react';
import styled from 'styled-components';
import { useAuthor } from './authors';

const CodeboxV2Wrapper = styled.div`
  padding: 15px;
  margin: 5px;
  background-color: #fff;
  border-radius: 8px;
  width: 800px;
`;

const DemoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const FieldHeader = styled.h4`
  color: rgba(0, 0, 0, 0.5);
  font-family: monospace;
`;
const Fields = styled.div`
  display: flex;

  > * {
    width: 50%;
  }
`;

const Field = styled.div``;

const CodeboxV2 = ({ Component }) => {
  const authors = useAuthor(Component);
  const author = authors[0];

  return (
    <CodeboxV2Wrapper>
      <DemoWrapper>
        <Component />
      </DemoWrapper>
      <Fields className="flex mb-20">
        <Field>
          <FieldHeader className="mb-3">Author</FieldHeader>
          <p>{author.name}</p>
        </Field>
        <Field>
          <FieldHeader className="mb-3">Code link</FieldHeader>
        </Field>
      </Fields>
      <Field>
        <FieldHeader className="mb-3">About a code</FieldHeader>
        <div>
          <h3 className="font-bold">{Component.header}</h3>
        </div>
      </Field>
    </CodeboxV2Wrapper>
  );
};

export default CodeboxV2;
