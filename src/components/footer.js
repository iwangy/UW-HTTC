import React from 'react'
import { Link } from 'gatsby'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import httc from '../images/httchusky.png'
import instagram_logo from '../images/iglogo.png'
import facebook_logo from '../images/fblogo.png'
import spotify_logo from '../images/spotify.png'


import * as footerStyles from './footer.module.scss'

function Footer() {
  return (
    <footer>
      <Container fluid className={footerStyles.containerFluid}>
        <Row>
          <Col className="d-flex justify-content-center mt-3 mb-1">  {/* having one Col will auto set to width 12 */}
            <img src={httc} fluid="true" width={45} height={50} alt="Httc" />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-2 mb-3">
          <Col md="auto" className="d-flex justify-content-center">
            <p className={footerStyles.footerLinks}><Link to="/about">
              ABOUT
            </Link>
            </p>
          </Col >

          <Col md="auto" className="d-flex justify-content-center">
            <p className={footerStyles.footerLinks}><Link to="/contact">
              CONTACT
            </Link>
            </p>
          </Col>
          <Col md="auto" className="d-flex justify-content-center">
            <p className={footerStyles.footerLinks}><Link to="/clubs">
              PLAY
            </Link>
            </p>
          </Col>
          <Col md="auto">
            <div className="d-flex justify-content-center">
              <p className={footerStyles.footerLinks}>
                FOLLOW US
              </p>
            </div>
            <Row>
              <Col className={[footerStyles.socialLogo, "d-flex justify-content-center justify-content-md-start"].join(' ')}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img src={facebook_logo} fluid="true" alt="facebook" />
                </a>
                <a href="https://www.instagram.com/uwhuskyttc/" target="_blank" rel="noopener noreferrer">
                  <img src={instagram_logo} fluid="true" alt="instagram" />
                </a>
                {/* <a href="" target="_blank" rel="noopener noreferrer">
                  <img src={spotify_logo} fluid="true" alt="spotify" />
                </a> */}
              </Col>
            </Row>
          </Col>
        </Row>

        <div className={[footerStyles.footerEnd, "text-center"].join(' ')}>
          <p className="mb-0">Made by Ian with <span role="img" aria-label="heart">❤️</span> for UWHTTC</p>
          <p className="mb-0">Husky Table Tennis Club at University of Washington - Seattle</p>
        </div>
      </Container>
    </footer>
  )


}

export default Footer;