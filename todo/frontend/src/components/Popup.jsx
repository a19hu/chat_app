import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Popup({ setShowPopup, popupContent, setUpdateUI }) {
    const [input, setInput] = useState(popupContent.text);
    const updateToDo = () => {
        axios
          .put(`http://localhost:5000/api/update/${popupContent.id}`, { todo: input })
          .then((res) => {
            console.log(res.data);
            setUpdateUI((prevState) => !prevState);
            setShowPopup(false);
          });
      };
  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  )
}
