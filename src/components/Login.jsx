import '../App.css'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import { jwtDecode } from "jwt-decode";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { ParticleBackground } from '../components/ParticleBackground';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsername, setToken } from '../actions/sessionActions';


function Login() {
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentialResponse, setCredentialResponse] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);

    if (decoded.email_verified === true) {
      const username = decoded.given_name;
      const picture = decoded.picture;
      const token = credentialResponse?.credential;

      setCredentialResponse({
        ...credentialResponse,
        picture,
        username
      });
      localStorage.setItem('avatar', decoded.picture);
      localStorage.setItem('username', decoded.given_name);
      dispatch(setUsername(username));
      dispatch(setToken(token));

      return true;
    } else {
      console.log("Error!");
      return false;
    }
  }

  const handleLoginError = () => {
    setError('Login failed. Please try again.'); // Set error message for unsuccessful login
  };
  const combinedSuccessHandler = (credentialResponse) => {
    const success = handleLoginSuccess(credentialResponse);
    if (success) {
      setIsAuthenticated(true); // Update the isAuthenticated state to true
      navigate("/home");
      console.log("Inside combinedSuccessHandler and navigating to /home")
    }
  };
  return (
    <>
      <ParticleBackground />
      {!isAuthenticated &&
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
          <div className="h-full w-full items-center flex flex-col">
            <div className="w-1/2 flex-col p-4 flex justify-center items-center border rounded-xl">
              <img src={viteLogo} className="w-1/4 pb-4" alt="Vite logo" />
              <h2 className="text-2xl">Google Auth Integration</h2>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div className="h-full p-8">
                <GoogleLogin
                  className="w-1/2 justify-center"
                  onSuccess={combinedSuccessHandler}
                  onError={handleLoginError}
                />
              </div>
            </div>
          </div>
        </GoogleOAuthProvider>
      }
    </>
  );
}

export default Login
