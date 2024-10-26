import PokemonCard from "./PokemonCard";

interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }
  function NavBar({ pokemonIndex, setPokemonIndex, pokemonList}: NavBarProps) {

    
    const handleClick = () => {
    if (pokemonIndex < pokemonList.length -1){
      setPokemonIndex (pokemonIndex +1 );
    }
  }
  const handleOffClick = () => {
    if (pokemonIndex > 0){
      setPokemonIndex (pokemonIndex -1)
    }
  }
  return (
    <>
     <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex < pokemonList.length -1 &&(
      <button onClick={handleClick}>Précedent</button>)}
      {pokemonIndex > 0 &&  (
      <button onClick={handleOffClick}>Suivant</button>)}
    </div>
    </>
  );
}

export default NavBar