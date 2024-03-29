const baseUrl = "http://localhost:3005/api/users";

export const getAll = async() => {
  const response = await fetch(`${baseUrl}`);
  const result = await response.json();

  return result.users;
};

export const getOne = async(userId)=>{
    const res = await fetch(`${baseUrl}/`+ userId );
    const result= await res.json();

    return result.user;
};
export const create= async(userData) =>{
    const res = await fetch(`${baseUrl}`, {
        method: "POST",
        headers:{
            "content-type": "application/json"
        }, 
        body: JSON.stringify(userData)
    });  
     if(res.ok){
         const result= await res.json();
         return result.user;
     }else{
        throw {message: "Unable to create user"}
     }
}  
export const update= async(userData) =>{
    const res = await fetch(`${baseUrl}/` + userData, {
        method: "PUT",
        headers:{
            "content-type": "application/json"
        }, 
        body: JSON.stringify(userData)
    } );   
    const result= await res.json(); 
    
    return result.user;
}  
