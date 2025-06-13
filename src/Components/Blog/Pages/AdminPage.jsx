import React, { useState, useEffect } from 'react';
import BlogUpload from '../Compo/BlogUpload';
import { IoIosLogOut } from "react-icons/io";

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // Check localStorage on load
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    setAuthenticated(isAdmin);
  }, []);

  // Login function
  const handleLogin = () => {
    const input = prompt("Enter admin password:");
    if (input === "admin123") {
      setAuthenticated(true);
      localStorage.setItem("isAdmin", "true");
    } else {
      alert("Incorrect password!");
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setAuthenticated(false);
  };

  return (
    <div style={{ padding: "2rem", background: "#f0f0f0", minHeight: "100vh" }}>
      {authenticated ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
            <h2 className='text-black text-3xl'> Welcome Admin</h2>
            <button
              onClick={handleLogout}
              style={{
                padding: "8px 16px",
                backgroundColor: "#ff4d4f",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
             <IoIosLogOut />

            </button>
          </div>
          <BlogUpload />
        </>
      ) : (
        <>
          <h2 className='text-black text-3xl text-center mt-2.5'> Admin Login</h2>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
  <button 
    onClick={handleLogin}
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      backgroundColor: "#1f1f1f",
      color: "white",
      border: "1px solid grey",
      borderRadius: "5px",
      marginTop: "1rem",
    }}
  >
    Login to Upload Blog
  </button>
</div>

        </>
      )}
    </div>
  );
};

export default AdminPage;
