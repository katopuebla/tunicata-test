import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
//import { storage } from "../firebase";
import { Container, Row, Image, Carousel, Alert, Button, Col } from 'react-bootstrap';

//import { Products } from "../catalogs.json";
import Products from "../services/Products-service";
import Catalogs from "../services/Catalogs-service";
import { Carrusels, CarruselsText } from "../initial.json";

import HomeView from "./HomeView";
import CardMenu from "../components/CardMenu";
import { GeneralContext } from "../contexts/generalContext";
import bannerShort from "../components/bannerShort";

const Home = () => {

  const history = useHistory();
  const carrusel = Carrusels;
  const carruselText = CarruselsText;
  const [catalogs, setCatalogs] = useState([]);
  const { isMobile } = useContext(GeneralContext);

  async function getCollection() {
    const list = [];
    const data = await Catalogs.getDataById("Collection");
    setCatalogs(data.detail);
  }

  useEffect(async () => {
    getCollection();
  }, []);

  const handleCatalogClick = (_catalogName =>
    history.push(`/catalogs/${_catalogName}/`)
  );

  const showCarrusel = carrusel.map((catalog, index) => {
    return (
      <Carousel.Item key={index} fluid>
        <Row className="justify-content-lg-center">
          <Col  >
            {isMobile ? (
              <Image className="d-block w-100" alt="slide" src={catalog.url} />
            ) : (
              <Image className="d-block w-100" alt="slide" src={catalog.url} style={{ width: '80%', height: '80%' }} />
            )}
          </Col>
        </Row>
        {isMobile ? (<></>) : (
          <Carousel.Caption>
            <Row className="justify-content-lg-center">
              <Col >
                {bannerShort(catalog.description)}
              </Col>
            </Row>
          </Carousel.Caption>
        )}
      </Carousel.Item>)
  });
  const showCarruselText = carruselText.map((catalog, index) => {
    return (
      <Carousel.Item interval={5000} key={index}>
        <Row className="justify-content-lg-center">
          <Col >
            {bannerShort(catalog.description)}
          </Col>
        </Row>
      </Carousel.Item>)
  });
  /*
    const showProduct = products && products.map((item, index) => {
      const product = item;
      return (<CardMenu item={product} key={index} onCatalogClick={handleCatalogClick} isMobile={isMobile} />)
    });
  */
  const showCatalogs = catalogs && catalogs.map((item, index) => {

    return (<CardMenu item={item} key={index} onCatalogClick={handleCatalogClick} isMobile={isMobile} />)
  });

  return <HomeView showCarrusel={showCarrusel} showCarruselText={showCarruselText} showCatalogs={showCatalogs} isMobile={isMobile} />

}

export default Home;
