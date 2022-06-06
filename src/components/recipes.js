import React from "react";

const Recipes = (props) => {
    const {recipes} = props;

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
                    </div>
                </div>
            ))
        } </div>
    );
};

export default Recipes;
