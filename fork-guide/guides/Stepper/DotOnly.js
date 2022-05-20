import React from 'react';
import { Stepper } from 'fork-design';

export default () => {
  return (
    <Stepper display="alternate">
      <Stepper.Step status="completed">
        <Stepper.Button>1</Stepper.Button>
      </Stepper.Step>
      <Stepper.Step status="completed">
        <Stepper.Button>2</Stepper.Button>
      </Stepper.Step>
      <Stepper.Step status="canceled">
        <Stepper.Button>3</Stepper.Button>
      </Stepper.Step>
      <Stepper.Step status="processing">
        <Stepper.Button>4</Stepper.Button>
      </Stepper.Step>
      <Stepper.Step status="error">
        <Stepper.Button>5</Stepper.Button>
      </Stepper.Step>
    </Stepper>
  );
};
