//start of a useParams component, not working
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";

function Hero() {
   
   const [heroInfo, setHeroInfo] = useState([{ name: "Loading...", id: "initial" }]);
   const { id } = useParams();
   console.log(id);
   
   useEffect(() => {
      const collectionRef = collection(db, "heroes");
      //either the 'collectionRef' needs to be adjusted or the q/where method
      console.log("Hero ID : " + collectionRef);
      const q = query(collectionRef, where("id", "==", id));

      const unsub = onSnapshot(q, (snapshot) =>
         setHeroInfo(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
         );
      
   return unsub;
   }, [id]);

   return(
      <div>
         <ul>
            {heroInfo.map((hero) => (
               <li key={hero.id}>
                  {hero.name} - {hero.alias} - {hero.team}
               </li>
            ))}
         </ul>
      </div>
   )
};

export default Hero;