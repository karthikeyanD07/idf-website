// BlogPage.jsx or wherever you're showing blog posts

import { useEffect, useState } from 'react';
import { client } from '../sanityClient'; // your configured sanity client
import { PortableText } from '@portabletext/react';

function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "post"]{
      title,
      slug,
      body,
      publishedAt,
      mainImage {
        asset-> {
          url
        }
      }
    }`).then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <h1>shbvjhbjvbdfjbjdbvjbjdxv</h1>
      {posts.map((post) => (
        <div key={post.slug.current}>
          <h2>{post.title}</h2>
          {post.mainImage && (
            <img src={post.mainImage.asset.url} alt={post.title} width="300" />
          )}
          <p>{new Date(post.publishedAt).toDateString()}</p>

          {/* ✅ Here’s where you use PortableText */}
          <PortableText value={post.body} />
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
