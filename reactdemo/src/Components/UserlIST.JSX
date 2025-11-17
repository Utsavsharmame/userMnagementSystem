import { Users } from 'lucide-react'
import React from 'react'

const UserList = ({users, onEdit, onDelete}) => {

  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
    <h2 className='text-2xl font-bold mb-4'>User List</h2>

    {users.length === 0 ?(
        <p className="text-gray-500 text-center py-8">No users found. Add your first user!</p>
    ): (
        <div className=' overflow-x-auto'>
        <table className='w-full'>
            <thead>
            <tr className='bg-gray-100'>
            <th className='px-4 py-2  text-left'>ID</th>           
             <th className='px-4 py-2  text-left'> Name</th>
            <th className='px-4 py-2  text-left'> Email</th>
            <th className='px-4 py-2  text-left'> Phone</th> 
             <th className='px-4 py-2  text-left'>Actions</th>

            </tr>
            </thead>
            <tbody> 
              {
                users.map(user => (
                <tr key={user.id} className='border-b hover:bg-gray-50'>
                    <td className='px-4 py-3 '> {user.id}</td>

                     <td className='px-4 py-3 '> {user.name}</td>
                      <td className='px-4 py-3 '> {user.email}</td>
                       <td className='px-4 py-3 '> {user.phone}</td>
                        <td className='px-4 py-3 text-center'>

                        <button
                         onClick={()  =>onEdit(user)}
                         className='bg-yellow-500 text-white px-3 py-1 rounded
                         mr-2 hover:bg-yellow-600'
                        >


                            Edit
                        </button>




                        <button
                        onClick={() => onDelete(user.id)}
                        className='bg-red-500 text-white px-3 py-1 rounded
                        hover:bg-red-600'
                        > Delete</button>
                        </td>

                </tr>
              ))}
            
            
            </tbody>
        </table>
         </div>
    )}
      
    </div>
  )
}

export default UserList;
