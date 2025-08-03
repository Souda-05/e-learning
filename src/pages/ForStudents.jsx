import React, { useState } from 'react';

const ForStudentsPage = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      description: "Master calculus, algebra, and advanced mathematical concepts",
      instructor: "Dr. Sarah Williams",
      duration: "12 weeks",
      level: "Advanced",
      students: 245,
      rating: 4.9,
      price: "$299",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      topics: ["Calculus", "Linear Algebra", "Differential Equations", "Statistics"],
      prerequisites: "Basic Algebra and Trigonometry"
    },
    {
      id: 2,
      title: "Computer Science Fundamentals",
      description: "Learn programming basics, data structures, and algorithms",
      instructor: "Prof. Michael Chen",
      duration: "16 weeks",
      level: "Beginner",
      students: 432,
      rating: 4.8,
      price: "$399",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
      topics: ["Python Programming", "Data Structures", "Algorithms", "Web Development"],
      prerequisites: "None"
    },
    {
      id: 3,
      title: "Physics Mastery",
      description: "Comprehensive physics course covering mechanics to quantum physics",
      instructor: "Dr. Emily Rodriguez",
      duration: "14 weeks",
      level: "Intermediate",
      students: 189,
      rating: 4.9,
      price: "$349",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=250&fit=crop",
      topics: ["Classical Mechanics", "Thermodynamics", "Electromagnetism", "Quantum Physics"],
      prerequisites: "Basic Mathematics"
    },
    {
      id: 4,
      title: "English Literature & Writing",
      description: "Develop critical thinking and writing skills through literature",
      instructor: "Prof. James Thompson",
      duration: "10 weeks",
      level: "Intermediate",
      students: 156,
      rating: 4.7,
      price: "$249",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      topics: ["Literary Analysis", "Creative Writing", "Essay Writing", "Poetry"],
      prerequisites: "High School English"
    },
    {
      id: 5,
      title: "Business Administration",
      description: "Learn essential business skills and management principles",
      instructor: "Dr. Lisa Anderson",
      duration: "12 weeks",
      level: "Beginner",
      students: 298,
      rating: 4.8,
      price: "$379",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      topics: ["Marketing", "Finance", "Management", "Strategy"],
      prerequisites: "None"
    },
    {
      id: 6,
      title: "Chemistry Foundations",
      description: "Comprehensive chemistry course from basics to advanced topics",
      instructor: "Dr. Robert Kim",
      duration: "13 weeks",
      level: "Intermediate",
      students: 167,
      rating: 4.9,
      price: "$329",
      image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=400&h=250&fit=crop",
      topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Lab Work"],
      prerequisites: "Basic Science Knowledge"
    }
  ];

  const learningResources = [
    {
      title: "Interactive Lessons",
      description: "Engaging video lessons with real-time interaction",
      icon: "🎥",
      features: ["HD Video Quality", "Interactive Quizzes", "Progress Tracking", "Mobile Access"]
    },
    {
      title: "Live Tutoring Sessions",
      description: "One-on-one sessions with expert tutors",
      icon: "👨‍🏫",
      features: ["Personalized Attention", "Flexible Scheduling", "Screen Sharing", "Recording Available"]
    },
    {
      title: "Study Materials",
      description: "Comprehensive study guides and practice tests",
      icon: "📚",
      features: ["PDF Downloads", "Practice Questions", "Study Guides", "Reference Materials"]
    },
    {
      title: "Community Forum",
      description: "Connect with fellow students and instructors",
      icon: "💬",
      features: ["Discussion Boards", "Peer Help", "Study Groups", "Q&A Sessions"]
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`text-lg ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={course.image} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-2">👨‍🏫</span>
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-2">⏱️</span>
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-2">👥</span>
            <span>{course.students} students enrolled</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {renderStars(course.rating)}
            <span className="ml-2 text-sm text-gray-600">({course.rating})</span>
          </div>
          <span className="text-2xl font-bold text-blue-600">{course.price}</span>
        </div>
        
        <button 
          onClick={() => setSelectedCourse(course)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          View Details
        </button>
      </div>
    </div>
  );

  const CourseModal = ({ course, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          
          <div className="space-y-4">
            <p className="text-gray-700">{course.description}</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Course Details</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>👨‍🏫 Instructor: {course.instructor}</li>
                  <li>⏱️ Duration: {course.duration}</li>
                  <li>📊 Level: {course.level}</li>
                  <li>👥 Students: {course.students}</li>
                  <li>⭐ Rating: {course.rating}/5</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Topics Covered</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {course.topics.map((topic, index) => (
                    <li key={index}>• {topic}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Prerequisites</h4>
              <p className="text-sm text-gray-600">{course.prerequisites}</p>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-3xl font-bold text-blue-600">{course.price}</span>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">For Students</h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover our courses and learning resources to start your educational journey
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">5228+</div>
              <div className="text-sm">Active Students</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm">Expert Tutors</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">28+</div>
              <div className="text-sm">Courses</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs - Only courses and resources */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'courses', label: 'Available Courses', icon: '📚' },
              { id: 'resources', label: 'Learning Resources', icon: '💡' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-8">
        {/* Available Courses Tab */}
        {activeTab === 'courses' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Available Courses</h2>
              <p className="text-gray-600">
                Choose from our comprehensive selection of courses designed to help you achieve your academic goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        )}

        {/* Learning Resources Tab */}
        {activeTab === 'resources' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Learning Resources</h2>
              <p className="text-gray-600">
                Access a variety of learning tools and resources to enhance your education.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningResources.map((resource, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{resource.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-800">{resource.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {resource.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}
    </div>
  );
};

export default ForStudentsPage;