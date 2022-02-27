import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const AlertPage = ({ typeAlert, message }) => {

    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);

    if (typeAlert == 'success') {
        setShowAlert(true);
    } else if (typeAlert == 'error') {
        setShowAlertError(true)
    }

    return (
        <React.Fragment>
            <Alert show={showAlert || false} variant='success' onClose={() => {
                setShowAlert(false);
            }} dismissible>
                {message || 'se ejecutó existosamente!!'}
            </Alert>
            <Alert show={showAlertError || false} variant='danger' onClose={() => {
                setShowAlertError(false);
            }} dismissible>
                {message || 'Error, no fué completado !!'}
            </Alert>
        </React.Fragment>
    );

}

export default AlertPage;