import React from 'react';
import Profile from './profile/Profile';
import ProfileImage from './profile/paw.jpg';

const App = () => {
  const handleName = (name) => {
    alert(`Hello, my name is ${name}`);
  };

  return (
    <div>
      <Profile
        fullName="Adepegba Adegoke"
        bio="I LOVE FOOD"
        profession="Frontend Developer"
        handleName={handleName}
      >
        <img src={ProfileImage} alt="Profile" />
      </Profile>
    </div>
  );
};

export default App;