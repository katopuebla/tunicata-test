import React, { useState, useEffect } from "react";
import AddProductView from "./addProductView";
import productService from "../../services/Products-service";
import catalogService from "../../services/Catalogs-service";
import fileService from "../../services/File-service";
import { Alert } from 'react-bootstrap';

  const FORM = {
    collection: '',
    title: '',
    name: '',
    url: '',
    type: '',
    description: '',
    price: 0,
    images: [
      {
      url: ''
      }
  ]
}

const AddProduct = ({ showAdd, setShowAdd }) => {

  const [showAlert, setShowAlert] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [showMessage, setShowMessage] = useState('');

  const [validated, setValidated] = useState(false);

  const handleClose = () => setShowAdd(false);
  const handleShow = () => setShowAdd(true);

  //const allInputs = { imgUrl: '' }
  const [imageAsFile, setImageAsFile] = useState([])
  //const [imageAsUrl, setImageAsUrl] = useState(allInputs)

  const [collection, setCollection] = useState([]);
  const [form, setForm] = useState(FORM);


  const [urlImage, setUrlImage] = useState('');

  async function getCollection() {
    const list = await catalogService.getDataById("Collection");
    setCollection(list.detail);
  }

  useEffect( async () => {
    getCollection();
   }, []);

  console.log(imageAsFile)
    const handleImageAsFile = (e) => {
    /* // only one file
    const images = e.target.files[0];
    setImageAsFile(imageFile => (images)) */ 
    const images = e.target.files;
    setImageAsFile(images)
  }

  const setItem = e => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setShowAlertError(false);
  }

  const handleSave = async e => {
    e.preventDefault();
    const currentForm = e.currentTarget;
    if (currentForm.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);

    const isExist = await productService.isExitProductDetail(form.collection, form.title);
    if(isExist) {
      console.log("Ya existe !!!");
      setShowMessage("Ya existe !!!");
      setShowAlertError(true);
      return;
    }

    const imgUrls = await fileService.imagesUpload(form.collection, imageAsFile);
    const newForm = form;
    newForm.type = form.title;
    newForm.url = imgUrls[0];
    newForm.images = imgUrls;
    newForm.type = form.title;
    //console.log('saving', newForm);
    var detail = [];
    const data = await productService.getProductById(form.collection);
    if (data){
      detail = (data.detail ? data.detail : []);
    }
    if(detail)
      detail.push(form);

    await productService.save(form.collection, { detail : detail});
    setShowAdd(false);
  }

  const showOptionCollection = collection && collection.map(v => {
    return (<option value={v.name}>{v.name}</option>);
  });

  const AlertAddProduct = () => {
    return (
      <React.Fragment>
          <Alert show={showAlert || false} variant='success' onClose={() => {
              setShowAlert(false);
          }} dismissible>
            {showMessage} | Se guardó existosamente!!
      </Alert>
          <Alert show={showAlertError || false} variant='danger' onClose={() => {
              setShowAlertError(false);
          }} dismissible>
             {showMessage} | Error en el guardado!!
      </Alert>
      </React.Fragment>
  );
  }

  return <AddProductView showAdd={showAdd}
    handleClose={handleClose}
    handleSave={handleSave}
    handleFile={handleImageAsFile}
    setItem={setItem} 
    setSelect={collection}
    showOption={showOptionCollection}
    AlertAddProduct={AlertAddProduct}
    validated={validated}
    />
}

export default AddProduct;
