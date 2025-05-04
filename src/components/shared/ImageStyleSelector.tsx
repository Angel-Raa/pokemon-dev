// components/ImageStyleSelector.tsx
import styled from "styled-components";
import { usePokemonImageStore } from "../../lib";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    inputBackground: string;
    text: string;
    borderColor: string; // Added borderColor
    selectBackground?: string; // Added selectBackground
    selectText?: string; // Added selectText
    selectHover?: string; // Added selectHover
  }
}

type ImageStyle = "official" | "dreamworld" | "pixel" | "home" | "animated";

const styleOptions = [
  { value: "official", label: "Oficial" },
  { value: "dreamworld", label: "Dream World" },
  { value: "pixel", label: "Pixel Art" },
  { value: "home", label: "Pokémon HOME" },
  { value: "animated", label: "Animado" },
];

export const ImageStyleSelector = () => {
  const { imageStyle, setImageStyle } = usePokemonImageStore();

  return (
    <SelectorContainer>
      <StyledLabel>Estilo de imágenes:</StyledLabel>
      <SelectContainer>
        <StyledSelect
          value={imageStyle}
          onChange={(e) => setImageStyle(e.target.value as ImageStyle)}
        >
          {styleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <SelectIcon>▼</SelectIcon>
      </SelectContainer>
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  white-space: nowrap;
`;

const SelectContainer = styled.div`
  position: relative;
  min-width: 180px;
`;

const StyledSelect = styled.select`
  appearance: none;
  padding: 10px 40px 10px 15px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.borderColor || "#ddd"};
  background-color: ${({ theme }) => theme.selectBackground || "#f8f9fa"};
  color: ${({ theme }) => theme.selectText || "#333"};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary || "#3b82f6"};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary + "20"};
  }

  &:hover {
    background-color: ${({ theme }) => theme.selectHover || "#e9ecef"};
  }
`;

const SelectIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.selectText || "#333"};
  font-size: 12px;
`;


// O para la versión de botones:
const ButtonGroup = styled.div`
  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const StyleButton = styled.button<{ $active: boolean }>`
  @media (max-width: 768px) {
    padding: 6px 8px;
    font-size: 12px;
  }
`;
