import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import axios
 from 'axios';

const EditAccount = () => {
    const { currentUser, authenticateUser } = useContext(AuthContext);

    const [username, setUsername] = useState(currentUser?.username || "");
    const [profileImage, setProfileImage] = useState(currentUser?.profileImage || "");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const myFormData = new FormData();
          if (username){
            myFormData.append("username", currentUser.username);
          }
            
          if (profileImage){
            myFormData.append("profileImage", currentUser.profileImage);
          }
    
          const response = await axios.patch(
            `${import.meta.env.VITE_API_URL}/auth/edit-account`,
            formData);
          setUser(response.data);
          alert("Account updated successfully!");
        } catch (error) {
          console.error("Error updating account:", error);
        }
      };

  return (
    <div className="edit-account-page">
      <h2>Edit Your Account</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Profile Image:</label>
        <input type="file" onChange={handleFileUpload} />

        {profileImage && <img src={profileImage} alt="Profile Preview" width="100px" />}

        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

export default EditAccount