import React from 'react';
import { Container, Carousel, Row } from 'react-bootstrap';

const HomeView = ({ showCarrusel, showCarruselText, showCatalogs, isMobile}) => (
  <Container fluid>
    <Carousel>
      {showCarrusel}
    </Carousel>
    {isMobile ? (
    <Carousel>
      {showCarruselText}
    </Carousel>
    ) : ( <></> )}
    <Row className="justify-content-lg-center" xs={2} md={4} lg={6}>
      {showCatalogs}
    </Row>
  </Container>
)

export default HomeView;