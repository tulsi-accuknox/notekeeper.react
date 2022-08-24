import React from 'react'
import Notes from '../Notes/Notes'
import './Notescontainer.css'

///////////////////////////for all notes//////////////////////////


function Notescontainer(props) {

  //////////////////////////for showing new note first/////////////////////////////
    const reverseArray = (arr) => {
        const array= []

        for(let i=arr.length-1; i>=0; --i){
            array.push(arr[i])
        }

        return array
    };

    const notes = reverseArray(props.notes);


  return (
    <div className='note-container'>
        <h1>Smiley Notes</h1>
       <div className="note-container_notes custom-scroll">
        {notes ?.length > 0 ?( 
          notes.map((item) => 
         <Notes key={item.id} note={item}
         deleteNote = {props.deleteNote}
         updateText = {props.updateText}
         updateTitle = {props.updateTitle}
         />)
         ) : (<h3>Hey Welcome to Smiley Notes 😊 <br/><br/>💡Notes you write will get added here.</h3>) }
       </div>
    </div>
  )
}

export default Notescontainer