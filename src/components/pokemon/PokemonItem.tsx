import React from "react";
import styles from "./PokemonItem.module.css";
interface Props {
  name: string;
  url: string;
  id: number;
}
export const PokemonItem = ({ name, id }: Props):React.JSX.Element => {
  return (
    <div className={styles.card}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        className={styles.image}
      />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.id}>#{id.toString().padStart(3, "0")}</p>
    </div>
  );
};
