import "./Main.css";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleNew, handleEdit, handleDelete, handleInfo } from "../../utils";
import db from "../../firebase";

function Main() {
   const [heroes, setHeroes] = useState([{ name: "Loading...", id: "initial"}]);

   useEffect(() => {
      const collectionRef = collection(db, "heroes");
      const q = query(collectionRef, orderBy("timestamp", "desc"));

      const unsub = onSnapshot(q, (snapshot) =>
         setHeroes(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
         );
      
   return unsub;
   }, []);

   return (
      <div className="main">
         <button onClick={handleNew}>New</button>
         <ul>
            {heroes.map((hero) => (
               <li key={hero.id}>
                  <button onClick={() => handleEdit(hero.id)}>edit</button>
                  <button onClick={() => handleDelete(hero.id)}>delete</button>
                  {hero.name} - {hero.alias} - {hero.team}
                  <button onClick={() => handleInfo(hero.id)}>
                     <Link to={"/" + hero.id}>view</Link>
                  </button>
               </li>
            ))}
         </ul>
      </div>
   )
};

export default Main;