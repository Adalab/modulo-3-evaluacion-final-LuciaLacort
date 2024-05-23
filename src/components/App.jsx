import "../styles/App.scss";

import  getDataApi from "../services/api";

import Header from "./Header";
import Main from "./Main";
import CharacterDetail from "./CharacterDetail";
import NotFound from "./NotFound";

import { useState, useEffect } from "react";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";



function App() {


  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [input, setInput] = useState("")

  useEffect(() => {
    getDataApi().then((newArray) => { 
      const allCharacters = newArray.sort((a, b) => a.name.localeCompare(b.name));
      setCharacters(allCharacters);
    });
  }, []);

  const handleFilter = (value) => {
    setNameFilter(value);
    console.log(value);
  }
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(nameFilter.toLowerCase())
  );


  const { pathname } = useLocation()
  const charRoute = matchPath("/characterDetail/:id", pathname)
  const characterIdUrl = charRoute ? charRoute.params.id : null;
  const characterDetail = characters.find(character => character.id === parseInt(characterIdUrl, 10));
  console.log(characterDetail);

  return (
    <>
     <Header/>
     <Routes>
       <Route path="/" element={<Main characters={filteredCharacters} handleFilter={handleFilter} input={input} setInput={setInput} />}/>
       <Route path="/characterDetail/:id" element={<CharacterDetail characterDetail={characterDetail} />} />
       <Route path="*" element={<NotFound/>} />

     </Routes>
    </>
  )
}
export default App


