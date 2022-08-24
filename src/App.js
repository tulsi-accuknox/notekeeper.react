import { useEffect, useState } from "react";
import "./App.css";
import Notescontainer from "./components/Notescontainer/Notescontainer";
import Sidebar from "./components/Sidebar/Sidebar";




function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );


  ///////////////////////adding notes///////////////////////////////

  
    const addNote = (color) => {
      // console.log(color);
      const tempNotes = [...notes];
  
      tempNotes.push({
        id: Date.now() + "" + Math.floor(Math.random() * 78),
        text: "Hey! Write your note here.",
        time: Date.now(),
        title: "",
        color,
      });
  
    
      setNotes(tempNotes)
    
  };

  //////////////////////////////////////deleteing notes/////////////////////////

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };


  //////////////////////////////updating text////////////////////////////////////////

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  const updateTitle = (title, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].title = title;
    setNotes(tempNotes);
  };



  ////////////////////////////side effects for local storage/////////////////////////


  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);





  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <Notescontainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
        updateTitle={updateTitle}
      />
    </div>
  );
}

export default App;
