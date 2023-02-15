import '../styles/pokemon.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pokemon = () => {

    const { id } = useParams();
    const [ pokemon, setPokemon ] = useState({});

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then( res => setPokemon( res.data ))
    },[])
    return (
        <div className={`pokemonBox ${ pokemon.types?.[0].type?.name }`}>
            <h2>{pokemon.name}</h2>
        </div>
    );
};

export default Pokemon;