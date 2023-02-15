import '../styles/pokecard.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Pokecard = ({url}) => {

    const navigate = useNavigate();
    const [ pokemon, setPokemon ] = useState({});
    const [ zoom, setZoom ] = useState('')

    useEffect( () => {
        axios.get(url).then( res => setPokemon( res.data ))
    }, [])

    const goPokemon = () => {
        setZoom('zoom')
        setTimeout( () => {navigate(`/pokedex/${ pokemon.id }`)}, 1500 )
    }

    return (
        <div onClick={ goPokemon } className={`pokecardBox ${ pokemon.types?.[0].type?.name } ${zoom}`}>
            <figure>
                <img src={`/animated/${pokemon.id}.gif`} alt="no documento" />
            </figure>
            <span> { pokemon.name } </span>
        </div>
    );
};

export default Pokecard;