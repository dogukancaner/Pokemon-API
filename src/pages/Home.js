import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "../components/card";

import HomeContainer from "../components/container/HomeContainer";

const Home = () => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=500").then((res) => {
      setPokemon(res.data.results);
    });
  }, []);

  return (
    <HomeContainer>
      {pokemon &&
        pokemon.map((item) => {
          return <Card key={item.name} name={item.name} />;
        })}
    </HomeContainer>
  );
};

export default Home;
