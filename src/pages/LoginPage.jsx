import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth } from "../firebase"; // Make sure to configure Firebase
import "../styles/Login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    // Handle traditional login logic (e.g., Firebase auth, backend API call)
    navigate("/add-event-job");
  };

  const handleOAuthLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      navigate("/add-event-job"); // Redirect on success
    } catch (error) {
      console.error("OAuth Login Error:", error);
    }
  };

  return (
    <div className="login-page">
      <ThemeToggle />
      <h2>Login</h2>

      {/* Email & Password Login */}
      <form onSubmit={handleEmailLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
        <div className="oauth-buttons">
        <button 
          className="google-login" 
          onClick={() => handleOAuthLogin(new GoogleAuthProvider())}
        >
          Sign in with Google
        </button>
        
      </div>
      </form>

      {/* OAuth Login Buttons */}
      
    </div>
  );
}

export default LoginPage;


     