import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import "./BlogDetail.css"

function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "post" && slug.current == $slug][0]{
        title,
        publishedAt,
        mainImage { asset->{url} },
        body
      }`, { slug })
      .then((data) => setPost(data));
  }, [slug]);

  if (!post) return <p className="p-6">Loading...</p>;

  return (
        <div className="blog-detail-container">
            <h1 className="blog-detail-title">{post.title}</h1>
            <p className="blog-detail-date">
                📅 {new Date(post.publishedAt).toDateString()}
            </p>
            {post.mainImage?.asset?.url && (
                <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="blog-detail-image"
                />
            )}
            <div className="blog-detail-body">
                <PortableText value={post.body} />
            </div>
    </div>

  );
}

export default BlogDetail;
