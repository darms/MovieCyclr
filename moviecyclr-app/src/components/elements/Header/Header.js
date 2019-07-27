import React from 'react';
import './Header.css';


const Header = () => {
   
    return (
       <div className="rmdb-header">

           <div class="rmdb-header-content">

               <img className ="rmdb-logo" src="./images/reactMovie_logo.png" alt="rmdb-logo" />
                <img className="rmdb-tmdb-logo" src="./images/rmdb_logo.png" alt="tmdb-logo" />
           </div>
       </div>

    )
    }
    



export default Header;