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
        <>{ length===0 ? <div className="bg-rose-900 dark:bg-black">
        <h2 className=" font-serif text-3xl text-center mt-3 dark:text-white ">No results found</h2>
        <h2 className="text-white font-serif text-9xl text-center my-20 mb-56">😔</h2>
        
    </div>  :
        <div className="row mt-4 mx-2 mb-72">
            {
            recipes.map(recipe => (
                <div className="col-md-3 mt-4  bg-rose-900 dark:bg-black " >
                    <div className="card py-2 border-white/10  text-center bg-white/10">
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
                        <div className="card-body bg-white/10 text-white font-serif italic">

                            <h5>{
                                recipe.recipe.label
                            }</h5>
                            
                        </div>

                        <ul className="list-group list-group-flush">

                            <li className="list-group-item bg-white/10 text-white font-serif italic">
                                <h6>DishType : {
                                    recipe.recipe.dishType
                                }</h6>
                            </li>
                            <li className="list-group-item bg-white/10 text-white font-serif italic">
                                <h6>MealType : {
                                    recipe.recipe.mealType
                                }</h6>
                            </li>
                            <li className="list-group-item bg-white/10 text-white font-serif italic">
                                <h6>CuisineType : {
                                    recipe.recipe.cuisineType
                                }</h6>
                            </li>
                            <li className="list-group-item bg-white/10 text-white font-serif italic">
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
                            className="btn  text-light bg-white/10 w-100 font-serif italic"
                            target="_blank"
                            rel="noreferrer noopener">Full Recipe</a>
                            </div>
               <div className="border border-light border  border-opacity-25">
                    <button  className="btn  text-light bg-white/10 w-100 font-serif italic" onClick={
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
    );
};

export default Recipes;
