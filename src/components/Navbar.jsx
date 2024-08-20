import '../App.css'
import { useState, useEffect } from 'react';


const Navbar = ({ credentialResponse }) => {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (credentialResponse) {
      console.log("credentials: ", credentialResponse)
      const { avatar: picture, username: given_name } = credentialResponse;
      setAvatar(picture);
      setUsername(given_name);
    }
  }, [credentialResponse]);

  return (
    <div className="w-full items-center py-2 top-0 fixed">
      <div className="flex  justify-end gap-4 mr-4">
        <h2 className="text-2xl">Welcome {username}</h2>
        <img src={avatar} className="w-1/12 rounded-full pb-4" alt="Avatar" />
      </div>
    </div>
  )
}

export default Navbar
