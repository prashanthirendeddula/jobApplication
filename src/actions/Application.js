import axios from "../config/axios"

export const getForms=(forms)=>{
    return{
        type:"GET_FORMS",payload:forms
    }
}
export const startGetForms=()=>{
    return(dispatch)=>{
        axios.get('/users/application-forms')
        .then((response)=>{
            console.log(response.data)
            const forms=response.data
            dispatch(getForms(forms))
        })
    }
}

export const addForm=(form)=>{
    return{
        type:"ADD_FORM", payload:form
    }
}
 export const startAddApplication=(formData)=>{
    return(dispatch)=>{
        axios.post("/users/application-form",formData)
        .then((response)=>{
           
                       console.log(response.data)
           const form=response.data
           dispatch(addForm(form))
        })
    }
}