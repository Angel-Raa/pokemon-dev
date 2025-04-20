import styles from "./App.module.css";
import { usePokemons } from "./hooks";
import { PokemonItem } from "./components";
import { Loader } from "./components/shared/Loader";

const App = () => {
  const { isPending, pokemons } = usePokemons();
  console.log({ isPending, pokemons });

  if (isPending) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokédex</h1>
      <div className={styles.grid}>
        {pokemons?.map((p) => (
          <PokemonItem key={p.id} name={p.name} url={p.url} id={p.id} />
        ))}
      </div>
    </div>
  );
};
export default App;
