/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import {Link} from 'gatsby';
import React from 'react';
import {colors} from 'theme';

import type {Node} from 'react';

type Props = {
  children: Node,
  target?: string,
  to: string,
};

const FooterLink = ({children, target, to}: Props) => (
  <Link
    css={{
      lineHeight: 2,
      marginRight: 20,
      transition: 'color .1s ease',
      ':hover': {
        color: colors.brand,
      },
    }}
    to={to}
    target={target}>
    {children}
  </Link>
);

export default FooterLink;
