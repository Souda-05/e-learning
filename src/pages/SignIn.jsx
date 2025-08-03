import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [user, setUser] = useState(null);

  // Mock user data (in real app, this would come from backend)
  const mockUsers = [
    { 
      id: 1, 
      email: 'student@example.com', 
      password: 'password123', 
      name: 'John Doe',
      enrolledCourses: ['React Fundamentals', 'JavaScript Advanced', 'Web Development'],
      completedCourses: ['HTML & CSS Basics'],
      progress: {
        'React Fundamentals': 75,
        'JavaScript Advanced': 45,
        'Web Development': 20
      }
    },
    { 
      id: 2, 
      email: 'demo@student.com', 
      password: 'demo123', 
      name: 'Jane Smith',
      enrolledCourses: ['Python Basics', 'Data Science'],
      completedCourses: ['Introduction to Programming'],
      progress: {
        'Python Basics': 60,
        'Data Science': 30
      }
    }
  ];

  const handleLogin = () => {
    // Find user in mock data
    const foundUser = mockUsers.find(
      user => user.email === loginData.email && user.password === loginData.password
    );

    if (foundUser) {
      setUser(foundUser);
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials! Try: student@example.com / password123');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setLoginData({ email: '', password: '' });
  };

  const LoginForm = () => (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
          Student Login
        </h2>
        
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>
              Email
            </label>
            <input
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="Enter your email"
            />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>
              Password
            </label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="Enter your password"
            />
          </div>
          
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </div>
        
        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '4px',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          <strong>Demo Credentials:</strong><br/>
          Email: student@example.com<br/>
          Password: password123
        </div>
      </div>
    </div>
  );

  const StudentPanel = () => (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Student Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>Welcome, {user.name}!</span>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '1px solid white',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      </header>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Stats Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#1976d2', margin: '0 0 0.5rem 0' }}>Enrolled Courses</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#333' }}>
              {user.enrolledCourses.length}
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#4caf50', margin: '0 0 0.5rem 0' }}>Completed Courses</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#333' }}>
              {user.completedCourses.length}
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#ff9800', margin: '0 0 0.5rem 0' }}>Average Progress</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#333' }}>
              {Math.round(Object.values(user.progress).reduce((a, b) => a + b, 0) / Object.values(user.progress).length)}%
            </p>
          </div>
        </div>

        {/* Current Courses */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#333', marginBottom: '1.5rem' }}>My Courses</h2>
          
          {user.enrolledCourses.map((course, index) => (
            <div key={index} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, color: '#333' }}>{course}</h3>
                <span style={{ 
                  backgroundColor: user.progress[course] > 50 ? '#4caf50' : '#ff9800',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>
                  {user.progress[course]}% Complete
                </span>
              </div>
              
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${user.progress[course]}%`,
                  height: '100%',
                  backgroundColor: user.progress[course] > 50 ? '#4caf50' : '#ff9800',
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
              
              <div style={{ marginTop: '1rem' }}>
                <button style={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginRight: '0.5rem'
                }}>
                  Continue Learning
                </button>
                <button style={{
                  backgroundColor: 'transparent',
                  color: '#1976d2',
                  border: '1px solid #1976d2',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Completed Courses */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#333', marginBottom: '1.5rem' }}>Completed Courses</h2>
          
          {user.completedCourses.map((course, index) => (
            <div key={index} style={{
              border: '1px solid #4caf50',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1rem',
              backgroundColor: '#f8fff8'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, color: '#333' }}>{course}</h3>
                <span style={{ 
                  backgroundColor: '#4caf50',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>
                  ✓ Completed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return isLoggedIn ? <StudentPanel /> : <LoginForm />;
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 91a161c888c5f9418739aa391daea5d56e173e3d
