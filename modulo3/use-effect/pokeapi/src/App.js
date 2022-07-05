import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Input, Select, SearchBox } from "./style";
import PokeCard from "./components/PokeCard/PokeCard";

export default function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");
  useEffect(() => {
    const getAllPokemon = async () => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?limit=898"
        );
        setPokeList(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getAllPokemon();
  }, [pokeName]);
  return (
    <Container>
      {pokeName && <PokeCard pokeName={pokeName} />}
      <SearchBox>
        <Select
          onChange={(e) => {
            setPokeName(e.target.value);
          }}
        >
          <option value={""}>Nenhum</option>
          {pokeList?.map((pokemon,index) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}{` - #${(index+1)}`}
              </option>
            );
          })}
        </Select>
      </SearchBox>
    </Container>
  );
}
