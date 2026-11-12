import PostCard from "../components/PostCard.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import PopularPosts from "../components/PopularPosts.jsx";
import { posts } from "../data/posts.js";
import { useAuth } from "../context/AuthContext.jsx";

// Route: "/dashboard" - profile + popular posts on the left, a feed of posts on the right
export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="page-grid page-grid-dashboard">
      <aside className="column">
        <ProfileCard />
        <PopularPosts />
      </aside>
      <div className="column">
        {user && (
          <p className="welcome">Welcome back, <b>{user.name}</b>!</p>
        )}
        {posts.slice(1).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
