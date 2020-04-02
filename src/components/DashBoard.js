import React from "react"
import FrontEndDeveloper from "./Front-End Developer"
import {Link} from "react-router-dom"
function DashBoard(props){
    return(
        <div>
            <h1>admindashboard</h1>
            
          <button><Link to='/frontenddeveloper' >FrontEndDeveloper</Link></button>  
           <button><Link to='/fullstackdeveloper'>FullstackDeveloper</Link></button> 
           <button><Link to='/meanstackdeveloper'>MEANstackDeveloper</Link></button> 
           <button><Link to='/nodejsdeveloper'>NodejsDeveloper</Link></button>  


            


        </div>
    )
}
export default DashBoard