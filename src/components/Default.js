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
      <div className="bg-gray-50 dark:bg-black">
      <div className="card mb-3 w-75 mx-auto bg-stone-900 dark:bg-white/10  text-white" >
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
<div className="card mb-3 w-75 mx-auto bg-stone-900 dark:bg-white/10  text-white" >
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
<div className="row row-cols-1 row-cols-md-3 g-4 m-3 w-75 mx-auto">
  <div className="col ">
    <div className="card bg-stone-900 dark:bg-white/10  text-white">
      <img src={wa} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Breakfast </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-stone-900 dark:bg-white/10  text-white">
      <img src={wb} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Starter</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-stone-900 dark:bg-white/10  text-white">
      <img src={wc} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Non veg</p>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card bg-stone-900 dark:bg-white/10  text-white">
      <img src={we} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Cake</p>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card bg-stone-900 dark:bg-white/10  text-white ">
      <img src={wf} className="card-img-top " alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Salads</p>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card bg-stone-900 dark:bg-white/10  text-white">
      <img src={wg} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Pizza</p>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card bg-stone-900 dark:bg-white/10  text-white">
      <img src={er} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Ingredients</p>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card bg-stone-900 dark:bg-white/10  text-white">
      <img src={ert} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center"> Lunch & Dinner</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-stone-900 dark:bg-white/10  text-white">
      <img src={wd} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">Chinese </p>
      </div>
    </div>
  </div>
</div>
<div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border border-light border  border-opacity-10 mt-5" >
        <div className="w-32 mx-auto ">
      <a className="nav-link hover:text-white" target="_blank"  href="https://github.com/mishrayash123/recipe-app"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github m-1" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
      </div>
      <div className="mb-1">
    <h5 className=" text-center text-light mt-1 mb-1 italic ">Copyright © 2022 • Yash Kumar Mishra</h5>
      </div>
      
  </div>
</div>
    );
};
export default Default;