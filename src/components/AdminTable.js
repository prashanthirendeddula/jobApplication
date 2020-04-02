import React from "react"
import {connect} from "react-redux"
import FrontEndDeveloper from "./Front-End Developer"
function AdminTable (props){
    const  handleClick=(id)=>{
        const details=props.forms.find(form=>form._id==id)
        window.alert(
           `details
           name:${details.name}
           email:${details.email}
           skills:${details.skills}
           experience:${details.experience}`
        )
            
        

    }

    return(
        <div>
 <table border="1">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>technicalskills</th>
                            <th>experience</th>
                            <th>applieddate</th>
                            <th>viewdetails</th>
                            <th>updateapplication/status</th>
                              </tr>
                    </thead>
                    <tbody>
                        
                        {props.form.map(ele=>{
                            return <tr key={ele._id}>
                                <td>{ele.name}</td>
                                <td>{ele.skills}</td>
                                <td>{ele.experience}</td>
                                <td>{ele.createdAt
                                         .split("T")[0]
                                         .split("-")
                                         .reverse()
                                         .join('-')}</td>
                              <td><button onClick={()=>{handleClick(ele._id)}} >viewDatails</button></td>
                              
                                <td><button>shortList</button><button color="primary">reject</button></td>
                            </tr>
                        })}
                        
                        
                        
                                           </tbody>
                </table>
  
        </div>
    ) 
}

const mapStateToProps=(state)=>{
    return{
        forms:state.forms,
         form:state.forms.filter(form=>form.jobTitle=="Front-End Developer"),
         form:state.forms.filter(form=>form.jobTitle=="Node.js Developer")


    }
}
export default connect(mapStateToProps) (AdminTable)