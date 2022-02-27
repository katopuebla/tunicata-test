import React from 'react';
import { Image, Button, Col } from 'react-bootstrap';

const imageMain = "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FTunicata.jpg?alt=media&token=06ef0868-51b0-42b1-a7b9-1bf819e4b813"

const CardMenu = ({ item, index, onCatalogClick, isMobile }) => (
    <Col>
        <center>
        <Button variant="link" type="button" onClick={() => onCatalogClick(item.name)}>
            <Image ariant="top" rounded src={item.url} style={{ width: 'auto', height: '80' }} />
        </Button>
        
        <h6>{item.name}</h6>
        </center>
    </Col>
)

export default CardMenu;