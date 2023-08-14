import Prompt from "../../components/prompt/prompt";
import { useState, useEffect, useRef } from "react";

const Home = () => {
   const [displayElem, changeElem] = useState([]);

   const keyRef = useRef(1);

   useEffect(() => {}, [displayElem]);

   const onEnter = (e) => {
      if (e.key === "Enter") {
         changeElem((value) => {
            const anotherPrompt = (
               <Prompt key={keyRef.current} onEnter={onEnter} />
            );
            keyRef.current++;
            return [...value, anotherPrompt];
         });
      }
   };

   return (
      <div>
         <div className="commandsContainer">
            <Prompt key={"0"} onEnter={onEnter} />
            {displayElem.map((elem) => elem)}
            {console.log(displayElem)}
         </div>
      </div>
   );
};

export default Home;
