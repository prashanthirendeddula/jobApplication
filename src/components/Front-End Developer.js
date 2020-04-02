import React from "react"
import {Link} from 'react-router-dom'
import AdminTable from "./AdminTable"

class FrontEndDeveloper extends React.Component{
        constructor(props){
            super()
            this.state={
                FrontEndDeveloper:true,
                NodejsDeveloper:false,
                MEANDeveloper:false,
                FullStackDeveloper:false

            }
        }
    
    render(){
        return(
            <div>
                <h1>Front-End Developers</h1>
                <AdminTable/>
                           </div>
        )
    }
}

export default FrontEndDeveloper