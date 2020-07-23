/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 */

import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Flex from 'components/Flex';
import CodeExample from 'components/CodeExample';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {graphql} from 'gatsby';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import {colors, media, sharedStyles} from 'theme';
import loadScript from 'utils/loadScript';
import createCanonicalUrl from 'utils/createCanonicalUrl';
import {babelURL} from 'site-constants';
import HomePage from './../components/HomePage'
// import logoWhiteSvg from 'icons/logo-white.svg';

class Home extends Component {

  state = {
    babelLoaded: false,
  };

  componentDidMount() {
    loadScript(babelURL).then(
      () => {
        this.setState({
          babelLoaded: true,
        });
      },
      error => {
        console.error('Babel failed to load.');
      },
    );
  }

  render() {
    const {data, location} = this.props;
    const {codeExamples} = data;

    const code = codeExamples.edges.reduce((lookup, {node}) => {
      lookup[node.mdAbsolutePath] = node;
      return lookup;
    }, {});

    return (
      <Layout location={location}>
         <HomePage />
      </Layout>
    );
  }
}

Home.propTypes = {
  data: PropTypes.shape({
    examples: PropTypes.object.isRequired,
    marketing: PropTypes.object.isRequired,
  }).isRequired,
};

const CtaItem = ({children, primary = false}) => (
  <div
    css={{
      [media.between('small', 'large')]: {
        paddingLeft: 20,
      },

      [media.greaterThan('xlarge')]: {
        paddingLeft: 40,
      },

      '&:first-child': {
        textAlign: 'right',
        paddingRight: 7,
        paddingLeft: 7,
        [media.lessThan('small')]: {
          marginBottom: 10,
        },
      },

      '&:nth-child(2)': {
        paddingRight: 7,
        paddingLeft: 7,
        [media.greaterThan('small')]: {
          paddingLeft: 15,
        },
        [media.lessThan('small')]: {
          marginBottom: 10,
        },
      },
    }}>
    {children}
  </div>
);

export const pageQuery = graphql`
  query IndexMarkdown {
    codeExamples: allExampleCode {
      edges {
        node {
          id
          code
          mdAbsolutePath
        }
      }
    }

    examples: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "//home/examples//"}}
      sort: {fields: [frontmatter___order], order: ASC}
    ) {
      edges {
        node {
          fileAbsolutePath
          fields {
            slug
          }
          frontmatter {
            title
            domid
          }
          html
        }
      }
    }
    marketing: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "//home/marketing//"}}
      sort: {fields: [frontmatter___order], order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;

export default Home;

const sectionStyles = {
  marginTop: 20,
  marginBottom: 15,

  [media.greaterThan('medium')]: {
    marginTop: 60,
    marginBottom: 65,
  },
};

const headingStyles = {
  '&&': {
    marginBottom: 20,
  },
};
