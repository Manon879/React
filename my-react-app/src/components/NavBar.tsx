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

    
    
  return (
    <>
     <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        {pokemonList.map((Pokemon, index)=>(
            <button
            key={index}
            onClick={()=> setPokemonIndex (index)}>
        {Pokemon.name}
        </button>        
        ))}
    </div>
    </>
  );
}

export default NavBar