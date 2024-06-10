import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/user.json')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching the user data:', error));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="profile">
      <div className='description'>
      <img src={user.avatar} alt={`${user.username}'s profile`} className="profile-picture" />
      <p className='name'>{user.username}</p>
      <p className='userInfo'>@{user.tag}</p>
      <p className='userInfo'>{user.location}</p>
      </div>
      <ul class="stats">
        
    <li className='item'>
      <span className="label">Followers</span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li className='item'>
      <span className="label">Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li className='item'>
      <span className="label">Likes</span>
      <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
    </div>
  );
};

export default Profile;