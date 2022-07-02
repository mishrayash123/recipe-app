import React,{useEffect,useState} from "react";
import { doc, setDoc ,deleteDoc} from "firebase/firestore";
import { db } from "./firebase-config"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import {  getDoc } from "firebase/firestore";


const Recipes = (props) => {
    const {recipes} = props;
    const [uid, setuid] = useState("");
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
          setuid(user.uid);
          } else {
           setuid("");
          }
        });
        
      }, [auth.currentUser]);




    return (
        <div className="row mt-4 mb-72">
            {
            recipes.map(recipe => (
                <div className="col-md-3 mt-4  bg-slate-800 dark:bg-black" >
                    <div className="card py-2 border-danger  text-center bg-warning">
                <div className=" text-end m-1">
                <h5  id={recipe.recipe.label}></h5>
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
                        <div className="card-body bg-success">

                            <h5>{
                                recipe.recipe.label
                            }</h5>
                            
                        </div>

                        <ul className="list-group list-group-flush">

                            <li className="list-group-item bg-info">
                                <h6>DishType : {
                                    recipe.recipe.dishType
                                }</h6>
                            </li>
                            <li className="list-group-item bg-info">
                                <h6>MealType : {
                                    recipe.recipe.mealType
                                }</h6>
                            </li>
                            <li className="list-group-item bg-info">
                                <h6>CuisineType : {
                                    recipe.recipe.cuisineType
                                }</h6>
                            </li>
                            <li className="list-group-item bg-info">
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
                        <a href={
                                recipe.recipe.url
                            }
                            className="btn btn-secondary mt-1"
                            target="_blank"
                            rel="noreferrer noopener">Full Recipe</a>
               
                    <button  className="btn btn-danger mt-1" onClick={
                       async (e) =>{
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
                    }> add to fav</button>
                    </div>
                </div>
            ))
        } </div>
    );
};

export default Recipes;
