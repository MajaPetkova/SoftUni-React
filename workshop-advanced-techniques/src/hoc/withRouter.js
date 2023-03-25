import {useNavigate, useParams, } from "react-router-dom"

const withRouter=(Component)=>{
 const ReactWrapper =(props ) =>{
    const navigate= useNavigate();
    const params= useParams();

        return<Component {...props} navigate={navigate} params={params}/>
 }
   
    return ReactWrapper
}
export default withRouter;