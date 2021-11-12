const URL = "https://pokeapi.co/api/v2/"

const PAGINATION_CONFIG = {
    perPage: 20
}

export const parsePokemonID = url => url.split(`/`)[6]

export async function callEndpoint(endpoint) {
    const response = await fetch(URL + endpoint)
    
    return await response.json()
}

export async function getPokemonPage(page) {
    const limit = PAGINATION_CONFIG.perPage
    const offset = PAGINATION_CONFIG.perPage * (page - 1)

    const {
        // count,
        // previous,
        next,
        results
    } = await callEndpoint(`pokemon?limit=${limit}&offset=${offset}`)

    const hasNext = next != null

    return { hasNext, results }
}

export async function getPokemonDetails(id) {
    return await callEndpoint(`pokemon/${id}`)
}
