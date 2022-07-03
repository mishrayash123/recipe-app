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
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function App() {

    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [yash, setyash] = useState(false);
    const [ypt, setypt] = useState(false);
    const [fav, setfav] = useState([]);

 
    // const {
    //     transcript,
    //     listening,
    //     resetTranscript,
    //   } = useSpeechRecognition();

    const Id = "9acb4c2b";
    const key = "47ebe2659bfff71dcee66a073802cdbd";


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        setypt(true);
      } else {
        
        setypt(false);
      }
    });
  
    getRecipes();
  }, [auth.currentUser]);

    const getRecipes = async () => {
        const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${Id}&app_key=${key}`);

        setRecipes(result.data.hits);
    }

    const onInputChange = e => {
        setSearch(e.target.value)
    };

  

    // const voice = e => {
    //   SpeechRecognition.startListening();
    //   setTimeout(()=> { SpeechRecognition.stopListening();
    //     setyash(true);
    //     setSearch(transcript);
    //   getRecipes();
    //   }, 5000);
    // }

    const onSearchClick = (event) => {
        event.preventDefault();
        setyash(true);
        getRecipes();
        setSearch("");
    };

   

    return (

      <div className="bg-slate-200 dark:bg-black">
        <BrowserRouter>
        <NavBar setfav={setfav} />
        {/* <div className="bg-dark">
        <button type="button" className=" mx-4 btn bg-dark text-danger " onClick={voice}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
</svg></button>
</div> */}
        <Routes>
        <Route path="/login" element={<div>
                <Login />
                <Foot />
            </div>} />
            <Route path="/" element={<div className="bg-slate-200 dark:bg-black ">
            <div>
                <Header search={search}
                onSubmit={onSearchClick}
                    onInputChange={onInputChange}
                    onSearchClick={onSearchClick}/>
                <> { ypt ? 
                    yash ? <div> <div className="container">
                        <Recipes recipes={recipes}/>
                    </div> <Foot />
                    </div> : <div>
                        <Default />
                        <Foot />
                    </div> :
                    <div>
                    <Login />
                    <Foot />
                    </div>
                } </>
            </div>
        </div>} />
         <Route path="/signup" element={
        <div>
        <Signup />
        <Foot /> 
                </div>
        } />
         <Route path="/forgetpassword" element={
        <div>
<Forgetpassword />
<Foot /> 
        </div>
        } />
         <Route path="/fav" element={<div>
          <> { ypt ? 
                    <div> <Fav fav={fav}/> <Foot />
                    </div> : <div>
                    <Login />
                    <Foot /> 
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
