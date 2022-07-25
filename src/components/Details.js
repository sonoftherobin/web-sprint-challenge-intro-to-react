import React, {useState} from "react";
export default function CharacterDetail(props){
    const [jediDetail, setJediDetail] = useState(null);
    console.log("hello")
    return <div>
                <h2>{props.name}</h2>
                    <img src ={props.world}/>
                    <p>{props.films}</p>


          </div>}
