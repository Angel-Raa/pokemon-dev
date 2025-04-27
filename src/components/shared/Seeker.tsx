import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";

// Ensure this file exists and is used to extend DefaultTheme
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: string;
    color2: string;
  }
}

export const Seeker = (): React.JSX.Element => {
    return (
        <Container>
        <section className="content">
          <Icon className="icono" icon="ic:twotone-search" />
          <input placeholder="...buscar" />
        </section>
      </Container>
    );
}

const Container = styled.div`
  border-radius: 10px;
  height: 60px;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.text};
  border: 2px solid ${({ theme }) => theme.color2};
  .content {
    padding: 15px;
    gap: 10px;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    .icono {
      font-size: 30px;
      cursor: pointer;
    }
    input {
      font-size: 18px;
      width: 100%;
      outline: none;
      background: none;
      border: 0;
      color: ${(props) => props.theme.text};
    }
  }
`;