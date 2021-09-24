import Data from "./Data.json";
import React from 'react';
import { useState } from "react";





function SearchBar() {
    const [searchTerm, setSearchTerm]=useState("")
    return (
        <div>

           <input className="SearchBar" type="text" placeholder="Search the song!" onChange={(event) => {setSearchTerm(event.target.value) }} />
                 {Data.filter((val) => {
                     if(searchTerm == ""){
                        return 0
                     }
                     else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                 }
                 ).map((val)=>{
                     return(
                         <div className="SearchElements">{val.title}</div>
                     );
                 })                 
                 }
        </div>
    )
}

export default SearchBar



