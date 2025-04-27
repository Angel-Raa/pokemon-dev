import styled from "styled-components";
import { Seeker } from "./Seeker";

export const Header = (): React.JSX.Element => {
  return (
    <Container>
      <section>
        <img
          alt="Pokemon bulbasaur gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
        />
        <img
          alt="Pokemon charmander gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
        />
        <img
          alt="Pokemon
squirtle gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
        />
        <img
          alt="Pokemon pikachu gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
        />
        <img
          alt="Pokemon eevee gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif"
        />
      </section>

      <Seeker />
    </Container>
  );
};

const Container = styled.div``;
