import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import db from "../../firebase";

function Avengers() {
   const [heroes, setHeroes] = useState([{ name: "Loading...", id: "initial"}]);

   useEffect(() => {
      const collectionRef = collection(db, "heroes");
      const q = query(collectionRef, where("team", "==", "Avengers"));

      const unsub = onSnapshot(q, (snapshot) =>
         setHeroes(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
         );
      
   return unsub;
   }, []);
   
   return (
      <div>
         <ul>
            {heroes.map((hero) => (
               <li key={hero.id}>
                  {hero.name} - {hero.alias} - {hero.team}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Avengers;