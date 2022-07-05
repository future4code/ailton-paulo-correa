import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ContainerCard,
  SpritePokemon,
  BoxForms,
  BoxSprite,
  BoxInfo,
  NormalForm,
  ShinyForm,
  Tipo,
  Stats,
  InfoStats,
} from "./style";

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});
  const [changeSprite, setChangeSprite] = useState("normal");
  const [corTipo] = useState([
    "normal:#a8a878",
    "fire :#f08030",
    "water :#6890f0",
    "fighting :#c03028",
    "grass :#78c850",
    "poison :#a040a0",
    "eletric :#f8d030",
    "ground :#e0c068",
    "psychic :#f85888",
    "rock :#b8a038",
    "ice :#98d8d8",
    "bug :#a8b820",
    "dragon :#7038f8",
    "ghost :#705898",
    "dark :#705848",
    "steel :#b8b8d0",
    "fairy :#ee99ac",
    "flying :#a890f0",
  ]);
  useEffect(() => {
    const getPokemon = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${props.pokeName}`
        );
        setPokemon(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPokemon();
  }, [props.pokeName]);
  console.log(pokemon);
  return (
    <ContainerCard>
      <BoxSprite>
        {pokemon.sprites && (
          <SpritePokemon
            src={
              changeSprite === "normal"
                ? pokemon.sprites.other.home.front_default
                : pokemon.sprites.other.home.front_shiny
            }
            alt={pokemon.name}
          />
        )}
      </BoxSprite>
      <BoxForms>
        <NormalForm
          onClick={() => setChangeSprite("normal")}
          cor={changeSprite === "normal" ? true : false}
        >
          Normal
        </NormalForm>
        <ShinyForm
          onClick={() => setChangeSprite("shiny")}
          cor={changeSprite === "shiny" ? true : false}
        >
          Shiny
        </ShinyForm>
      </BoxForms>
      <BoxInfo>
        <h1>{pokemon.name}</h1>
        {pokemon.types &&
          pokemon.types.map((item) => {
            let cor;
            for (const itemCor of corTipo) {
              if (itemCor.includes(item.type.name)) {
                cor = itemCor.split(":").pop();
              }
            }
            return <Tipo corTipo={cor}>{item.type.name}</Tipo>;
          })}
        {pokemon.stats && (
          <Stats>
            <InfoStats corStat={"#ff5959"}>
              <h4>{pokemon.stats[0].stat.name}</h4>
              <h4>{pokemon.stats[0].base_stat}</h4>
            </InfoStats>
            <InfoStats corStat={"#f5ac78"}>
              <h4>{pokemon.stats[1].stat.name}</h4>
              <h4>{pokemon.stats[1].base_stat}</h4>
            </InfoStats>
            <InfoStats corStat={"#fae078"}>
              <h4>{pokemon.stats[2].stat.name}</h4>
              <h4>{pokemon.stats[2].base_stat}</h4>
            </InfoStats>
            <InfoStats corStat={"#9db7f5"}>
              <h4>{pokemon.stats[3].stat.name}</h4>
              <h4>{pokemon.stats[3].base_stat}</h4>
            </InfoStats>
            <InfoStats corStat={"#a7db8d"}>
              <h4>{pokemon.stats[4].stat.name}</h4>
              <h4>{pokemon.stats[4].base_stat}</h4>
            </InfoStats>
            <InfoStats corStat={"#fa92b2"}>
              <h4>{pokemon.stats[5].stat.name}</h4>
              <h4>{pokemon.stats[5].base_stat}</h4>
            </InfoStats>
          </Stats>
        )}
      </BoxInfo>
    </ContainerCard>
  );
}
