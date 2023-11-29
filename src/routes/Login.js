// Login.js
import React from 'react';
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LoginForm from "../component/LoginForm"; // You might need to create LoginForm.js

function Login() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://your-login-herhttps://images.unsplash.com/photo-1682695795798-1b31ea040caf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3Do-image.jpg" // Replace with your login hero image
        title="Login"
        btnClass="show"
      />
      <LoginForm /> {/* Create LoginForm.js for your login form */}
      <Footer />
    </>
  );
}

export default Login;
