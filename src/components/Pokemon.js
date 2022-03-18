import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
      setPokemon(res.data);
      setIsLoading(false);
    });
  }, []);

  console.log(pokemon);

  return (
    <div>{isLoading ? <h2>Esta cargando...</h2> : <h1>{pokemon.name}</h1>}</div>
  );
};

export default Pokemon;