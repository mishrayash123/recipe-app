import React, {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth, db} from "./firebase-config";
import {doc, deleteDoc} from "firebase/firestore";



const Fav = (props) => {
    const {fav} = props;
    const [uid, setuid] = useState("hfhjgvhb");
    const length =fav.length;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuid(user.uid);

                console.log(user);
            } else {
                setuid("");

            }
        });

    }, [auth.currentUser]);

    return (
        <>{ length===0 ? <div className="bg-slate-200 dark:bg-black">
        <h2 className=" font-serif text-3xl text-center mt-56 dark:text-white ">You have no favourite items</h2>
        <h2 className="text-white font-serif text-9xl text-center my-20 mb-56">🙅</h2>
        
    </div>  :

        <div className="mt-36 mb-56">
        <div className="row m-4">
        {
        fav.map(fav => (
            <div className="col-md-3 mt-4">
                <div className="card py-2 border-danger  text-center bg-gradient-to-r from-indigo-900 via-pink-900 to-orange-900">
                    {/* <img className="img-fluid w-50 mx-auto p-1 rounded-circle" src={recipe.recipe.image}></img> */}
                    <a href={
                            fav.url
                        }
                        target="_blank"
                        rel="noreferrer noopener">
                        <img className="img-fluid w-50 mx-auto p-1 rounded-circle"
                            src={
                                fav.image
                        }></img>
                    </a>
                    <div className="card-body bg- bg-gradient-to-r from-fuchsia-900 via-yellow-900 to-violet-900 text-white">

                        <h5>{
                            fav.label
                        }</h5>
                    </div>

                    <ul className="list-group list-group-flush">

                        <li className="list-group-item  bg-gradient-to-r from-fuchsia-900 via-yellow-900 to-violet-900 text-white">
                            <h6>DishType : {
                                fav.dishtype
                            }</h6>
                        </li>
                        <li className="list-group-item  bg-gradient-to-r from-fuchsia-900 via-yellow-900 to-violet-900 text-white">
                            <h6>MealType : {
                                fav.mealtype
                            }</h6>
                        </li>
                        <li className="list-group-item  bg-gradient-to-r from-fuchsia-900 via-yellow-900 to-violet-900 text-white">
                            <h6>CuisineType : {
                               fav.cuisinetype
                            }</h6>
                        </li>
                        <li className="list-group-item  bg-gradient-to-r from-fuchsia-900 via-yellow-900 to-violet-900 text-white">
                            <h6>Calories : {
                                fav.calories
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
                            fav.url
                        }
                        className="btn  text-light bg-gradient-to-r from-indigo-900 via-pink-900 to-orange-900 w-100"
                        target="_blank"
                        rel="noreferrer noopener">Full Recipe</a>
                        </div>
                         <div className="border border-light border  border-opacity-25">
                                    <button className="btn  text-light bg-gradient-to-r from-indigo-900 via-pink-900 to-orange-900 w-100"
                                        onClick={
                                            async (e) => {

                                                deleteDoc(doc(db, uid, fav.label));
                                                alert("Deleted from favourites");


                                            }
                                    }>
                                        Delete from fav &#9825;</button>
                                </div>
               
                </div>
            </div>
        ))
    } </div>
    </div>
    }
    </>
    );
};

export default Fav;
