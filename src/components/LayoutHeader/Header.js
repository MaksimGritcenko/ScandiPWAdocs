/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import HeaderLink from './HeaderLink';
import {Link} from 'gatsby';
import React from 'react';
import {colors, fonts, media} from 'theme';
import {version} from 'site-constants';
import ExternalLinkSvg from 'templates/components/ExternalLinkSvg';
import DocSearch from './DocSearch';

// $FlowFixMe
import navHeader from '../../../content/headerNav.yml';

import logoSvg from 'icons/logo.png';

const Header = ({location}: {location: Location}) => (
  <header
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      top: 0,
      left: 0,
      '@media print': {
        display: 'none',
      },
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 60,
          [media.between('small', 'large')]: {
            height: 50,
          },
          [media.lessThan('small')]: {
            height: 40,
          },
        }}>
        <Link
          css={{
            display: 'flex',
            marginRight: 10,
            height: '100%',
            alignItems: 'center',
            color: colors.brand,

            ':focus': {
              outline: 0,
              color: colors.white,
            },

            [media.greaterThan('small')]: {
              width: 'calc(100% / 6)',
            },
            [media.lessThan('small')]: {
              flex: '0 0 auto',
            },
          }}
          to="/docs/linux.html">
          <img src={logoSvg} alt="" width="150" />
        </Link>

        {/* <nav
          css={{
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            overflowX: 'auto',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            height: '100%',

            // Hide horizontal scrollbar
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },

            [media.size('xsmall')]: {
              flexGrow: '1',
              width: 'auto',
            },
            [media.greaterThan('xlarge')]: {
              width: null,
            },
            [media.lessThan('small')]: {
              maskImage:
                'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
            },
          }}>
          {navHeader.items.map(link => (
            <HeaderLink
              key={link.title}
              isActive={location.pathname.includes(link.activeSelector)}
              title={link.title}
              to={link.to}
            />
          ))}
        </nav> */}

        {/* <DocSearch /> */}

        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: 'auto',

            [media.lessThan('medium')]: {
            width: 'auto',
            },
            [media.greaterThan('large')]: {
            width: 'calc(100% / 4)',
            },
          }}>
          {/* <Link
            css={{
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              ...fonts.small,

              ':hover': {
                color: colors.brand,
              },

              ':focus': {
                outline: 0,
                backgroundColor: colors.lighter,
                borderRadius: 15,
              },

              [media.lessThan('medium')]: {
                display: 'none',
              },
            }}
            to="/versions">
            v{version}
          </Link> */}

          <a
            css={{
              padding: '5px 10px',
              marginLeft: 10,
              whiteSpace: 'nowrap',
              ...fonts.small,

              ':hover': {
                color: colors.brand,
              },

              ':focus': {
                outline: 0,
                backgroundColor: colors.lighter,
                borderRadius: 15,
              },

              // [media.lessThan('large')]: {
              //   display: 'none',
              // },
            }}
            href="https://github.com/scandipwa/scandipwa.github.io/"
            target="_blank"
            rel="noopener">
            GitHub
            <ExternalLinkSvg
              cssProps={{
                marginLeft: 5,
                verticalAlign: -2,
                color: colors.subtle,
              }}
            />
          </a>
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
