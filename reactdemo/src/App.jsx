import React, { useState, useEffect } from 'react';
import UserForm from './Components/userForm';
import UserList from './Components/UserList';
import Alert from './Components/Alert';
import { getAllUsers, addUser, updateUser, deleteUser } from './services/api';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [alert, setAlert] = useState({ message: '', type: '' });

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      if (response.success) {
        setUsers(response.data);
      }
    } catch (error) {
      showAlert('Failed to fetch users', 'error');
    }
  };

  const handleAddUser = async (userData) => {
    try {
      const response = await addUser(userData);
      if (response.success) {
        showAlert('User added successfully!', 'success');
        fetchUsers();
      } else {
        showAlert(response.message || 'Failed to add user', 'error');
      }
    } catch (error) {
      showAlert('Failed to add user', 'error');
    }
  };

  const handleUpdateUser = async (userData) => {
    try {
      const response = await updateUser(editUser.id, userData);
      if (response.success) {
        showAlert('User updated successfully!', 'success');
        setEditUser(null);
        fetchUsers();
      } else {
        showAlert(response.message || 'Failed to update user', 'error');
      }
    } catch (error) {
      showAlert('Failed to update user', 'error');
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await deleteUser(id);
        if (response.success) {
          showAlert('User deleted successfully!', 'success');
          fetchUsers();
        } else {
          showAlert(response.message || 'Failed to delete user', 'error');
        }
      } catch (error) {
        showAlert('Failed to delete user', 'error');
      }
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancel = () => {
    setEditUser(null);
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: '', type: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          User Management System
        </h1>

        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ message: '', type: '' })}
        />

        <UserForm
          onSubmit={editUser ? handleUpdateUser : handleAddUser}
          editUser={editUser}
          onCancel={handleCancel}
        />

        <UserList
          users={users}
          onEdit={handleEdit}
          onDelete={handleDeleteUser}
        />
      </div>
    </div>
  );
};

export default App;