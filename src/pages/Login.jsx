import '../styles/login.css';
import pikachu from '../assets/pikachu.gif'
import React, { useEffect, useState } from 'react';
import arrowRight from '../assets/arrow-right.svg'
import arrowLeft from '../assets/arrow-left.svg'
import arrowUp from '../assets/arrow-up.svg'
import arrowDown from '../assets/arrow-down.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../store/slices/pokemons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getTrainerName } from '../store/slices/trainerName';

const Login = () => {

    const introMessage = 'Hello trainer!!! Give me your name to start.';
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pokemons = useSelector( state => state.pokemons );
    const [ text, setText ] = useState('');
    const [ name, setName ] = useState('');
    const [ randomNumber, setRandomNumber ] = useState( () => Math.floor( Math.random() * 200 ) );
    const changeRandomNumber = () => { setRandomNumber( Math.floor( Math.random() * 200 ) ) };
    const randomNumberPlus = () => { randomNumber < 500 ? setRandomNumber( randomNumber + 1 ) : randomNumber };
    const randomNumberMinus = () => { randomNumber > 1 ? setRandomNumber( randomNumber - 1 ) : randomNumber };
    const goPokemons = (e) => {
        if ( name !== '') {
        dispatch( getTrainerName( name ));
        navigate('/pokedex');
        } else {
            alert('Give me your name')
        }
    };

    useEffect( () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1279').then( res => dispatch( getPokemons( res.data.results ) ))
    }, [])

    useEffect( () => {
        const timeout = setTimeout(() => {
            setText( introMessage.slice( 0, text.length + 1 ))
        }, 50)

        return () => clearTimeout( timeout )
    }, [text]);

    return (
        <div className='loginBox'>
            <div className='login'>
                <figure className='pokedex'>
                    <p> { text } </p>
                    <div>
                         {pokemons[ randomNumber - 1 ]?.name} #{randomNumber}
                    </div>
                    <input
                        type="text"
                        value={ name }
                        onChange={ e => setName( e.target.value )}
                        autoFocus
                    />
                    <span>
                        <img src={`/animated/${randomNumber}.gif`} alt="" />
                    </span>
                    <button onClick={ randomNumberPlus } className='right btn arrow'> <img src={ arrowRight }/> </button>
                    <button onClick={ randomNumberMinus } className='left btn arrow'> <img src={ arrowLeft }/> </button>
                    <button onClick={ changeRandomNumber } className='up btn arrow'> <img src={ arrowUp }/> </button>
                    <button onClick={ changeRandomNumber } className='down btn arrow'> <img src={ arrowDown }/> </button>
                    <button className='x btn'></button>
                    <button onClick={ goPokemons } className='check btn'></button>
                </figure>
            </div>
        </div>
    );
};

export default Login;