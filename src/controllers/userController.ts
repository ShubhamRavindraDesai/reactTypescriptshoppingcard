import axios from "axios";

export const signupUser = async ( data: UserData) => {
    try {
        console.log("erroroo");
        
      const response = await axios.post(`${process.env.REACT_APP_USERURL}/signup`, data);
      console.log({response})
        if(response.status === 201){
            return response.data;
        } else {
            return 
        }
      
    } catch (err) {
        console.log(err)
        return err
    //   throw err;
    }
  }