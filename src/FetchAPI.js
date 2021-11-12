import React from "react"; 
import bolsonaro from './bolsonaro.jpg';
import './FetchAPI.css';
import { Container, Row, Col } from 'react-grid-system';

export default class FetchAPI extends React.Component {

    state = {
        loading : true,
        pokemon : null,
    }

    async componentDidMount() {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({pokemon: data.results, loading: false});
        console.log(data.results);
    }

    getPokemonImage(props) {
        const url = ('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + String(props) + '.png')
        return <button id={String(props-1)} onClick={this.handleId}><img 
            src = {url}
            alt= "new"
            /> </button>
    }

    handleId = (e) => {
        console.clear();
        console.log("ID: " + e.currentTarget.id);
        this.getPokemonName(e.currentTarget.id);
        this.getPokemonType(e.currentTarget.id);
        this.getPokemonAbility(e.currentTarget.id);
    }

    async getPokemonName(props) {
        await fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(data => this.setState({pokemon: data.results[props]}));
        console.log("Name: ",this.state.pokemon.name)
    }

    async getPokemonAbility(props) {
        await fetch('https://pokeapi.co/api/v2/ability/')
            .then(response => response.json())
            .then(data => this.setState({pokemon: data.results[props]}));
        console.log("Ability: ",this.state.pokemon.name)
    }

    async getPokemonType(props) {
        await fetch('https://pokeapi.co/api/v2/type/')
            .then(response => response.json())
            .then(data => this.setState({pokemon: data.results[props]}));
        console.log("Type: ",this.state.pokemon.name)
    }

    /*pokedexDisplay(props) {
        const url = ('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + String(props) + '.png')
        return <img 
        src = {url}
        alt= "new"
        />
    }*/

    render() {
        return (
            <div className="FetchAPI">
                <h1>Pokedex dos cria</h1>
                <header className="FetchAPI-header">
                    {this.state.loading || !this.state.pokemon ? (
                    <div>
                        <h1>calma gomao</h1>
                        <img src={bolsonaro} className="FetchAPI-bolsonaro" alt="bolsonaro" /> 
                    </div> ) : ( 
                    <div>
                        <div>
                            <Container>
                                <Row>
                                <Col sm={3}>
                                {this.getPokemonImage(1)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(2)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(3)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(4)}
                                </Col>
                                </Row>
                                <br />
                                <Row>
                                <Col sm={3}>
                                {this.getPokemonImage(5)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(6)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(7)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(8)}
                                </Col>
                                </Row>
                                <br />
                                <Row>
                                <Col sm={3}>
                                {this.getPokemonImage(9)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(10)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(11)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(12)}
                                </Col>
                                </Row>
                                <br />
                                <Row>
                                <Col sm={3}>
                                {this.getPokemonImage(13)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(14)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(15)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(16)}
                                </Col>
                                </Row>
                                <br />
                                <Row>
                                <Col sm={3}>
                                {this.getPokemonImage(17)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(18)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(19)}
                                </Col>
                                <Col sm={3}>
                                {this.getPokemonImage(20)}
                                </Col>
                                </Row>
                            </Container>
                            
                        </div>
                    </div>)}
                </header>
            </div>
        );
    }
}

