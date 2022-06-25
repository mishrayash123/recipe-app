import React,{useEffect,useState} from "react";
import { doc, setDoc ,deleteDoc} from "firebase/firestore";
import { db } from "./firebase-config"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

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
        <div className="row mt-4">
            {
            recipes.map(recipe => (
                <div className="col-md-3 mt-4">
                    <div className="card py-2 border-danger  text-center bg-warning">
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
                            className="btn btn-secondary"
                            target="_blank"
                            rel="noreferrer noopener">Full Recipe</a>

                    <button onClick={
                        (e) =>{
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
                       }
                    }> add to fav</button>
                    <button onClick={
                        (e) =>{
                            deleteDoc(doc(db,uid,recipe.recipe.label));
                       }
                    }> delete</button>
                    </div>
                </div>
            ))
        } </div>
    );
};

export default Recipes;
