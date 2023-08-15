import "../fileFolderList/fileFolderList.css";

const Help = ({ list }) => {
   return (
      <div className="flexContainer" style={{ flexDirection: "column" }}>
         <h4 className="flexItem" style={{ color: "white" }}>
            cd [folder name] :{" "}
            <span style={{ color: "#637CFF" }}>To open that folder</span>
         </h4>
         <h4 className="flexItem" style={{ color: "white" }}>
            cd .. :{" "}
            <span style={{ color: "#637CFF" }}>
               To go back to the previos folder
            </span>
         </h4>
         <h4 className="flexItem" style={{ color: "white" }}>
            ls :{" "}
            <span style={{ color: "#637CFF" }}>
               To see the contents of the current folder
            </span>
         </h4>
         <h4 className="flexItem" style={{ color: "white" }}>
            cat [file name.txt] :{" "}
            <span style={{ color: "#637CFF" }}>To see the text file</span>
         </h4>
      </div>
   );
};

export default Help;
