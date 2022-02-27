import React from 'react';
import { Card, Button, Col, Row, Container, Image, Figure } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

const CardCatalog = ({ catalog, onShowCatalog, isMobile }) => (
    <Col>
            <Card >
                <Button variant="link" type="button" className="justify-content-md-center" onClick={() => { onShowCatalog(catalog); }}>
                    <Image variant="top" src={catalog.url}
                        style={{ width: 'auto', height: '100' }} />
                </Button>
                <Card.Body>
                    <Card.Title>{catalog.title}</Card.Title>
                    <p>
                    <NumberFormat
                        thousandSeparator={true}
                        prefix={"$ "}
                        value={catalog.price}
                        displayType={"text"}
                        suffix={" MXN"}
                        style={{ color: "purple" }}
                    />
                    </p>
                </Card.Body>
            </Card>
    </Col>
)

export default CardCatalog;