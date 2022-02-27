import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const handleError = (err) => {
    console.warn(err);
    return undefined;
};

const imageUpload = async (collection, imageAsFile) => {
    var fireBaseUrl = "";
    if (imageAsFile) {
        var storageRef = ref(storage, `/images/Catalogs/${collection}/${imageAsFile.name}`);
        fireBaseUrl = await getDownloadURL(storageRef).catch(handleError);
        if (!fireBaseUrl) {
            await uploadBytes(storageRef, imageAsFile);
            fireBaseUrl = await getDownloadURL(storageRef);
        }
    }
    return fireBaseUrl;
}

const imagesUpload = async (collection, imagesAsFile ) => {
    let fireBaseUrls = [];
    for( const file of (imagesAsFile)) {
        const image = await imageUpload(collection, file);
        if(image)
            fireBaseUrls.push( image );
    }
    return fireBaseUrls;
}


//export default ProductService;
export default {
    imageUpload, imagesUpload
};