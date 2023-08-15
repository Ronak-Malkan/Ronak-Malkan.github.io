import "./fileFolderList.css";

const FileFolderList = ({ list }) => {
   return (
      <div className="flexContainer">
         {list.map((value, index) => {
            return (
               <h4 key={index} className="flexItem">
                  {value}
               </h4>
            );
         })}
      </div>
   );
};

export default FileFolderList;
