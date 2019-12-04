import React from 'react';
import { Block } from 'baseui/block';
import { Display4 } from 'baseui/typography';

const LayoutBody = ({
  title, addon, children, ...props
}) => (
  <Block padding="scale800" width="100%" {...props}>
    <Block display="flex" justifyContent="space-between">
      <Display4 marginBottom="scale800">{title}</Display4>
      <Block>{addon}</Block>
    </Block>
    {children}
  </Block>
);

export default LayoutBody;
