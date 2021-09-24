import React, {useState,useEffect} from 'react'
import axios  from 'axios'


function AddSong() {
    
    const[emplist,updateemp]=useState([]);
    const getEmp= ()=>{
        
    }
    
    return (
        <div className="Add">
            <input type="text" className="SongName" />
            <button type="submit" className="Addbutton">
                Add Song
            </button>
        </div>
    )
}

export default AddSong
