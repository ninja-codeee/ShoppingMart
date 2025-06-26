import axios from "../../api/axiosconfig";
import { loaduser , removeuser } from "../reducers/userSlice";

export const asynccurrentuser = () => async (dispatch , getState) =>{

    try {
        
      const user =  JSON.parse(localStorage.getItem("user"))

      if(user) {
        dispatch(loaduser(user))
      }
        else console.log("Please Login to access the resources!!!")

    } catch (error) {
        console.log(error)
    }
}
export const asynclogoutuser = (user) => async (dispatch , getState) =>{

    try {
        
        localStorage.removeItem("user");
        dispatch(removeuser())
        console.log("User Logged out !!!")
    } catch (error) {
        console.log(error);

    }
}
export const asyncloginuser = (user) => async (dispatch , getState) =>{

    try {
        const {data} = await axios.get(`users?email=${user.email}&password=${user.password}`);
        console.log(data[0]);
        localStorage.setItem("user",JSON.stringify(data[0]))
    } catch (error) {
        console.log(error)
    }
}


 export const asyncregisterusers = (user) => async (dispatch , getState) => {

    try {
        const res = await axios.post("/users",user);
       dispatch( loaduser(res.data))
       dispatch(asynccurrentuser())

    } catch (error) {

        console.log(error);
        
    }
}

 export const asyncupdateusers = ( id ,user) => async (dispatch , getState) => {

    try {
        
        const { data } = await axios.patch("/users/"+ user.id ,user)
       localStorage.setItem("user" , JSON.stringify(data))
        dispatch(loaduser(data))
    } catch (error) {

        console.log(error);
        
    }
}
 export const asyncdeleteuser = (id) => async (dispatch , getState) => {

   try {
    await axios.delete("/users/" + id);
    dispatch(asynclogoutuser());
    
    
   } catch (error) {
        console.log(error)    
   }
};