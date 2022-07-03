import React from "react";
import sk from '../sk.jpg'
import sd from '../sd.jpg'
import sp from '../sp.jpg'

const Default = props => {
    return(
      <div className=" mb-40 bg-slate-200 dark:bg-black">
        <div className="card-group mt-5 mx-2 my-2 ">
  <div className="card m-1 bg-gradient-to-r from-rose-900 via-yellow-900 to-green-900">
    <img src={sk} className="figure-img img-fluid rounded" alt="..." />
    <div className="card-body ">
      <h5 className="card-title text-white">Search your recipe</h5>
      <p className="card-text text-white">If you want your recipe then search your recipe.</p>
    </div>
  </div>
  <div className="card m-1 bg-gradient-to-r from-rose-900 via-yellow-900 to-green-900">
    <img src={sd} className="figure-img img-fluid rounded" alt="..." />
    <div className="card-body">
      <h5 className="card-title text-white"> Recipe content</h5>
      <ul>
        <li className="text-white">DishType</li>
        <li className="text-white">MealType</li>
        <li className="text-white">CuisineType</li>
        <li className="text-white">Calories</li>
        </ul>
    </div>
  </div>
  <div className="card m-1 bg-gradient-to-r from-rose-900 via-yellow-900 to-green-900">
    <img src={sp} className="figure-img img-fluid rounded" alt="..." />
    <div className="card-body">
      <h5 className="card-title text-white">Full recipe</h5>
      <p className="card-text text-white">For full recipe go to link of "Full Recipe", click on icon and use it.</p>
    </div>
  </div>
</div>
</div>
    );
};
export default Default;