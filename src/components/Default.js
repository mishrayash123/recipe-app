import React from "react";
import sk from './sk.jpg'
import sp from './sp.jpg'
import wa from './wa.jpg'
import wb from './wb.jpg'
import wc from './wc.jpg'
import wd from './wd.jpg'
import we from './we.jpg'
import wf from './wf.jpg'
import wg from './wg.jpg'
import er from './er.jpg'
import ert from './ert.jpg'

const Default = props => {
    return(
      <div className=" mb-40 bg-rose-900 dark:bg-black">
      <div className="card mb-3 w-75 bg-red-50  text-fuchsia-900 dark:text-black" >
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
<div className="card mb-3 w-75 bg-red-50  text-fuchsia-900 dark:text-black" >
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
  <div className="col">
    <div className="h-100">
      <img src={wa} className="img-top border-0 rounded" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="h-100">
      <img src={wb} className="img-top border-0 rounded" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="h-100">
      <img src={wc} className="img-top border-0 rounded" alt="..." />
     
    </div>
  </div>
  <div className="col">
    <div className="h-100">
      <img src={ert} className="img-top border-0 rounded" alt="..." />
     
    </div>
  </div>
  <div className="col">
    <div className="h-100">
      <img src={we} className="img-top border-0 rounded" alt="..." />
     
    </div>
  </div>
  <div className="col">
    <div className="h-100">
      <img src={wf} className="img-top border-0 rounded" alt="..." />
     
    </div>
  </div>
  <div className="col">
    <div className="h-100">
      <img src={wg} className="img-top border-0 rounded" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="h-100">
      <img src={er} className="img-top border-0 rounded" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="h-100">
      <img src={wd} className="img-top border-0 rounded" alt="..." />
      
    </div>
  </div>
</div>
</div>
    );
};
export default Default;