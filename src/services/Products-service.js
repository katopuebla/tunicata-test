import { firebaseApp, db } from "../firebase";
import { collection, doc, setDoc, getDoc, getDocs, updateDoc } from 'firebase/firestore';

    const COLLECTION = 'Products';
    const itemsRef = collection(db, COLLECTION);

    const getAll = async () => {
        //const infoData = [];
        const items = await getDocs(itemsRef);
        const infoData = items.docs.map(doc => doc.data());
        /*docs.forEach(doc => {
            infoData.push(doc.data());
        });*/
        return infoData;
    };

    const getIds = async () => {
        //const infoData = [];
        const items = await getDocs(itemsRef);
        const idData = items.docs.map(doc => doc.id);
        /*docs.forEach(doc => {
            infoData.push(doc.data());
        });*/
        return idData;
    };

    const getProductById = async (key) => {
        const docRef = doc(db, COLLECTION, key);
        const infoData = await getDoc(docRef);
        return infoData.data();
    };

    const findProductDetail = async (key, title) => {
       const docRef = doc(db, COLLECTION, key);
        const infoData = await getDoc(docRef);
        const data = infoData.data();
        let detail = {};
        data && data.detail.forEach(det => {
            if (det.title == title) {
                detail = det;
              }
        })
        return detail;
    };

    const isExitProductDetail = async (key, title) => {
        var exist = false;
        const detail =  await findProductDetail(key, title);
        if ( detail && detail.title == title) {
                exist = true;
        }
        return exist;
    }
/*
    const getProduct = async (collection, title) => {
       var ref = itemsRef.doc(collection).collection('detail');
        var query = ref.where("title", "==", title).limit(1);
        let product = await query.get().then( (item) => {
              console.log(item.docs[0].id, ' => ', item.docs[0].data());
              return item.docs[0].data();
          }).catch( error => {
            console.log(error)
          });
        return product;
        return null;
    };
*/
    const save = async (key, data) => {
        //return itemsRef.add(data);
        return await setDoc(doc(db, COLLECTION, key), data);
    };

   /*const update = async (key, data) => {
        return await itemsRef.doc(key).update(data);
    };*/

    const remove = async (key) => {
        return await itemsRef.doc(key).remove();
    };

    const removeAll = async () => {
        return await itemsRef.remove();
    };

//export default ProductService;
export default {
  getAll,
  getIds,
  getProductById,
  findProductDetail,
  isExitProductDetail,
 // getProduct,
  save,
//  update,
  remove,
  removeAll,
};