import '../App.css'
import { useState, useEffect } from 'react';

const Home = ({ credentialResponse }) => {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState(null);


  useEffect(() => {
    if (credentialResponse) {
      const { picture, username: given_name } = credentialResponse;
      setAvatar(picture);
      setUsername(given_name);
    }
  }, [credentialResponse]);

  return (
    <>
      <div className="p-12 border rounded-xl items-center flex flex-col">
        <img src={avatar} className="w-1/2 rounded-full pb-4" alt="Google Avatar" />
        <h2 className="text-2xl">Welcome {username}</h2>
      </div>
    </>
  )
}

export default Home;
