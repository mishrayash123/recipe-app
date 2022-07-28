import React, {useState, useEffect} from "react";
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Recipes from './components/recipes';
import Foot from "./components/Foot";
import Default from "./components/Default";
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Forgetpassword from "./components/Forgetpassword"
import Fav from "./components/Fav";
import Axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth} from "./components/firebase-config";
import Wishes from './components/Wishes';
import Voicesearch from './components/Voicesearch'

function App() {

    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [yash, setyash] = useState(false);
    const [ypt, setypt] = useState(false);
    const [fav, setfav] = useState([]);


    const Id =process.env.REACT_APP_ID;
    const key = process.env.REACT_APP_KEY;



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        setypt(true);
      } else {
        
        setypt(false);
      }
    });
   
    getRecipes(search);
  }, [auth.currentUser]);

    const getRecipes = async (search) => {
        const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${Id}&app_key=${key}`);

        setRecipes(result.data.hits);
    }

    const onInputChange = e => {
        setSearch(e.target.value)
    };

    const onSearchClick = (event) => {
        event.preventDefault();
        setyash(true);
        getRecipes(search);
        setSearch("");
    };

   

    return (

      <div className="bg-rose-900 dark:bg-black">
        <BrowserRouter>
        <NavBar setfav={setfav} />
        <Wishes />
        <Routes>
        <Route path="/login" element={<div>
                <Login />
            </div>} />
            <Route path="/" element={<div className="bg-rose-900 dark:bg-black ">
            <div>
                <Header search={search}
                onSubmit={onSearchClick}
                    onInputChange={onInputChange}
                    onSearchClick={onSearchClick}
                    />
                <> {  
                    yash ? <div> <div className="container">
                        <Recipes recipes={recipes}/>
                    </div> 
                    <Voicesearch 
                        setSearch={setSearch}
                        getRecipes ={getRecipes }
                        setyash={setyash}
                        />
                    
                    </div> : <div>
                        <Default />
                        <Voicesearch 
                        setSearch={setSearch}
                        getRecipes ={getRecipes }
                        setyash={setyash}
                        />
                       
                    </div> 
                } </>
            </div>
        </div>} />
         <Route path="/signup" element={
        <div>
        <Signup />
        
                </div>
        } />
         <Route path="/forgetpassword" element={
        <div>
<Forgetpassword />
 
        </div>
        } />
         <Route path="/fav" element={<div>
          <> { ypt ? 
                    <div> <Fav fav={fav} setfav={setfav}/>
                    </div> : <div>
                    <Login />
                   
                    </div>
                } </>
          
          </div>
          }
           />
        </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
