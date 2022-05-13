//start of a useParams component, not working
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../../firebase";

function Hero() {
   
   const [heroInfo, setHeroInfo] = useState([{name: "Loading...", id: "initial"}]);

   //probably vv wrong
   useEffect((id) => {
      const collectionRef = collection(db, "heroes");
      //probably wrong syntax below                  vvvv
      const q = query(collectionRef, where(id, "==", {id}));

      const unsub = onSnapshot(q, (snapshot) => 
         setHeroInfo(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      );

      return unsub;
   }, []);

   return (
      <div>
         <ul>
            {heroInfo.map((hero) => (
               <li key={hero.id}>
                  {hero.name} - {hero.alias} - {hero.team}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Hero;