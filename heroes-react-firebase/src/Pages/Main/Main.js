import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { handleNew, handleEdit, handleDelete, handleAvengers, handleXmen, handleDefenders } from "../../utils";
import db from "../../firebase";
import { Link } from "react-router-dom";

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
      <div>
         <Link to="/">Back</Link>
         <button onClick={handleNew}>New</button>
         <ul>
            {heroes.map((hero) => (
               <li key={hero.id}>
                  <button onClick={() => handleEdit(hero.id)}>edit</button>
                  <button onClick={() => handleDelete(hero.id)}>delete</button>
                  {hero.name} - {hero.alias} - {hero.team}
               </li>
            ))}
         </ul>
         <div>
            <button onClick={handleAvengers}>Avengers</button>
            <button onClick={handleXmen}>X-Men</button>
            <button onClick={handleDefenders}>Defenders</button>
         </div>
      </div>
   )
};

export default Main;