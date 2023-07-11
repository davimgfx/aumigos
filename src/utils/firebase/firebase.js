import { initializeApp } from "firebase/app";

//database
import {
  getFirestore,
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXOARURoYifUEJvKnsD98CbJLghgihnIM",
  authDomain: "aumigos-19160.firebaseapp.com",
  projectId: "aumigos-19160",
  storageBucket: "aumigos-19160.appspot.com",
  messagingSenderId: "534661300122",
  appId: "1:534661300122:web:f2a25e1b040279d6bcc423",
};

initializeApp(firebaseConfig);
const db = getFirestore();

//add to the firebase database

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //users
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.categorie);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

//get the products from the firebase database
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "products");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { categorie, items } = docSnapshot.data();
    acc[categorie] = items;
    return acc;
  }, []);

  return categoryMap;
};
