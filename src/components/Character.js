// Write your Character component here
import styled from "styled-components"
import CharacterDetail from "./Details"
export default function Character(props){
    const NameDiv =styled.div`
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        border: 1px solid black;
        border-radius: 25px;
        width:66%;
        align-self: center;
        margin: 5px;
        padding 2px;
        background-color: #d4b50ca6;


        `
    
    return <NameDiv  >
        
     <h2 >{props.name}</h2>  <h2>{props.dob}</h2>      
        
    </NameDiv>
}
