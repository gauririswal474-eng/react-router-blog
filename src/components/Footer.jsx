import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Footer() {
  const { user } = useAuth();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>&copy; 2026 My Blog. All rights reserved.</p>
        {!user && (
          <Link to="/signup" className="footer-btn">Register for free</Link>
        )}
      </div>
    </footer>
  );
}
