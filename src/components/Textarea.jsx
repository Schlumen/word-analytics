import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = e => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("No scripts allowed");
      newText = newText.replaceAll("<script>", "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        onChange={handleChange}
        value={text}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
