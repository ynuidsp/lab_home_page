import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const People = center => (
  <Layout>
    <Helmet title={'People Page'} />
    <Header title="People Page">Comming soon</Header>
    <Container center={center}>
      <h3>
          this is our team...
        {/* If you would like to build this site completely from scratch, you can
        read the guide{' '}
        <a href="https://justinformentin.com/gatsby-v2-guide">here.</a> */}
      </h3>
    </Container>
  </Layout>
);

export default People;

People.propTypes = {
  center: PropTypes.object,
};
