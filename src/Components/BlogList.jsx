import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { Link } from "react-router-dom";
import "./BlogList.css"
function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc) {
        title,
        slug,
        publishedAt,
        mainImage {
          asset->{url}
        },
        body
      }`)
      .then((data) => setPosts(data));
  }, []);

  return (
      <div className="blog-grid">
    {posts.map((post) => (
      <div key={post.slug.current} className="blog-card">
        {post.mainImage?.asset?.url && (
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className="blog-image"
          />
        )}
        <div className="blog-content">
          <h2>
            <Link to={`/blog/${post.slug.current}`} className="blog-title">
              {post.title}
            </Link>
          </h2>
          <p className="blog-date">
            📅 {new Date(post.publishedAt).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </p>
          <p className="blog-excerpt">
            {post.body[0]?.children[0]?.text?.slice(0, 120)}...
          </p>
          <Link to={`/blog/${post.slug.current}`} className="blog-more">
            More →
          </Link>
        </div>
      </div>
    ))}
  </div>

  );
}

export default BlogList;
