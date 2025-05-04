import styled from "styled-components";

interface Props {
  small?: boolean;
}

export const Loader = ({ small = false }: Props) => {
  return (
    <LoaderContainer $small={small}>
      <Spinner $small={small} />
      <p>Loading Pokémon...</p>
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div<{ $small: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ $small }) => ($small ? "10px" : "20px")};
  height: ${({ $small }) => ($small ? "auto" : "200px")};
  padding: ${({ $small }) => ($small ? "10px 0" : "0")};
`;

const Spinner = styled.div<{ $small: boolean }>`
  width: ${({ $small }) => ($small ? "30px" : "50px")};
  height: ${({ $small }) => ($small ? "30px" : "50px")};
  border: ${({ $small }) => ($small ? "3px" : "5px")} solid
    ${({ theme }) => theme.color2};
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
