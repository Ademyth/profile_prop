import React from 'react';
import PropTypes from 'prop-types';
// import ProfileImage from './profile/paw.jpg';


const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src='./profile/paw.jpg' alt="Profile" />
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click Me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Adepegba Adegoke',
  bio: 'I LOVE FOOD',
  profession: 'Frontend Developer',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Profile;