import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import Head from '../components/head'

// import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import * as aboutStyles from './about.module.scss'

const BackgroundSection = ({ className }) => {
  return (
    <Layout>
      <Head title="About" />
      <div className={[aboutStyles.container, "mb-5"].join(' ')}>
        <div className={aboutStyles.grayBackground}>
          <Container>
            <Row className="mt-3">
              <Col>
                <h1>ABOUT US</h1>
              </Col>
            </Row>
            <Row className="">
              <Col sm={12} md={8}>
                <p>Welcome to Husky Table Tennis Club (HTTC), a table tennis club, at the University of Washington - Seattle Campus. <br></br><br></br> We are a fully student run table tennis club, and represent UW in the National Collegiate Table Tennis Association (NCTTA). </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={[aboutStyles.container, "d-flex flex-column justify-content-center"].join(' ')}>
        <Container>
          <Row className={[aboutStyles.headerText, "justify-content-center"].join(' ')}>
            <Col sm={12} md={8}>
              <h6>OUR MISSION</h6>
            </Col>
          </Row>
          <Row className="justify-content-center mb-5">
            <Col sm={12} md={8}>
              <p>LOREN IPSUM</p>
            </Col>
          </Row>
          <Row className={[aboutStyles.headerText, "justify-content-center"].join(' ')}>
            <Col sm={12} md={8}>
              <h6>VISION STATEMENT</h6>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={12} md={8} className="text-left">
              <p>LOREN IPSUM</p>
            </Col>
          </Row>
          <Row className={[aboutStyles.headerText, "justify-content-center"].join(' ')}>
            <Col sm={12} md={8}>
              <h6>LOREN IPSUM</h6>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={12} md={8} className="text-left">
              <p>LOREN IPSUM</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default BackgroundSection
