import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, ProjectList } from 'components';
import { Layout,Container } from 'layouts';

const Projects = ({ data }) => {
    const { edges } = data.allMarkdownRemark;
    return (
      <Layout>
        <Helmet title={'Projects Page'} />
        <Header title="Projects Page">we are working on it</Header>
        <Container >this is what we are doing</Container>
        {edges.map(({ node }) => (
          <ProjectList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
          />
        ))}
      </Layout>
    );
  };
  
  export default Projects;
  
  Projects.propTypes = {
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
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 200)
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
  


// const Projects = center => (
//   <Layout>
//     <Helmet title={'Projects Page'} />
//     <Header title="Projects Page">Comming soon</Header>
//     <Container center={center}>
//       <h3>
//           We are wokring on...
//         {/* If you would like to build this site completely from scratch, you can
//         read the guide{' '}
//         <a href="https://justinformentin.com/gatsby-v2-guide">here.</a> */}
//       </h3>
//     </Container>
//   </Layout>
// );

// export default Projects;

// Projects.propTypes = {
//   center: PropTypes.object,
// };
