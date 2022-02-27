import React, { useContext } from 'react';
import { Modal, Button, Card, Col, Row, Carousel } from 'react-bootstrap';
import AlertProduct from '../../components/AlertProduct';
import FooterProduct from '../../components/FooterProduct';
import { GeneralContext } from '../../contexts/generalContext';
import { ProductContext } from '../../contexts/productContext';
import ProductDetailView from './productDetailView';

const ProductView = ({ urlImage, onSubmit, onSelectImageUrl, renderEdit, onCloseEdit, showDelete, setShowDelete, handleDelete }) => {
    const { productDetail } = useContext(ProductContext);
    const { isMobile } = useContext(GeneralContext);

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <Card fluid>
                    <Card.Title>{productDetail.title}</Card.Title>
                    <Card.Body>
                        <AlertProduct />
                        <Row className="justify-content-md-center">
                            <Col md={6}>
                                {isMobile ? (
                                    <Row>
                                        <Col sm={8}>
                                            <Carousel>
                                                {
                                                    productDetail && productDetail.images.map((url) => {
                                                        return <Carousel.Item>
                                                            <Card.Img width="90%" height="200"
                                                                src={url}
                                                                className="img"

                                                            />
                                                        </Carousel.Item>
                                                    })
                                                }
                                            </Carousel>
                                        </Col>
                                    </Row>
                                ) : (
                                    <Row>
                                        <Col md={2}>
                                            {
                                                productDetail && productDetail.images.map((url) => {
                                                    return <Card.Img width="1%" height="auto"
                                                        src={url}
                                                        className="img"
                                                        onClick={() => onSelectImageUrl(url)}
                                                    />
                                                })
                                            }
                                        </Col>
                                        <Col md={8}>
                                            <Card.Img src={urlImage} width="auto" height="300" />
                                        </Col>
                                    </Row>
                                )}

                            </Col>
                            <Col md={6}>
                                <Card.Text>
                                    <ProductDetailView />
                                    <br />
                                    {/* <b>Talla</b> */}
                                    {/*<blockquote>{sizes}</blockquote>*/}
                                </Card.Text>
                                <div className="d-flex justify-content-end">
                                    {renderEdit()}
                                </div>
                                <FooterProduct onCloseEdit={onCloseEdit} />
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </form>
            <Modal
                size="sm"
                show={showDelete}
                onHide={() => setShowDelete(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Remove
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>do you want to remove it ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDelete(false)}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default ProductView;