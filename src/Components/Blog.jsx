import './Blog.css';
import { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import { PortableText } from '@portabletext/react';

function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc){
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset-> {
            url
          }
        }
      }`)
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="blog-container">
      <header>
        <h1 className="blog-heading">Blog Posts</h1>
      </header>

      {posts.length === 0 ? (
        <p className="blog-date">No posts available at the moment.</p>
      ) : (
        posts.map((post) => (
          <article key={post.slug.current} className="blog-post">
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-date">
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>

            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="blog-image"
              />
            )}

            <section className="blog-content">
              <PortableText value={post.body} />
            </section>
          </article>
        ))
      )}
    </main>
  );
}

export default BlogPage;
