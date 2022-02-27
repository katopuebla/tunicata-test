import { firebaseApp, db } from "../firebase";
import { collection, doc, setDoc, getDoc, getDocs, updateDoc } from 'firebase/firestore';

    const COLLECTION = 'Catalogs';
    const itemsRef = collection(db, COLLECTION);

    const getAll = async () => {
        const items = await getDocs(itemsRef);
        const infoData = items.docs.map(doc => doc.data());
        return infoData;
    };

    const getDataById = async (key) => {
        const docRef = doc(db, COLLECTION, key);
        const infoData = await getDoc(docRef);
        return infoData.data();
    };

    const isExit = async (key, title) => {
        var exist = false;
        const infoData =  await getDataById(key);
        infoData.detail.forEach(element => {
            if (element.title == title) {
                exist = true;
            }
        });
        return exist;
    }

    const create = async (key, data) => {
        return await setDoc(doc(db, COLLECTION, key), data);
    };

    const update = (key, data) => {
        return itemsRef.doc(key).update(data);
    };

    const remove = (key) => {
        return itemsRef.doc(key).remove();
    };

    const removeAll = () => {
        return itemsRef.remove();
    };

//export default ProductService;
export default {
  getAll,
  getDataById,
  isExit,
  create,
  update,
  remove,
  removeAll,
};