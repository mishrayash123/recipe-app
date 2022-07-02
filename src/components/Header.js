import React from "react";

const Header = props => {
    const {search, onInputChange, onSearchClick }= props;

    return(
       <div className="jumbotron mt-16 bg-slate-800 dark:bg-black p-5">
           <h1 className="display-1 text-center text-danger mb-5 italic" >
Food Recipes</h1>
  <form onSubmit={onSearchClick}>
  <div className="input-group  mx-auto">
  <input type="text" className="form-control" placeholder="Recipe's name" value={search} onChange={onInputChange} aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <button type="button" className="btn btn-primary" onClick={onSearchClick}>Search</button>
</div>
  </form>
       </div>
    );
};

export default Header;