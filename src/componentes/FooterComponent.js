import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';

function FooterComponent() {
  return (
    <Navbar className="custom-bg" variant="dark">
      <Container className="justify-content-between">
        <Navbar.Text>
          © Copyright Universidad Católica Boliviana "San Pablo" Regional La Paz
        </Navbar.Text>
        <div className="social-icons">
          <a href="https://www.instagram.com/ucb.lapaz/" className="navbar-icon">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.facebook.com/UCB.BOLIVIA/" className="navbar-icon">
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
          </a>
          <a href="https://twitter.com/UCBLaPaz" className="navbar-icon">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default FooterComponent;
