import { tags } from "../data/posts.js";

export default function Tags() {
  return (
    <section className="card side-card">
      <h4 className="side-title">Tags</h4>
      <div className="tag-list">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </section>
  );
}
