import React from "react"
import {connect} from "react-redux"
import ApplicationForm from"../components/ApplicationForm"
import {startAddApplication} from "../actions/Application"

function Application (props){
    const handleSubmit=(formData)=>{
        props.dispatch(startAddApplication(formData))
    }
    return(
        <div>
           <h1>Apply for job</h1>
            <ApplicationForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect() (Application)