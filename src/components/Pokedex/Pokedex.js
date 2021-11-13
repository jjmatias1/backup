import { useState, useEffect } from 'react'
import { Container, Row } from 'react-grid-system'
import { getPokemonDetails, getPokemonPage, parsePokemonID } from '../../libs/pokeapi'
import './Pokedex.css'


const PokemonDetails = props => {
    const { id } = props

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        if (id) {
            getPokemonDetails(id).then(pokemon => setPokemon(pokemon))
        }

        return () => {}
    }, [id])

    // criar um detalhes de verdade
    return (
        <div>
            {pokemon?.name ?? ''}
        </div>
    )
}

const PokemonSprite = props => {
    const { pokemon, onClick } = props

    const id = parsePokemonID(pokemon.url)
    const spriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    
    return (
        <button id={id} onClick={onClick(id)}>
            <img src={spriteURL} alt={`${pokemon.name}'s default front sprite'`} />
        </button>
    )
}

const PokemonList = props => {
    const { pokemonList, onChangePage, onClick } = props
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (page) {
            getPokemonPage(page)
                .then(({ hasNext, results}) => onChangePage(results))
                .catch(console.error)
        }

        return () => {}
    }, [page])

    return (
        <Container>
            {/* criar uma grid de verdade */}
            <Row>
                {pokemonList.map(pokemon => <PokemonSprite key={pokemon.name} pokemon={pokemon} onClick={onClick} />)}
            </Row>
            {/* muda de página setPage */}
        </Container>
    )
}


export const Pokedex = () => {
    const [currentPokemonId, setCurrentPokemonId] = useState(0)
    const [pokemonList, setPokemonList] = useState([])

    return (<>
        <header>
            <h1>Pokédex dos Cria</h1>
        </header>
        <main>
            <PokemonList
                pokemonList={pokemonList}
                onChangePage={list => { setPokemonList(list) }}
                onClick={id => () => { setCurrentPokemonId(id) }} />
            <PokemonDetails
                id={currentPokemonId}
                pokemonList={pokemonList} />
        </main>
    </>)
}
