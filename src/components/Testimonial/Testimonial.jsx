import React, { useState, useEffect } from 'react';

const TestimonialData = [
  {
    id: 1,
    name: "John Smith",
    text: "This platform has completely transformed my learning experience. The tutors are incredibly knowledgeable and patient, always ready to help me understand complex concepts.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Mathematics",
    location: "New York, USA"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    text: "I've improved my grades significantly thanks to the personalized attention I received. The flexible scheduling is perfect for my busy lifestyle.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Physics",
    location: "California, USA"
  },
  {
    id: 3,
    name: "Michael Chen",
    text: "The flexible scheduling made it possible for me to balance work and learning. Excellent service and professional tutors!",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Computer Science",
    location: "Toronto, Canada"
  },
  {
    id: 4,
    name: "Emily Davis",
    text: "The one-on-one sessions helped me overcome my fear of public speaking. My confidence has improved tremendously.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "English Literature",
    location: "London, UK"
  },
  {
    id: 5,
    name: "Robert Wilson",
    text: "Amazing tutors who really care about student success. The interactive lessons make learning enjoyable and effective.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Chemistry",
    location: "Sydney, Australia"
  },
  {
    id: 6,
    name: "Maria Rodriguez",
    text: "I struggled with calculus for years, but my tutor made it so much easier to understand. Thank you for your patience!",
    img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Calculus",
    location: "Madrid, Spain"
  },
  {
    id: 7,
    name: "James Thompson",
    text: "The quality of teaching is exceptional. I've learned more in 3 months than I did in a whole semester at school.",
    img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Biology",
    location: "Chicago, USA"
  },
  {
    id: 8,
    name: "Lisa Anderson",
    text: "Perfect for working professionals. The evening sessions fit perfectly with my schedule, and the progress is remarkable.",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Business Studies",
    location: "Berlin, Germany"
  },
  {
    id: 9,
    name: "David Brown",
    text: "The interactive whiteboard and screen sharing made online learning feel like in-person tutoring. Highly recommend!",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Statistics",
    location: "Vancouver, Canada"
  },
  {
    id: 10,
    name: "Jennifer Lee",
    text: "My SAT scores improved by 200 points after just 8 weeks of tutoring. The personalized study plan was game-changing.",
    img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "SAT Prep",
    location: "Los Angeles, USA"
  },
  {
    id: 11,
    name: "Alex Kumar",
    text: "The coding bootcamp preparation was intense but rewarding. I landed my dream job at a tech company thanks to this platform.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Programming",
    location: "Mumbai, India"
  },
  {
    id: 12,
    name: "Sophie Martin",
    text: "Learning French has never been easier. The conversational practice sessions are incredibly helpful for building confidence.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "French Language",
    location: "Paris, France"
  },
  {
    id: 13,
    name: "Chris Taylor",
    text: "The test preparation strategies were spot-on. I passed my professional certification exam on the first try!",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Professional Cert",
    location: "Austin, USA"
  },
  {
    id: 14,
    name: "Amanda White",
    text: "The psychology tutoring helped me not just with grades but also with understanding human behavior in my daily life.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Psychology",
    location: "Melbourne, Australia"
  },
  {
    id: 15,
    name: "Daniel Garcia",
    text: "Engineering concepts became crystal clear with the help of visual aids and practical examples. Excellent teaching methodology!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Engineering",
    location: "Barcelona, Spain"
  },
  {
    id: 16,
    name: "Rachel Green",
    text: "The economics tutoring transformed my understanding of complex market theories. Now I'm pursuing my MBA with confidence.",
    img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    subject: "Economics",
    location: "Boston, USA"
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [view, setView] = useState('carousel');
  const itemsPerPage = 3;

  useEffect(() => {
    if (isAutoPlaying && view === 'carousel') {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= TestimonialData.length - itemsPerPage ? 0 : prevIndex + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, view]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= TestimonialData.length - itemsPerPage ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? TestimonialData.length - itemsPerPage : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`inline-block w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-1">
          {renderStars(testimonial.rating)}
        </div>
        <div className="text-2xl text-blue-500 opacity-50">"</div>
      </div>
      
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        "{testimonial.text}"
      </p>
      
      <div className="flex items-center">
        <img
          src={testimonial.img}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-100"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-blue-600 font-medium">{testimonial.subject}</p>
          <p className="text-xs text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what our students from around the world have to say about their transformative learning experience.
          </p>
          
          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setView('carousel')}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  view === 'carousel' 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                Carousel View
              </button>
              <button
                onClick={() => setView('grid')}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  view === 'grid' 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                Grid View
              </button>
            </div>
          </div>
        </div>

        {/* Carousel View */}
        {view === 'carousel' && (
          <div className="relative">
            {/* Auto-play toggle */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isAutoPlaying 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
              </button>
            </div>

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {TestimonialData.map((testimonial) => (
                  <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-blue-50"
            >
              <span className="text-2xl text-blue-500">‹</span>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-blue-50"
            >
              <span className="text-2xl text-blue-500">›</span>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: TestimonialData.length - itemsPerPage + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Grid View */}
        {view === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TestimonialData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">16+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">5.0</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;