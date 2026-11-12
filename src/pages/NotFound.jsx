import { Link } from "react-router-dom";

// Shown for any unknown route
export default function NotFound() {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Oops! This page does not exist.</p>
      <Link to="/" className="btn btn-green">Back to Home</Link>
    </div>
  );
}
