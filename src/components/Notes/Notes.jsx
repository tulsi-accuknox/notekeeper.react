import React, { useState } from "react";
import { useEffect } from "react";
import "./Notes.css";

///////////////////////////single note /////////////////

let timer = 500,
  timeout;
function Notes(props) {
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    setTitle(e.target.value);
    console.log("the input value is:", e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("text", title);
  });

  //////////////////////////////////////for timestamp ////////////////////////////////////////////

  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();

    const month = months[date.getMonth()];
    return `${hrs} : ${min} ${amPm} ${day} ${month}`;
  };

  //////////////////////debounce fot text///////////////////////////////

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  const updateTitle = (title, id) => {
    debounce(() => props.updateTitle(title, id));
  };



  /////////////////////////////////return function //////////////////////////////////////

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        placeholder="Title"
        defaultValue={props.note.title}
        onChange={(event) => updateTitle(event.target.value, props.note.id)}
      />

      <textarea
        className="note_textarea"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />

      <div className="note_footer">
        <p className="note_para">{formatDate(props.note.time)}</p>
        
        <img
          src="/images/bin.png"
          alt=""
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Notes;
