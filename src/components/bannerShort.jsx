import React from 'react'
import { Alert, Col, Row, Image } from 'react-bootstrap';

const urlLeft = "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2Fhuella%20izquierda.png?alt=media&token=b7c0b1f4-0a4e-4b00-b168-64252e471f66";
const urlRight = "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2Fhuella%20derecha.png?alt=media&token=5d3fc905-9c90-4324-a31e-04e0683ba764";

const bannerShort = (description) => {
    return (
        <Alert variant={'light'}>
            <center>
                <Row>
                    <Col>
                        <Image src={urlLeft} style={{ width: '15', height: 'auto' }} />
                    </Col>
                    <Col xs={6}>
                        <h6>{description}</h6>
                    </Col>
                    <Col>
                        <Image src={urlRight} style={{ width: '15', height: 'auto' }} />
                    </Col>
                </Row>
            </center>
        </Alert>
    )
}

export default bannerShort
