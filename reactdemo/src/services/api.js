// Backend routes are mounted at /users in the backend server
const API_URL = 'http://localhost:5000/users';

//all the users
export const getAllUsers = async () => {
    try{ 
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        const data = await response.json();
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
        const response = await fetch(API_URL, {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',

            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        const data = await response.json();
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
        const response = await fetch(`${API_URL}/${id}`, {
            method:'PUT',
            headers:{
                'Content-type': 'application/json',

            },
            body: JSON.stringify(userData),

        });
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
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
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        const data = await response.json();
        return data;


    }
    catch(error){
          console.log( 'Error deleting users', error);
          throw error;

    }
};







