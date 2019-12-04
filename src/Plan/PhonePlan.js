import React from 'react';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { Label1, H6, Display3 } from 'baseui/typography';
import { Card } from 'baseui/card';

import {
  centsToReal, getTypePlanLabel, getValueOfPlan, getAmountDefault,
} from '../utils';

const PhonePlan = ({ minutes, amount, type }) => (
  <Card overrides={{ Root: { style: { textAlign: 'center' } } }}>
    <Block>
      <H6 color="#72D621">
        {getTypePlanLabel(type)}
      </H6>
    </Block>
    <Block>
      <Display3>
        {centsToReal(getValueOfPlan(type, minutes, amount)) }
      </Display3>
      <Label1>
        Valor sem o Plano:
        {' '}
        {centsToReal(getAmountDefault(minutes, amount))}
      </Label1>
    </Block>
    <Block />
    <Block marginTop="30px" />
    <Block alignItems="end">
      <Button
        overrides={{ BaseButton: { style: { width: '100%' } } }}
      >
        Assine já
      </Button>
    </Block>
  </Card>
);
export default PhonePlan;
