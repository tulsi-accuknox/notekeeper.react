import React from 'react'
import { useState } from 'react'
import './Sidebar.css'


//////////////////////////////////siderbar where we can choose color of the note //////////////////////////////

function Sidebar(props) {
const colors = ["#3B1D7B4", "#B9FFF8", "#FFF38C", "#F29393",  "#CFE8A9", "#FF87B2", "#AFB4FF", "#AF7AB3", "#C4D7E0", "#D8CCA3", "#FFB562"]
const [listOpen, setListOpen] = useState(false);
  return (
    <div className='sidebar'>
      <i class='bx bxs-plus-circle bx-rotate-90' onClick={() => setListOpen(!listOpen)}></i>
        <ul className= {`sidebar_list ${listOpen ? "sidebar-active" : ""}`}>
            {
              colors.map((item, index) => (
                <li 
                key = {index}
                className="sidebar_list_items"
                style= {{backgroundColor: item}}
                onClick={() => props.addNote(item)}
                 />
              ))}
        </ul>
    </div>
  )
}

export default Sidebar


