import React from "react";
import sk from '../images/sk.jpg'
import sp from '../images/sp.jpg'
import wa from '../images/wa.jpg'
import wb from '../images/wb.jpg'
import wc from '../images/wc.jpg'
import wd from '../images/wd.jpg'
import we from '../images/we.jpg'
import wf from '../images/wf.jpg'
import wg from '../images/wg.jpg'
import er from '../images/er.jpg'
import ert from '../images/ert.jpg'

const Default = props => {
    return(
      <div className=" mb-40 bg-rose-900 dark:bg-black">
      <div className="card mb-3 w-75 bg-white/10  text-white" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={sk} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text text-center font-bold italic text-xl">This is site for searching food recipes.</p>
        <p className="card-text text-center font-bold italic text-xl">&</p>
        <p className="card-text text-center font-bold italic text-xl">You can add recipes in your favourite list.</p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3 w-75 bg-white/10  text-white" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={sp} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text text-center font-bold italic text-xl">Recipes info</p>
        <div className="text-center">
       <ul className="mt-1">
        <li>DishType </li>
        <li>MealType </li>
        <li>CuisineType  </li>
        <li>Calories</li>
        <li>Go to full recipe</li>
       </ul>
       </div>
      </div>
    </div>
  </div>
</div>
<div className="row row-cols-1 row-cols-md-3 g-4 m-3">
  <div className="col ">
    <div className="card bg-white/10  text-white">
      <img src={wa} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Breakfast </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-white/10  text-white">
      <img src={wb} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Starter</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-white/10  text-white">
      <img src={wc} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Non veg</p>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card bg-white/10  text-white">
      <img src={we} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Cake</p>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card bg-white/10  text-white ">
      <img src={wf} className="card-img-top " alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Salads</p>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card bg-white/10  text-white">
      <img src={wg} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Pizza</p>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card bg-white/10  text-white">
      <img src={er} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Ingredients</p>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card bg-white/10  text-white">
      <img src={ert} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center"> Lunch & Dinner</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-white/10  text-white">
      <img src={wd} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Chinese </p>
      </div>
    </div>
  </div>
</div>
</div>
    );
};
export default Default;