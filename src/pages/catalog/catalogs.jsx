import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

//import { Products } from "../../catalogs.json";
import Products from "../../services/Products-service";
import CatalogView from "./CatalogView";
import CardCatalog from "../../components/CardCatalog";
import { ProductContext } from "../../contexts/productContext";
import { GeneralContext } from "../../contexts/generalContext";

const Catalogs = () => {

  let { catalogId } = useParams();
  const history = useHistory();

  const [catalogs, setCatalogs] = useState([]);
  const { productDetail, setProductDetail } = useContext( ProductContext );
  //const [catalogId, setCatalogId] = useState(useParams());
  const [show, setShow] = useState(false);
  const { isMobile } = useContext(GeneralContext);

  //functions
  const handleClose = () => setShow(false);
  const handleShowCatalog = (catalog) => {
    setProductDetail(catalog);
    history.push(`/product/${catalogId}/${catalog.title}`)
    //setShow(true);
  };

  async function fetchProducts() {
    const listData = [];
    const infoData = await Products.getProductById(catalogId);
    // filter only one field in Collections
    infoData && infoData.detail.forEach( data => {
      const collections = data;
      if ( collections )
        listData.push(collections);
    });
    setCatalogs(listData); 
   }

  useEffect( async () => {
    fetchProducts();
    //setCatalogs(conllection.detail);
  }, []);

  const showCatalogos = catalogs && catalogs.map((catalog, i) =>
    <CardCatalog catalog={catalog} onShowCatalog={handleShowCatalog} key={i} isMobile={isMobile} />
  );

  return (
      <CatalogView
        showCatalogos={showCatalogos} productDetail={productDetail} catalogId={catalogId} />
  );
}

export default Catalogs;
