import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ProductContext } from '../contexts/productContext';

const FooterProduct = ({onCloseEdit}) => {

    const { isEdit } = useContext(ProductContext);

        if (isEdit) {
            return (
              <Modal.Footer>
                <Button variant="secondary" onClick={onCloseEdit}>Cerrar</Button>
                <Button variant="primary" type="submit">Guardar</Button>
              </Modal.Footer>
            );
          } else {
            return (
              <Modal.Footer>
              </Modal.Footer>
            );
          }
}
 
export default FooterProduct;