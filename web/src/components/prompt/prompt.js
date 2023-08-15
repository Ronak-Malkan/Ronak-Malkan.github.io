import "./prompt.css";

const prompt = ({ passRef, onEnter, giveId, promptPath }) => {
   return (
      <div>
         <h3 className="prompt">
            <span style={{ color: "#6EFD6C" }}>ronak_malkan:</span>
            <span style={{ color: "#637CFF" }}>{promptPath}</span> ${" "}
         </h3>
         <input
            ref={passRef}
            className="command"
            onKeyDown={onEnter}
            autoFocus
            type="text"
            id={giveId}
         />
      </div>
   );
};

export default prompt;
