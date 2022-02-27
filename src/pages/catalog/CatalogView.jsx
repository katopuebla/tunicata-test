import React from 'react';
import { Modal, Row } from 'react-bootstrap';
import Product from '../product/product';

const CatalogView = ({showCatalogos, show, onClose, catalogId}) => (
    <React.Fragment>
        <Row xs={2} md={4} lg={6} className="justify-content-md-center">
            {showCatalogos}
        </Row>
    </React.Fragment>
)

export default CatalogView;