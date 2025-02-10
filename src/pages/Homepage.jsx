import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <ThemeToggle />
      <h1>AI-Powered <span> Registration Tracker</span></h1>
      <p>Never Miss a Deadline – Smart Event Tracking, Simplified! <br/>
      Get Started with our AI-Powered Registration Tracker.
      </p>
      
      <Link to="/login" className="btn">Get Started</Link>
    </div>
  );
}

export default HomePage;


