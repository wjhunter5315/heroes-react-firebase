import { async } from "@firebase/util";
import { 
   addDoc, 
   collection, 
   deleteDoc, 
   doc, 
   serverTimestamp, 
   updateDoc, 
   query, 
   where, 
   getDocs
} from "firebase/firestore";
import db from "./firebase";

export const handleNew = async () => {
   const name = prompt("Enter Hero's Name");
   const alias = prompt("Enter The Hero's Alias");
   const team = prompt("Enter The Hero's Team");

   const collectionRef = collection(db, "heroes");
   const payload = { name, alias, team, timestamp: serverTimestamp() };

   const docRef = await addDoc(collectionRef, payload);
   console.log("New ID : " + docRef.id);
};

export const handleEdit = async (id) => {
   const name = prompt("Change Hero's Name: ");
   const alias = prompt("Change Hero's Alias: ");
   const team = prompt("Change Hero's Team: ");

   const docRef = doc(db, "heroes", id);
   const payload = { name, alias, team, timestamp: serverTimestamp() };

   updateDoc(docRef, payload);
};

export const handleDelete = async (id) => {
   const docRef = doc(db, "heroes", id);
   await deleteDoc(docRef);
};

export const handleAvengers = async () => {
   const collectionRef = collection(db, "heroes");
   const q = query(collectionRef, where("team", "==", "Avengers"));

   const snapshot = await getDocs(q);
   const results = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
   
   let i;
   let listAvengers = "";
   
   for (i = 0; i < results.length; i++) {
      listAvengers += results[i].alias + ", ";
   };
   console.log(results);
   console.log(listAvengers);
};

export const handleXmen = async () => {
   const collectionRef = collection(db, "heroes");
   const q = query(collectionRef, where("team", "==", "X-Men"));

   const snapshot = await getDocs(q);
   const results = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
   
   let i;
   let listXmen = "";
   
   for (i = 0; i < results.length; i++) {
      listXmen += results[i].alias + ", ";
   };
   console.log(listXmen);
};

export const handleDefenders = async () => {
   const collectionRef = collection(db, "heroes");
   const q = query(collectionRef, where("team", "==", "Defenders"));

   const snapshot = await getDocs(q);
   const results = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
   
   let i;
   let listDefenders = "";
   
   for (i = 0; i < results.length; i++) {
      listDefenders += results[i].alias + ", ";
   };
   console.log(listDefenders);
};