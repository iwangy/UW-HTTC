import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import Carousel from '../components/carousel';
import Container from 'react-bootstrap/Container'

import * as styles from '../styles/index.module.scss';

function Index() {

  return (
    <Layout>
      <Head title="Home" />
      <Container fluid className={styles.centerContainer}>
      </Container>
      <Carousel/>

    </Layout>
  );
}

export default Index;
