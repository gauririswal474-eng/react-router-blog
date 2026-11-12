import PostCard from "../components/PostCard.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import PopularPosts from "../components/PopularPosts.jsx";
import Tags from "../components/Tags.jsx";
import { posts } from "../data/posts.js";

// Route: "/"  - big featured post on the left, profile + popular posts + tags on the right
export default function Home() {
  return (
    <div className="page-grid page-grid-home">
      <div className="column">
        <PostCard post={posts[0]} />
      </div>
      <aside className="column">
        <ProfileCard />
        <PopularPosts />
        <Tags />
      </aside>
    </div>
  );
}
