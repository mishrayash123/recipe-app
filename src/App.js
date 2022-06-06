import React, {useState, useEffect} from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Recipes from './components/recipes';
import Footer from "./components/Footer";
import Default from "./components/Default";
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Axios from "axios";




function App() {

    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [yash, setyash] = useState(false);

    const Id = "9acb4c2b";
    const key = "47ebe2659bfff71dcee66a073802cdbd";

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${Id}&app_key=${key}`);

        setRecipes(result.data.hits);
    }

    const onInputChange = e => {
        setSearch(e.target.value)
    };

    const onSearchClick = (event) => {
        event.preventDefault();
        setyash(true);
        getRecipes();
    };

   

    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<div className="App">
            <div>
                <Header search={search}
                onSubmit={onSearchClick}
                    onInputChange={onInputChange}
                    onSearchClick={onSearchClick}/>
                <> {
                    yash ? <div className="container">
                        <Recipes recipes={recipes}/>
                    </div> : <Default/>
                } </>
                <Footer/>
            </div>
        </div>} />
         <Route path="/login" element={<div>
                <Login />
                
            </div>} />
         <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
