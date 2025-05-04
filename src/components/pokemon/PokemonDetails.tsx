import styled from "styled-components";
import { FullPokemonApiResponse } from "../../api/pokemonApi"

interface Props {
    pokemon: FullPokemonApiResponse;
}
export const PokemonDetails = ({pokemon}:Props) => {
    return (
        <Container>
        <PokemonCard>
          <PokemonImage 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
            alt={pokemon.name}
          />
          
          <PokemonInfo>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <p>#{pokemon.id.toString().padStart(3, '0')}</p>
            
            <TypesContainer>
              {pokemon.types.map((type) => (
                <TypeBadge key={type} type={type}>
                  {type}
                </TypeBadge>
              ))}
            </TypesContainer>
            
            <StatsContainer>
              <StatItem>
                <span>Height</span>
                <span>{(pokemon.height / 10).toFixed(1)} m</span>
              </StatItem>
              <StatItem>
                <span>Weight</span>
                <span>{(pokemon.weight / 10).toFixed(1)} kg</span>
              </StatItem>
              <StatItem>
                <span>Base XP</span>
                <span>{pokemon.base_experience}</span>
              </StatItem>
            </StatsContainer>
            
            <StatsTable>
              {pokemon.stats.map((stat) => (
                <StatRow key={stat.name}>
                  <StatName>{stat.name.replace('-', ' ')}</StatName>
                  <StatValue>{stat.base_stat}</StatValue>
                  <StatBar>
                    <StatBarFill width={(stat.base_stat / 255) * 100} />
                  </StatBar>
                </StatRow>
              ))}
            </StatsTable>
          </PokemonInfo>
        </PokemonCard>
      </Container>
    )
}

const Container = styled.div`
  width: 100%;
`;

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.background};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const PokemonInfo = styled.div`
  flex: 1;
  width: 100%;

  h2 {
    font-size: 2rem;
    margin: 0 0 5px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.text};
  }

  p {
    color: #666;
    margin: 0 0 15px;
    font-size: 1.2rem;
  }
`;

const TypesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const TypeBadge = styled.span<{ type: string }>`
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  text-transform: capitalize;
  color: white;
  background-color: ${({ type }) => {
    const typeColors: Record<string, string> = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC',
    };
    return typeColors[type] || '#68A090';
  }};
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.color2}20;
  padding: 10px;
  border-radius: 8px;

  span:first-child {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textSecondary};
  }

  span:last-child {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }
`;

const StatsTable = styled.div`
  width: 100%;
`;

const StatRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StatName = styled.span`
  width: 120px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.textSecondary};
`;

const StatValue = styled.span`
  width: 40px;
  font-weight: bold;
  text-align: right;
  margin-right: 10px;
  color: ${({ theme }) => theme.text};
`;

const StatBar = styled.div`
  flex: 1;
  height: 10px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 5px;
  overflow: hidden;
`;

const StatBarFill = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background: ${({ theme }) => theme.color2};
  border-radius: 5px;
`;

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color1: string;
    color2: string;
    text: string;
    textSecondary: string;
    background: string; // Added this line
    backgroundSecondary: string;
  }
}