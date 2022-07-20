import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "../components/card";

import HomeContainer from "../components/container/HomeContainer";

const Home = () => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=18").then((res) => {
      setPokemon(res.data.results);
    });
  }, []);

  return (
    <HomeContainer>
      {pokemon &&
        pokemon.map((item, index) => {
          return <Card key={index} name={item.name} />;
        })}
    </HomeContainer>
  );
};

export default Home;
