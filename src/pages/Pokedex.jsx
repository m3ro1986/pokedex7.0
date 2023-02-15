import '../styles/pokedex.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../store/slices/pokemons';
import { useNavigate } from 'react-router-dom';
import Pokecard from '../components/Pokecard';


const Pokedex = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const trainerName = useSelector( state => state.trainerName );
    const pokemons = useSelector( state => state.pokemons );
    const [ pokemonTypes, setPokemonTypes ] = useState([]);

    // useEffect( () => {
    //     axios.get('https://pokeapi.co/api/v2/type/').then( res => dispatch( getPokemons( res.data.results )))
    // }, [])


    return (
        <div className='pokedexPage'>
            <header>
                <p> Welcome <span>{ trainerName }</span>, here you can find your favorite POKEMON!!!</p>
                <i class='bx bxs-left-arrow'></i>
            </header>
            <main>
                {
                    pokemons.map( e => (
                        <Pokecard key={e.url} url={e.url}/>
                    ))
                }
            </main>
        </div>
    );
};

export default Pokedex;