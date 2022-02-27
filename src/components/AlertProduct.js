import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { ProductContext } from '../contexts/productContext';

const AlertProduct = () => {

    const { 
        showAlert, setShowAlert,
        showAlertError, setShowAlertError,
        setShowEdit,
      } = useContext(ProductContext);

    return (
        <React.Fragment>
            <Alert show={showAlert || false} variant='success' onClose={() => {
                setShowAlert(false);
                setShowEdit(true);
            }} dismissible>
                Se guardó existosamente!!
        </Alert>
            <Alert show={showAlertError || false} variant='danger' onClose={() => {
                setShowAlertError(false);
                setShowEdit(true);
            }} dismissible>
                Error en el guardado!!
        </Alert>
        </React.Fragment>
    );
}

export default AlertProduct;