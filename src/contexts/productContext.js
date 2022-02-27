import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [productDetail, setProductDetail] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [urlImage, setUrlImage] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);
    const [showEdit, setShowEdit] = useState(true);
    const [imagesAsFile, setImagesAsFile] = useState([]);

    return (
        <ProductContext.Provider value={{
            productDetail, setProductDetail,
            isEdit, setIsEdit,
            urlImage, setUrlImage,
            showAlert, setShowAlert,
            showAlertError, setShowAlertError,
            showEdit, setShowEdit,
            imagesAsFile, setImagesAsFile,
        }}>
            { children}
        </ProductContext.Provider>
    )
}