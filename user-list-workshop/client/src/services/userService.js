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
}