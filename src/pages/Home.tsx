import styled from "styled-components";
import { Header, PokemonItem } from "../components";
import { useIsFetching } from "@tanstack/react-query";

const Home = (): React.JSX.Element => {
  const isFetching = useIsFetching({
    queryKey: ["pokemon"],
  });
  const isLoading = isFetching > 0;
  return (
    <Container>
      <Header />
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
           <h2>Pokemon</h2>
        )
      }
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Home;
