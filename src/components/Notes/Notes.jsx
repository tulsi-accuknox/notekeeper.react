import React from 'react'
import './Notes.css'


let timer= 500, timeout;
function Notes(props) {
    const formatDate = (value) => {
        if(!value) return "";

        const date = new Date(value);
        const months = ['January','Febuary', 'March','April','May','June','July','August','September','October','November','December']

        let hrs = date.getHours();
        let amPm = hrs > 12 ? "PM" : "AM";
        hrs = hrs ? hrs : "12";
        hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

        let min = date.getMinutes();
        min = min< 10 ? "0" + min : min;

        let day = date.getDate();

        const month = months[date.getMonth()]
        return `${hrs} : ${min} ${amPm} ${day} ${month}`;
    };

    const debounce = (func) => {
        clearTimeout(timeout)
        timeout = setTimeout(func, timer);
    }

    const updateText = (text,id) => {
        debounce(()  => props.updateText(text,id))};



  return (
    <div className='note' style={{backgroundColor:props.note.color}}>
        <textarea 
        className='note_textarea' 
        defaultValue={props.note.text}
        onChange = {(event) => updateText(event.target.value, props.note.id)}
        />
        <div className="note_footer">
            <p className="note_para">{formatDate(props.note.time)}</p>
            <img src="/images/bin.png" alt="" 
            onClick={() => props.deleteNote(props.note.id)}/>
        </div>
    </div>
  );
  }


export default Notes