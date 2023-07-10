import { initializeApp } from "firebase/app";

//database
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
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
  appId: "1:534661300122:web:f2a25e1b040279d6bcc423"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
                                        //users
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.categorie)
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log("done")
}