import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../Redux/blogSlice";
import { ImBlog } from "react-icons/im";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const sortedBlogs = [...blogs].reverse();
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const handleDelete = (displayedIndex) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const actualIndex = blogs.length - 1 - displayedIndex;
      dispatch(deleteBlog(actualIndex));
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#f8f8f8",
        minHeight: "300px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2
        className="text-3xl"
        style={{ marginBottom: "1.5rem", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}
      >
        <ImBlog style={{ color: "#2e7d32" }} />
        Blogs Feed
      </h2>

      {sortedBlogs.length === 0 ? (
        <p style={{ textAlign: "center" }}>No blogs uploaded yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {sortedBlogs.map((blog, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt="Blog"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />
              )}
              <div style={{ padding: "1rem" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "0.5rem",
                    color: "#2c3e50",
                    fontWeight: "bold",
                  }}
                >
                  {blog.title}
                </h3>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "#555",
                    marginBottom: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  {blog.content.length > 100
                    ? blog.content.slice(0, 100) + "..."
                    : blog.content}
                </p>

                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#888",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <FaCalendarAlt /> {blog.date}
                </p>

                

                {isAdmin && (
                  <button
                    onClick={() => handleDelete(idx)}
                    style={{
                      marginTop: "0.5rem",
                      color: "red",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    🗑️ Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
