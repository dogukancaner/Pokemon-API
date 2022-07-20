import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { capitilizer } from "../utils/Function";

import ProcessBar from "../components/ProcessBar";

const Pokemon = () => {
  let { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemonData(res.data);
      });
  }, [pokemonName]);

  return (
    <div>
      <div style={{ display: "grid", justifyContent: "center" }}>
        <img
          src={
            pokemonData &&
            pokemonData.sprites.other["dream_world"]["front_default"]
          }
          alt=""
        />
        <h1 style={{ color: "#dc143c" }}>{capitilizer(pokemonName)}</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ marginLeft: "18px" }}>
          <h1 style={{ color: "#dc143c" }}>Stats</h1>
          {pokemonData &&
            pokemonData.stats.map((item, index) => {
              return (
                <div key={index}>
                  <span>{item.stat.name}</span>
                  <ProcessBar width={"250px"} value={item.base_stat} />
                </div>
              );
            })}
        </div>
        <div style={{ marginLeft: "30px", width: 100 }}>
          <h1 style={{ color: "#dc143c" }}>Abilities</h1>
          {pokemonData &&
            pokemonData.abilities.map((item, url) => {
              return (
                <p
                  key={url}
                  style={{
                    padding: 3,
                    border: "0.1px solid #dc143c",
                    borderRadius: 3,
                  }}
                >
                  {item.ability.name}
                </p>
              );
            })}
        </div>
        <div style={{ width: "auto" }}>
          <h2 style={{ color: "#dc143c" }}>Moves</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto  ",
            }}
          >
            {pokemonData &&
              pokemonData.moves.map((item, url) => {
                return (
                  <p
                    key={url}
                    style={{
                      padding: 3,
                      border: "0.1px solid #dc143c",
                      borderRadius: 3,
                      marginLeft: 10,
                    }}
                  >
                    {item.move.name}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
