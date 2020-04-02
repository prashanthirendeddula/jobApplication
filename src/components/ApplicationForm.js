import React from 'react'
import {connect} from "react-redux"
class ApplicationForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
             name:'',
            email :'',
            phone:'',
        jobTitle:'',
        experience:'',
        skills:'',


        }
    }
        handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        handleJobChange=(e)=>{
            this.setState({
                jobTitle:e.target.value
            })
        }
        handleSubmit=(e)=>{
            e.preventDefault()
         const formData={
             name:this.state.name,
             email:this.state.email,
             phone:this.state.phone,
             jobTitle:this.state.jobTitle,
             skills:this.state.skills,
             experience:this.state.experience

         }
         console.log(formData)
         this.props.handleSubmit(formData)

    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/><br/>
            <label htmlFor="email">Email adress</label>
            <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
            <label htmlFor="phone">Contact Number</label>
            <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange}/><br/>
            <label htmlFor="jobTitile">jobTitle</label>
            <select id="jobTitile" onChange={this.handleJobChange}>
                <option>select</option>
                <option>Front-End Developer</option>
                <option>Node.js Developer</option>
                <option>MEAN Stack Developer</option>
                <option>FULL Stack Developer</option>
            </select><br/>
            <label htmlFor="experience">Experience</label>
            <input id="experience" name="experience"  value={this.state.experience} onChange={this.handleChange}/><br/>
            <label htmlFor="skills" >Skills</label>
            <textarea
                rows="2"
                cols='20'
                id="skills" name="skills"
                value={this.state.skills}
                onChange={this.handleChange}>
            </textarea><br/>
            <input type="submit" value="send application"/>
          
            </form></div>
        )
    }
}
export default connect() (ApplicationForm)