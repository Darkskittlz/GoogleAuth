// import { useNavigate } from 'react-router-dom';
import '../App.css'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import { jwtDecode } from "jwt-decode";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { ParticleBackground } from '../components/ParticleBackground';
import Home from "./Home"

function Login() {
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    console.log(decoded);

    if (decoded.email_verified === true) {
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
    console.log("Successful authentication")
    const success = handleLoginSuccess(credentialResponse);
    if (success) {
      setIsAuthenticated(true); // Update the isAuthenticated state to true
    }
  };
  return (
    <>
      <ParticleBackground />
      {isAuthenticated ? (
        <Home />
      ) : (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
          <div className="h-full p-8 border rounded-xl items-center flex flex-col">
            <img src={viteLogo} className="w-1/2 pb-4" alt="Vite logo" />
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
        </GoogleOAuthProvider>
      )}
    </>
  );
}

export default Login
