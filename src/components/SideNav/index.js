import React from "react";
import { Container, MenuItems } from "./style";
import pokemon from "../../statics/pokemon.png";
const SideNav = () => {
  return (
    <Container>
      <img height={50} src={pokemon} alt="" />
      <MenuItems href="/home">Home</MenuItems>
    </Container>
  );
};

export default SideNav;
