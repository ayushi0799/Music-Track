import React from 'react';
import Data from "./Data.json";
import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import axios from 'axios';


function MainContent() {
    
    const [Likebtn, LikebtnClicked]=useState()
    const [data, setData]=useState([{id:"",like:"",title:"",subtitle:""},]);
    const [alldata, setAllData]=useState([{id:"",like:"",title:"",subtitle:""},]);
    const Setvalue = (num,key,flag) => {
       if(true)
       {
        LikebtnClicked(num++)
        Data[key].like=num++
        
        flag=false
       }
    }
    
    const RemoveSong= id=>{
        delete Data[id-1]
       setData(data.filter((eachdata)=>eachdata.id!== eachdata));
       setAllData(data.filter((eachdata)=>eachdata.id!== eachdata));
    }
   

    return (
        <div className="MainContent">
          {Data.map((val,key) => {
              let flag=true
              let lbutton="Like"
                     return(
                        <div className="Box">
                            <div className="container">

                                <div className="LikeButton">
                                <p className="number">{val.like}</p>
                                    <button className="Like"  type="submit" onClick={()=>Setvalue(val.like,key,flag)}>{lbutton}</button>
                                    
                                </div>
                                <div className="songname">
                                    <p className="title">{val.title} </p> 
                                    <p className="subtitle">{val.subtitle}</p>
                                </div>
                                <div className="player">
                                         <ReactPlayer
                                            url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
                                            width="400px"
                                            height="50px"
                                            playing={false}
                                            controls={true}
                                            
                                        />
                                </div>
                                <div className="DeleteSong">
                                    <button type="submit" className="Drop-Btn" onClick={()=> RemoveSong( val.id ) }>
                                       
                                        <p>Remove Song</p>
                                        
                                    </button>
                                </div>
                    
                               
                        
                               
                            </div>
                        </div>
                     );
                 })} 
        </div>
    )
}


export default MainContent
