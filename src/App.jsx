import './styles/App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';


function App() {

    return (
        <HashRouter>
            <Routes>
                
                <Route path='/' element={<Login />}/>

                <Route element={<ProtectedRoutes />}>
                    <Route path='/pokedex' element={<Pokedex />}/>
                    <Route path='/pokedex/:id' element={<Pokemon />}/>
                </Route>

            </Routes>
        </HashRouter>
    )
}

export default App
