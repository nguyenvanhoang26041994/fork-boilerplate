import React from 'react';
import { Popconfirm, Button, Typo } from '@fork-ui/components/core';
import QuestionMark from '@fork-ui/components/icons/all/QuestionMark';

const QuestionMarkPopconfirm = ({ children, ...otherProps }) => (
  <Popconfirm
    content={(
      <div class="flex items-center">
        <QuestionMark size="10em" stroke="2" color="var(--primary)" />
        <div>
          <Typo h2>Hey handsome!</Typo>
          <Typo>Keep in mind, Confirm is Modal, as alway should be.</Typo>
          <Typo>Are you sure you want to continue this decision?.</Typo>
        </div>
      </div>
    )}
    {...otherProps}
  >
   {children}
  </Popconfirm>
);

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <QuestionMarkPopconfirm topStart>
          <Button className="m-2" style={{ width: "3em" }}>TS</Button>
        </QuestionMarkPopconfirm>
        <QuestionMarkPopconfirm top>
          <Button className="m-2" style={{ width: "3em" }}>T</Button>
        </QuestionMarkPopconfirm>
        <QuestionMarkPopconfirm topEnd>
          <Button className="m-2" style={{ width: "3em" }}>TE</Button>
        </QuestionMarkPopconfirm>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
      </div>

      <div className="flex">
        <QuestionMarkPopconfirm leftStart>
          <Button className="m-2" style={{ width: "3em" }}>LS</Button>
        </QuestionMarkPopconfirm>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <QuestionMarkPopconfirm rightStart>
          <Button className="m-2" style={{ width: "3em" }}>RS</Button>
        </QuestionMarkPopconfirm>
      </div>

      <div className="flex">
        <QuestionMarkPopconfirm left>
          <Button className="m-2" style={{ width: "3em" }}>L</Button>
        </QuestionMarkPopconfirm>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <QuestionMarkPopconfirm right>
          <Button className="m-2" style={{ width: "3em" }}>R</Button>
        </QuestionMarkPopconfirm>
      </div>

      <div className="flex">
        <QuestionMarkPopconfirm leftEnd>
          <Button className="m-2" style={{ width: "3em" }}>LE</Button>
        </QuestionMarkPopconfirm>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <QuestionMarkPopconfirm rightEnd>
          <Button className="m-2" style={{ width: "3em" }}>RE</Button>
        </QuestionMarkPopconfirm>
      </div>

      <div className="flex">
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <QuestionMarkPopconfirm bottomStart>
          <Button className="m-2" style={{ width: "3em" }}>BS</Button>
        </QuestionMarkPopconfirm>
        <QuestionMarkPopconfirm bottom>
          <Button className="m-2" style={{ width: "3em" }}>B</Button>
        </QuestionMarkPopconfirm>
        <QuestionMarkPopconfirm bottomEnd>
          <Button className="m-2" style={{ width: "3em" }}>BE</Button>
        </QuestionMarkPopconfirm>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
      </div>
    </div>
  );
};

export default Demo;
