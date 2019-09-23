import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Header } from 'components';
import { Layout } from 'layouts';
import styled from '@emotion/styled';
import { PostList } from 'components';
const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;
const Activities = ({data}) => {
    const { edges } = data.allMarkdownRemark;
    return (
  <Layout>
    <Helmet title={'Activities Page'} />
    <Header title="Activities Page">we are not only focus on research, but funny group activities... </Header>
      <PostWrapper>
        {edges.map(({ node }) => {
        //   console.log(edges)
          const { id, excerpt, frontmatter } = node;
          const { cover, path, title, date } = frontmatter;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          );
        })}
      </PostWrapper>
  </Layout>
)};

export default Activities;

Activities.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

  
  export const query = graphql`
    query {
      allMarkdownRemark(
        limit: 6
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 75)
            frontmatter {
              title
              path
              tags
              date(formatString: "MM.DD.YYYY")
              cover {
                childImageSharp {
                  fluid(
                    maxWidth: 1000
                    quality: 90
                    traceSVG: { color: "#2B2B2F" }
                  ) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  