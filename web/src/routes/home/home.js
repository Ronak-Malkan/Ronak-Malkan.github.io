import Prompt from "../../components/prompt/prompt";
import Help from "../../components/help/help";
import FileFolderList from "../../components/fileFolderList/fileFolderList";
import AboutMe from "../../components/aboutMe/aboutMe";
import Projects from "../../components/Projects/Projects";
import Experience from "../../components/Experience/Experience";
import Hobbies from "../../components/Hobbies/hobbies";
import ContactMe from "../../components/ContactMe/ContactMe";

import { useState, useEffect, useRef } from "react";

const Home = () => {
   const [displayElem, changeElem] = useState([]);
   let promptPath = "~";

   const textFileToComponent = new Map();

   textFileToComponent.set("About_Me.txt", <AboutMe />);
   textFileToComponent.set("Projects.txt", <Projects />);
   textFileToComponent.set("Experience.txt", <Experience />);
   textFileToComponent.set("Hobbies.txt", <Hobbies />);
   textFileToComponent.set("Contact_Me.txt", <ContactMe />);

   const textFiles = [
      "About_Me.txt",
      "Projects.txt",
      "Experience.txt",
      "Hobbies.txt",
      "Contact_Me.txt",
   ];

   const keyRef = useRef(0);
   const elemRef = [];
   elemRef.push(useRef(null));

   useEffect(() => {}, [displayElem]);

   const findCommand = (command) => {
      keyRef.current++;
      if (command === "help") {
         return <Help key={keyRef.current} />;
      } else if (command === "ls") {
         if (promptPath === "~") {
            return <FileFolderList key={keyRef.current} list={["home"]} />;
         } else {
            return <FileFolderList key={keyRef.current} list={textFiles} />;
         }
      }
      let spaceIndex = command.indexOf(" ");
      let arg1 = command.substring(0, spaceIndex);
      let arg2 = command.substring(spaceIndex + 1);
      if (arg1 === "cd") {
         if (arg2 === "home") promptPath = "~/home";
         else if (arg2 === "..") promptPath = "~";
         return null;
      }
      if (
         arg1 === "cat" &&
         textFiles.includes(arg2) &&
         promptPath === "~/home"
      ) {
         return textFileToComponent.get(arg2);
      }

      return null;
   };

   const onEnter = (e) => {
      if (e.key === "Enter") {
         const commandRes = findCommand(e.target.value);
         keyRef.current++;
         changeElem((value) => {
            const anotherPrompt = (
               <Prompt
                  passRef={elemRef[keyRef.cu]}
                  key={keyRef.current}
                  onEnter={onEnter}
                  giveId={keyRef.current}
                  promptPath={promptPath}
               />
            );
            if (commandRes != null)
               return [...value, commandRes, anotherPrompt];
            else return [...value, anotherPrompt];
         });
      }
   };

   return (
      <div>
         <h4 className="help">Type 'help' to see commands and their uses.</h4>
         <div className="commandsContainer">
            <Prompt
               passRef={elemRef[keyRef]}
               key={"0"}
               onEnter={onEnter}
               giveId={"0"}
               promptPath={promptPath}
            />
            {displayElem.map((elem) => elem)}
         </div>
      </div>
   );
};

export default Home;
