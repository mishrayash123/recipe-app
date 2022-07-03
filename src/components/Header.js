import React from "react";

const Header = props => {
    const {search, onInputChange, onSearchClick }= props;

    return(
       <div className="jumbotron mt-1 bg-slate-200 dark:bg-black p-5">
           <h1 className="display-1 text-center text-danger mb-5 italic" >
Food Recipes</h1>
  <form onSubmit={onSearchClick}>
  <div className="input-group  mx-auto">
  <input type="text" className="form-control bg-gradient-to-r from-rose-900 via-yellow-900 to-green-900 text-white border rounded-1" placeholder="Recipe's name" value={search} onChange={onInputChange} aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <button type="button" className=" text-black dark:bg-white btn btn-primary dark:hover:bg-red-500 border border-primary rounded-1" onClick={onSearchClick}>Search</button>
</div>
  </form>
       </div>
    );
};

export default Header;