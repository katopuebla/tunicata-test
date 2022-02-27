import React, { useContext } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { ProductContext } from '../../contexts/productContext';

const ProductDetailView = () => {
    const { productDetail, setProductDetail, isEdit, setImagesAsFile } = useContext(ProductContext);

    const setItem = name => {
        return ({ target: { value } }) => {
            setProductDetail(oldValues => ({ ...oldValues, [name]: value }));
        }
    };

    const handleImageAsFile = (e) => {
        const images = e.target.files;
        setImagesAsFile(images)
      }

    if (isEdit) {
        return (
            <React.Fragment>
                <br />
                <InputGroup >
                    <InputGroup.Text id="inputGroup-sizing-default">Diseño</InputGroup.Text>
                    <FormControl type="text" id="type" size="sm" defaultValue={productDetail.type} onChange={setItem('type')} />
                </InputGroup>
                <br />
                <InputGroup >
                    <InputGroup.Text id="inputGroup-sizing-default">Descripción</InputGroup.Text>
                    <FormControl as="textarea" id="description" size="sm" defaultValue={productDetail.description} onChange={setItem('description')} />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <FormControl type="number" id="price" size="sm" defaultValue={productDetail.price} onChange={setItem('price')} />
                    <InputGroup.Text>MXN</InputGroup.Text>
                    <br />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl type="file" id="images" multiple size="sm" onChange={handleImageAsFile} />
  </InputGroup>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <b>Diseño:</b> {productDetail.type}
                <br />
                <b>Descripción:</b> {productDetail.description}
                <br />
                <mark>
                    <b>
                        <NumberFormat
                            thousandSeparator={true}
                            prefix={"$ "}
                            value={productDetail.price}
                            displayType={"text"}
                            suffix={" MXN"}
                            style={{ color: "purple" }}
                        />
                    </b>
                </mark>
            </React.Fragment>
        );
    }
}

export default ProductDetailView;