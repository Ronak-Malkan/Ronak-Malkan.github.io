import "./prompt.css";

const prompt = ({ onEnter }) => {
   return (
      <div>
         <h3 className="prompt">
            <span style={{ color: "#6EFD6C" }}>ronak_malkan:</span>
            <span style={{ color: "#637CFF" }}>~/code</span> ${" "}
         </h3>
         <input
            onKeyDown={onEnter}
            autoFocus
            type="text"
            id="command"
            name="command"
         />
      </div>
   );
};

export default prompt;
