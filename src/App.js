import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import Character from "./components/Character.js"
import CharacterDetail from './components/Details.js';
const MainDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center;
align-items: center;
height: 100vh;
`
const StyledHeader =styled.h1`
width: 100%;
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [charachterDetail, setcharacterDetail] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get("https://swapi.dev/api/people/")
    .then(res=>{
      console.log(res.data);
      setCharacters(res.data);
    }).catch(err=> console.error(err));

  },[])

  return (
    <MainDiv className="App">
       <StyledHeader className="Header">Long Long Ago...</StyledHeader>
          {characters.map(jedi =>
            <Character  
            name ={jedi.name} dob ={jedi.birth_year} key ={jedi.index} world ={jedi.homeworld} films ={jedi.films}/>)}
    </MainDiv>
  );
}

export default App;
