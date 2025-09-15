import React, { useRef, useEffect } from "react"; // Import React hooks
import emailjs from "emailjs-com"; // Import EmailJS for sending emails
import AOS from "aos"; // Import AOS for scroll animations
import "aos/dist/aos.css"; // Import AOS CSS

function Contact() {
  const form = useRef(); // Create a reference for the form element

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animate elements for 1 second, only once
  }, []);

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload

    emailjs
      .sendForm(
        "service_rnq0eoo", // Your EmailJS service ID
        "template_tc29bzm", // Your EmailJS template ID
        form.current,       // Current form data
        "ZhPwTGz92vTAKZfQv" // Your EmailJS public key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!"); // Show success alert
          form.current.reset();                   // Clear form fields
        },
        (error) => {
          alert("❌ Failed to send message. Please try again."); // Show error alert
        }
      );
  };

  return (
    // Section wrapper for contact form with AOS fade-up animation
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2>Contact Me</h2>
      <p className="muted">
        Interested in working together? Fill out the form below or reach me directly at{" "}
        <a href="mailto:alighar12345@gmail.com">alighar12345@gmail.com</a>.
      </p>

      {/* Contact form */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Your Name" required />  {/* Name input */}
        <input type="email" name="from_email" placeholder="Your Email" required /> {/* Email input */}
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea> {/* Message input */}
        <button type="submit">Send Message</button> {/* Submit button */}
      </form>
    </section>
  );
}

export default Contact; // Export component for use in App.js
