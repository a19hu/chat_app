import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from './components/Todo';
import Popup from './components/Popup';
function App() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});



    useEffect(() => {
      axios.get("http://localhost:5000/api/get")
      .then((res) => {
          console.log(res.data);
          setToDos(res.data); 
      })
      .catch((err) => {
        console.log(err);
    })
  },[updateUI])
  const saveToDo = () => {
    axios.post("http://localhost:5000/api/save", { todo: input })
    .then((res) => {
        console.log(res.data);
        setInput("");
    })
    .catch((err) => {
      console.log(err);
  })
  }
  return (
    <main>
    <div className="container">
      <h1 className="title">ToDo App</h1>

      <div className="input_holder">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"Popup
          placeholder="Add a ToDo..."
        />
        <button onClick={saveToDo}>Add</button>
      </div>

      <div className="list">
        {toDos.map((el) => (
          <Todo
            key={el._id}
            text={el.todo}
            id={el._id}
            setUpdateUI={setUpdateUI}
            setShowPopup={setShowPopup}
            setPopupContent={setPopupContent}
          />
        ))}
      </div>
    </div>
    {showPopup && (
      <Popup
        setShowPopup={setShowPopup}
        popupContent={popupContent}
        setUpdateUI={setUpdateUI}
      />
    )}
  </main>
  );
}

export default App;
