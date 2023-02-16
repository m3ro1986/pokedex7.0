import '../styles/pokemon.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pokemon = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => setPokemon(res.data))
    }, [])

    console.log(pokemon)

    return (
        <div className={`pokemonBox`}>
            <figure className={`${pokemon.types?.[0].type?.name}`}>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />     
            </figure>
            
            <div className='info'>
                <h2 style={ { textAlign: 'center' }}>{pokemon.name}</h2>
                <div >
                    <ul className='types'>
                        {
                            pokemon.types?.map(e => (
                                <li key={e.type.name} className={`${e.type?.name}`}>
                                    {e.type.name}
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className='measures'>
                    <div>
                        <span> {pokemon.height / 10} mtrs </span>
                        <span style={{ fontSize: '10px', color: '#575558' }}>  Height </span>
                    </div>
                    <div>
                        <span> {pokemon.weight / 10} kg </span>
                        <span style={{ fontSize: '10px', color: '#575558' }}> Weight </span>
                    </div>
                </div>


                <div className='pokemonInfo'>


                    <h3 style={ { textAlign: 'center' }}>base stats</h3>
                    <ul className='stats'>
                        <li>
                            <span>Hp</span>
                            <div style={{ width: '100%', backgroundColor: 'white' }}>
                                <div style={{ width: `${pokemon.stats?.[0].base_stat / 200 * 100}%`, backgroundColor: 'red' }}>
                                    {/* <span> {pokemon.stats?.[1].stat?.name} </span> */}
                                    <span className='stat'> {pokemon.stats?.[0].base_stat} </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>Atk</span>
                            <div style={{ width: '100%', backgroundColor: 'white' }}>
                                <div style={{ width: `${pokemon.stats?.[1].base_stat / 200 * 100}%`, backgroundColor: 'orange' }}>
                                    {/* <span> {pokemon.stats?.[1].stat?.name} </span> */}
                                    <span className='stat'> {pokemon.stats?.[1].base_stat} </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>Def</span>
                            <div style={{ width: '100%', backgroundColor: 'white' }}>
                                <div style={{ width: `${pokemon.stats?.[2].base_stat / 200 * 100}%`, backgroundColor: 'blue' }}>
                                    {/* <span> {pokemon.stats?.[2].stat?.name} </span> */}
                                    <span className='stat'> {pokemon.stats?.[2].base_stat} </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>Spe-Atk</span>
                            <div style={{ width: '100%', backgroundColor: 'white' }}>
                                <div style={{ width: `${pokemon.stats?.[3].base_stat / 200 * 100}%`, backgroundColor: 'yellow' }}>
                                    {/* <span> {pokemon.stats?.[3].stat?.name} </span> */}
                                    <span className='stat'> {pokemon.stats?.[3].base_stat} </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>Spe-Def</span>
                            <div style={{ width: '100%', backgroundColor: 'white' }}>
                                <div style={{ width: `${pokemon.stats?.[4].base_stat / 200 * 100}%`, backgroundColor: 'green' }}>
                                    {/* <span> {pokemon.stats?.[4].stat?.name} </span> */}
                                    <span className='stat'> {pokemon.stats?.[4].base_stat} </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>Spd</span>
                            <div style={{ width: '100%', backgroundColor: 'white' }}>
                                <div style={{ width: `${pokemon.stats?.[5].base_stat / 200 * 100}%`, backgroundColor: 'brown' }}>
                                    {/* <span> {pokemon.stats?.[5].stat?.name} </span> */}
                                    <span className='stat'> {pokemon.stats?.[5].base_stat} </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <footer>
                    <img src={pokemon.sprites?.front_default} alt="" />
                    <img src={pokemon.sprites?.back_default} alt="" />
                    <img src={pokemon.sprites?.front_shiny} alt="" />
                    <img src={pokemon.sprites?.back_shiny} alt="" />
                </footer>
            </div>
        </div>
    );
};

export default Pokemon;