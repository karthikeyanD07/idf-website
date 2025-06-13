import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../Redux/blogSlice";

const BlogUpload = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !image) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      addBlog({
        title,
        content,
        image,
        date: new Date().toLocaleString(),
      })
    );

    setTitle("");
    setContent("");
    setImage(null);
    alert("Blog uploaded!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
        background: "#e8f5e9",
        minHeight: "45vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <h2 className="text-2xl" style={{ marginBottom: "1.5rem",fontSize:"2xl", color: "#2e7d32", textAlign: "center" }}>
          Upload a New Blog
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
        >
          <input
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              padding: "0.8rem",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <textarea
            placeholder="Write your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            style={{
              padding: "0.8rem",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              resize: "vertical",
            }}
          />
<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
  {/* Custom Upload Button */}
  <label
    htmlFor="imageUpload"
    style={{
      display: "inline-block",
      padding: "0.75rem 1rem",
      backgroundColor: "#2e7d32",
      color: "#fff",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      textAlign: "center",
      width: "fit-content",
    }}
  >
    Upload Photo
  </label>

  <input
    id="imageUpload"
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    style={{ display: "none" }} // hide the default input
  />

  {/* Show selected file name or image preview */}
  {image && (
    <div style={{ marginTop: "0.5rem", textAlign: "center" }}>
      <img
        src={image}
        alt="Preview"
        style={{
          maxWidth: "100%",
          maxHeight: "200px",
          borderRadius: "8px",
          objectFit: "cover",
          border: "1px solid #ccc",
        }}
      />
    </div>
  )}
</div>

          <button
            type="submit"
            style={{
              padding: "0.75rem",
              fontSize: "16px",
              backgroundColor: "#2e7d32",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1b5e20")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2e7d32")}
          >
            Upload Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogUpload;
