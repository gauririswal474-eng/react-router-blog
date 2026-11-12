import { popularPosts } from "../data/posts.js";

export default function PopularPosts() {
  return (
    <section className="card side-card">
      <h4 className="side-title">Popular Posts</h4>
      <ul className="popular-list">
        {popularPosts.map((post) => (
          <li key={post.id}>
            <img src={post.image} alt="" />
            <div>
              <span className="popular-title">{post.title}</span>
              <span className="popular-sub">{post.subtitle}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
