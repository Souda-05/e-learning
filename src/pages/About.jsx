import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>About Us</h1>
      
      <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1976d2' }}>Our Mission</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
            At E-Learning, we believe that quality education should be accessible to everyone, everywhere. 
            Our mission is to provide innovative online learning solutions that empower students to achieve 
            their academic and professional goals.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1976d2' }}>What We Offer</h2>
          <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
            <li>Comprehensive online courses across multiple subjects</li>
            <li>Interactive learning materials and multimedia content</li>
            <li>Expert instructors with real-world experience</li>
            <li>Flexible scheduling to fit your lifestyle</li>
            <li>Certification programs recognized by industry leaders</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1976d2' }}>Why Choose Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Quality Education</h3>
              <p style={{ color: '#666', margin: 0 }}>Courses designed by industry experts and educational professionals</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Flexible Learning</h3>
              <p style={{ color: '#666', margin: 0 }}>Learn at your own pace, anytime, anywhere</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Support</h3>
              <p style={{ color: '#666', margin: 0 }}>24/7 technical support and academic guidance</p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#1976d2', color: 'white', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '1rem' }}>Ready to Start Learning?</h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Join thousands of students who are already advancing their careers with our courses.
        </p>
        <button style={{
          backgroundColor: 'white',
          color: '#1976d2',
          border: 'none',
          padding: '0.75rem 2rem',
          borderRadius: '4px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default About;