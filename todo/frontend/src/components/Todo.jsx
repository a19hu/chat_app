import axios from "axios";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
export default function Todo({text, id, setUpdateUI, setShowPopup, setPopupContent}) {
    const deleteTodo = () => {
        axios.delete(`http://localhost:5000/api/delete/${id}`).then((res) => {
          console.log(res.data);
          setUpdateUI((prevState) => !prevState);
        });
      };

      const updateToDo = () => {
        setPopupContent({ text, id });
        setShowPopup(true);
      };
  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <AiFillEdit className="icon" onClick={updateToDo} />
        <RxCross1 className="icon" onClick={deleteTodo} />
      </div>
    </div>
  )
}
