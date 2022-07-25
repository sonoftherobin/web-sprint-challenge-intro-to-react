// Write your Character component here
import CharacterDetail from "./Details"
export default function Character(props){
    
    return <div>
        
                <h2>{props.name}</h2> born on <h2>{props.dob}</h2>
                {/* <CharacterDetail name = {props.name} world ={props.homeworld} films ={props.films}/> */}
        
           </div>
}
