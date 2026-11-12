import { useState } from "react";

// One blog post card. "Read more" expands / collapses the full text.
export default function PostCard({ post }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="card post-card">
      {post.type !== "text" && (
        <div className="post-media">
          <img src={post.image} alt="" />
          {post.type === "video" && (
            <span className="play-button" aria-hidden="true">&#9654;</span>
          )}
        </div>
      )}

      <div className="card-body">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-meta">
          {post.description}, <span>{post.date}</span>
        </p>
        <p className="post-text">
          {post.text}
          {expanded && <> {post.more}</>}
        </p>

        <div className="post-footer">
          <button
            type="button"
            className="btn btn-grey"
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "READ LESS" : "READ MORE"} &raquo;
          </button>
          <span className="comments">
            Comments <b>{post.comments}</b>
          </span>
        </div>
      </div>
    </article>
  );
}
