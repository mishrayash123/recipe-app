import React from "react";
import sk from '../sk.jpg'
import sd from '../sd.jpg'
import sp from '../sp.jpg'

const Default = props => {
    return(
        <div className="card-group mt-5 mx-2 my-2">
  <div className="card m-1">
    <img src={sk} className="figure-img img-fluid rounded" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Search your recipe</h5>
      <p className="card-text">If you want your recipe then search your recipe.</p>
    </div>
  </div>
  <div className="card m-1">
    <img src={sd} className="figure-img img-fluid rounded" alt="..." />
    <div className="card-body">
      <h5 className="card-title"> Recipe content</h5>
      <ul>
        <li>DishType</li>
        <li>MealType</li>
        <li>CuisineType</li>
        <li>Calories</li>
        </ul>
    </div>
  </div>
  <div className="card m-1">
    <img src={sp} className="figure-img img-fluid rounded" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Full recipe</h5>
      <p className="card-text">For full recipe go to link of "Full Recipe", click on icon and use it.</p>
    </div>
  </div>
</div>
    );
};
export default Default;