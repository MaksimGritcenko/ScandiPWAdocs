/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import React, {Component} from 'react';
import Sidebar from 'templates/components/Sidebar';
import {colors, media} from 'theme';
import ChevronSvg from 'templates/components/ChevronSvg';

type State = {
  open: boolean,
};

type Props = {
  enableScrollSync?: boolean,
  createLink: Function, // TODO: Add better flow type once we Flow-type createLink
  defaultActiveSection: string,
  location: Location,
  sectionList: Array<Object>, // TODO: Add better flow type once we have the Section component
};

class StickyResponsiveSidebar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  _openNavMenu = () => {
    this.setState({open: !this.state.open});
  };

  _closeNavMenu = () => {
    this.setState({open: false});
  };

  render() {
    const {open} = this.state;
    const smallScreenSidebarStyles = {
      top: 60,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100vw',
      position: 'fixed',
      backgroundColor: colors.codeWhite,
      zIndex: 2,
      height: '100vh',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      pointerEvents: open ? 'auto' : 'none',
    };

    const smallScreenBottomBarStyles = {
      display: 'inline-block',
    };

    const iconOffset = 8;
    const menuOpacity = open ? 1 : 0;
    const menuOffset = open ? 0 : 40;

    // TODO: role and aria props for 'close' button?
    return (
      <div>
        <div
          style={{
            opacity: menuOpacity,
            transition: 'opacity 0.5s ease',
          }}
          css={{
            [media.lessThan('medium')]: smallScreenSidebarStyles,

            [media.greaterThan('medium')]: {
              marginRight: -999,
              paddingRight: -999,
              backgroundColor: '#f7f7f7',
              maxWidth: 460,
              minWidth: 460
            },

            [media.between('medium', 'sidebarFixed', true)]: {
              position: 'fixed',
              zIndex: 2,
              height: 'calc(100vh - 60px)',
            },

            [media.greaterThan('large')]: {
              position: 'fixed',
              zIndex: 2,
              // height: 'calc(100vh - 60px)',
              height: 'calc(100vh - 60px)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              marginRight: -999,
              paddingLeft: 40,
              paddingRight: 0,
              left: 0,
              backgroundColor: '#f7f7f7',
              opacity: '1 !important',
            },

            [media.size('small')]: {
              // height: 'calc(100vh - 40px)',
              height: 'calc(100vh - 60px)',
            },
            [media.lessThan('small')]: {
              // height: 'calc(100vh - 40px)',
              height: 'calc(100vh - 60px)',
            },

            [media.between('medium', 'large')]: {
              // height: 'calc(100vh - 50px)',
              height: 'calc(100vh - 60px)',
            },

            [media.greaterThan('sidebarFixed')]: {
              borderLeft: '1px solid #ececec',
            },
          }}>
          <div
            style={{
              transform: `translate(0px, ${menuOffset}px)`,
              transition: 'transform 0.5s ease',
              paddingRight: 30
            }}
            css={{
              marginTop: 80,

              [media.size('xsmall')]: {
                marginTop: 60,
              },

              [media.between('small', 'medium')]: {
                marginTop: 70,
              },

              [media.between('medium', 'large')]: {
                marginTop: 70,
              },

              [media.greaterThan('small')]: {
                transform: 'none !important',
              },
            }}>
            <Sidebar closeParentMenu={this._closeNavMenu} {...this.props} />
          </div>
        </div>
        <div
          css={{
            backgroundColor: colors.darker,
            bottom: 44, // iOS Safari's inert "bottom 44px"
            color: colors.brand,
            display: 'none', // gets overriden at small screen sizes
            cursor: 'pointer',
            position: 'fixed',
            right: 20,
            paddingRight: 0,
            zIndex: 3,
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
            [media.lessThan('large')]: {
              ...smallScreenBottomBarStyles,
              },
              [media.lessThan('medium')]: {
                zIndex: '102',
            },
          }}
          onClick={this._openNavMenu}
          role="button"
          tabIndex={0}>
          <Container>
            <div
              css={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: 60,
                width: 20,
                [media.between('medium', 'large')]: {
                  height: 50,
                },
                [media.lessThan('small')]: {
                  height: 60,
                  overflow: 'hidden',
                  alignItems: 'flex-start',
                },
              }}>
                { !this.state.open
                ? <div css={{
                    fontSize: 35,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: '2%',
                    left: '25%',
                }}>
                    ...
                  </div>
                : <div
                css={{
                  width: 20,
                  height: 20,
                  alignSelf: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: colors.brand,
                  [media.greaterThan('medium')]: {
                    left: '50%',
                    transform: 'translateX(-20%)'
                  }
                }}>
                <ChevronSvg
                  size={15}
                  cssProps={{
                    transform: `translate(2px, ${iconOffset}px) rotate(180deg)`,
                    transition: 'transform 0.2s ease',
                  }}
                />
                <ChevronSvg
                  size={15}
                  cssProps={{
                    transform: `translate(2px, ${0 - iconOffset}px)`,
                    transition: 'transform 0.2s ease',
                  }}
                />
              </div>
                }
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default StickyResponsiveSidebar;
