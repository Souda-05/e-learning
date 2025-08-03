import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>
        Contact Us
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
        {/* Contact Form */}
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#1976d2', marginBottom: '1.5rem' }}>Send us a Message</h2>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#555', fontWeight: '500' }}>
              Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="Your full name"
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#555', fontWeight: '500' }}>
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="your.email@example.com"
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#555', fontWeight: '500' }}>
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="What's this about?"
            />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#555', fontWeight: '500' }}>
              Message *
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="5"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
              placeholder="Tell us how we can help you..."
            />
          </div>
          
          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Send Message
          </button>
        </div>

        {/* Contact Information */}
        <div>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
            <h2 style={{ color: '#1976d2', marginBottom: '1.5rem' }}>Get in Touch</h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>📧</span>
                <strong style={{ color: '#333' }}>Email</strong>
              </div>
              <p style={{ margin: '0 0 0 1.7rem', color: '#666' }}>support@elearning.com</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>📞</span>
                <strong style={{ color: '#333' }}>Phone</strong>
              </div>
              <p style={{ margin: '0 0 0 1.7rem', color: '#666' }}>+1 (555) 123-4567</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>📍</span>
                <strong style={{ color: '#333' }}>Address</strong>
              </div>
              <p style={{ margin: '0 0 0 1.7rem', color: '#666' }}>
                123 Learning Street<br/>
                Education City, EC 12345<br/>
                United States
              </p>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>🕒</span>
                <strong style={{ color: '#333' }}>Office Hours</strong>
              </div>
              <p style={{ margin: '0 0 0 1.7rem', color: '#666' }}>
                Monday - Friday: 9:00 AM - 6:00 PM<br/>
                Saturday: 10:00 AM - 4:00 PM<br/>
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Quick Help */}
          <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '8px', border: '1px solid #e9ecef' }}>
            <h3 style={{ color: '#1976d2', marginBottom: '1rem' }}>Need Quick Help?</h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Check out our FAQ section or browse our help center for instant answers to common questions.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{
                backgroundColor: '#1976d2',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                View FAQ
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: '#1976d2',
                border: '1px solid #1976d2',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Help Center
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1976d2', marginBottom: '2rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>How do I enroll in a course?</h4>
            <p style={{ color: '#666', margin: 0 }}>
              Simply browse our courses, select the one you're interested in, and click "Enroll Now". 
              You'll need to create an account and complete the payment process.
            </p>
          </div>
          
          <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Can I access courses on mobile devices?</h4>
            <p style={{ color: '#666', margin: 0 }}>
              Yes! Our platform is fully responsive and works on all devices including smartphones and tablets.
            </p>
          </div>
          
          <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Do you offer certificates?</h4>
            <p style={{ color: '#666', margin: 0 }}>
              Yes, we provide completion certificates for all our courses that are recognized by industry leaders.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>What if I need technical support?</h4>
            <p style={{ color: '#666', margin: 0 }}>
              Our technical support team is available 24/7. You can reach us through this contact form, 
              email, or phone for immediate assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;