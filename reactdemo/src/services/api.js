const  API_URL = 'http://localhost:5000/api/users';

//all the users
export const getAllUsers = async () => {
    try{ 
        const response =await fetch(API_URL);
        const data =await response.json();
        return data;


    }
    catch(error){
     console.log('error fetching users', error);
     throw error;

    }
};

//add a users
export const addUser = async(userData) => {
    try{   
        const response = await fetch(API_URL,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',

            },
            body: JSON.stringify(userData),
        });
        const data =await response.json();
        return data;
    }
    catch(error){
        console.log('error adding user', error);
        throw error;


    }
};

// update user
export const updateUser = async( id, userData) =>{
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method:'PUT',
            headers:{
                'Content-type': 'application/json',

            },
            body: JSON.stringify(userData),

        });
        const data = await response.json();
        return data;

    }
    catch(error){
        console.log('Error updating users' , error);
        throw error;
    }
};

// delete the user 
export const deleteUser = async(id) => {
    try{  
        const response = await fetch( `${API_URL}/${id}`,{
            method: 'DELETE',
        });
        const data = await response.json();
        return data;


    }
    catch(error){
          console.log( 'Error deleting users', error);
          throw error;

    }
};







