import React from "react";



const Fav = (props) => {
    const {fav} = props;
    
    return (
        <div className="row m-4">
        {
        fav.map(fav => (
            <div className="col-md-3 mt-4">
                <div className="card py-2 border-danger  text-center bg-warning">
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
                    <div className="card-body bg-success">

                        <h5>{
                            fav.label
                        }</h5>
                    </div>

                    <ul className="list-group list-group-flush">

                        <li className="list-group-item bg-info">
                            <h6>DishType : {
                                fav.dishtype
                            }</h6>
                        </li>
                        <li className="list-group-item bg-info">
                            <h6>MealType : {
                                fav.mealtype
                            }</h6>
                        </li>
                        <li className="list-group-item bg-info">
                            <h6>CuisineType : {
                               fav.cuisinetype
                            }</h6>
                        </li>
                        <li className="list-group-item bg-info">
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
                    <a href={
                            fav.url
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

export default Fav;
