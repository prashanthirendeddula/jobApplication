import React from "react"
import {connect} from 'react-redux'
import {startGetForms} from "../actions/Application"
import FrontEndDeveloper from "./Front-End Developer"
class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            frontEnd:true,
            nodeJs:false,
            mean:false,
            full:false,
            job:'Front-End FrontEndDeveloper'
        }
    }
    render(){
        if(this.props.forms.length==0){
            this.props.dispatch(startGetForms())
        }
        const jobs=this.props.forms.filter(job=>job.jobTitle==this.state.job)
        return(
            <div>
                <h1>admin dashboard</h1>
                <button>FrontEndDeveloper</button>
                <button>Node js  Developer  </button>
                <button>MEAN stack Developer</button>
                <button>Full stack Developer</button>

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        forms:state.forms
    }
}
export default connect(mapStateToProps)(Admin)