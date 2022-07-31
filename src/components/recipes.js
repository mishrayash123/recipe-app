import React,{useEffect,useState} from "react";
import { doc, setDoc} from "firebase/firestore";
import { db } from "./firebase-config"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import {  getDoc } from "firebase/firestore";


const Recipes = (props) => {
    const {recipes} = props;
    const [uid, setuid] = useState("");
    const [uy, setuy] = useState(false);
    const length =recipes.length;
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setuy(true);
          setuid(user.uid);
          } else {
            setuy(false);
           setuid("");
          }
        });
        
      }, [auth.currentUser]);




    return (
        <div>
        <>{ length===0 ? <div className="bg-gray-50 dark:bg-neutral-700">
        <h2 className=" font-serif text-3xl text-center mt-3 dark:text-white ">No results found</h2>
        <h2 className="text-white font-serif text-9xl text-center my-20 mb-36">😔</h2>
        
    </div>  :
        <div className="row mt-4 mb-36 w-75 mx-auto">
            {
            recipes.map(recipe => (
                <div className="col-md-3 mt-4  bg-gray-50 dark:bg-neutral-700 " >
                    <div className="card  py-2 border-white/10  text-center bg-orange-900 dark:bg-white/10">
                <div className=" text-end m-1">
                </div>
                        {/* <img className="img-fluid w-50 mx-auto p-1 rounded-circle" src={recipe.recipe.image}></img> */}
                        <a href={
                                recipe.recipe.url
                            }
                            target="_blank"
                            rel="noreferrer noopener">
                            <img className="img-fluid w-50 mx-auto p-1 rounded-circle"
                                src={
                                    recipe.recipe.image
                            }></img>
                            
                        </a>
                        <div className="card-body  bg-orange-900 dark:bg-white/10 text-white font-serif italic">

                            <h5>{
                                recipe.recipe.label
                            }</h5>
                            
                        </div>

                        <ul className="list-group list-group-flush">

                            <li className="list-group-item bg-orange-900 dark:bg-white/10 text-white font-serif italic">
                                <h6>DishType : {
                                    recipe.recipe.dishType
                                }</h6>
                            </li>
                            <li className="list-group-item bg-orange-900 dark:bg-white/10 text-white font-serif italic">
                                <h6>MealType : {
                                    recipe.recipe.mealType
                                }</h6>
                            </li>
                            <li className="list-group-item bg-orange-900 dark:bg-white/10 text-white font-serif italic">
                                <h6>CuisineType : {
                                    recipe.recipe.cuisineType
                                }</h6>
                            </li>
                            <li className="list-group-item bg-orange-900 dark:bg-white/10 text-white font-serif italic">
                                <h6>Calories : {
                                    recipe.recipe.calories
                                }</h6>
                            </li>

                             {/* {
                            recipe.recipe.ingredientLines.map(ingredient => (
                                <li className="list-group-item">
                                    {ingredient}</li>
                            ))
                        } */}
                        </ul>
                        <div className="border border-light border  border-opacity-25">
                        <a href={
                                recipe.recipe.url
                            }
                            className="btn  text-light bg-orange-900 dark:bg-white/10 w-100 font-serif italic"
                            target="_blank"
                            rel="noreferrer noopener">Full Recipe</a>
                            </div>
               <div className="border border-light border  border-opacity-25">
                    <button  className="btn  text-light bg-orange-900 dark:bg-white/10 w-100 font-serif italic" onClick={
                       async (e) =>{
                        if(!uy){
                            alert("Please login to add to favourites");
                        }
                        else{
                            const docRef = doc(db, uid,recipe.recipe.label );
                            const docSnap = await getDoc(docRef);
                            if (docSnap.exists()) {
                                alert("Already in favourites");
                              } else {
                                setDoc(doc(db,uid,recipe.recipe.label), {
                                    image : recipe.recipe.image,
                                    label : recipe.recipe.label,
                                    dishtype : recipe.recipe.dishType,
                                    mealtype : recipe.recipe.mealType,
                                    cuisinetype:recipe.recipe.cuisineType,
                                    calories: recipe.recipe.calories,
                                    url : recipe.recipe.url  
                                  }
                                  );
                                  alert("Copied in favourites");
                              }
                       }
                    }
                    }> Add to fav &#9829;</button>
                    </div>
                    </div>
                </div>
            ))
        } </div>
    } </>
    <div className="fixed-bottom bg-gradient-to-r from-zinc-900 via-pink-900 to-zinc-900 border border-light border  border-opacity-10 mt-5" >
        <div className="w-20 mx-auto ">
      <a className="nav-link hover:text-white" target="_blank"  href="https://github.com/mishrayash123/recipe-app"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github m-1 mx-4" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
      </div>
      <div className="mb-1">
    <h5 className=" text-center text-light mt-1 mb-1 italic ">Copyright © 2022 • Yash Kumar Mishra</h5>
      </div>
      
  </div>
    </div>
    );
};

export default Recipes;
