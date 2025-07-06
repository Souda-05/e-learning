import React, { useState } from 'react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'languages', name: 'Languages' }
  ];

  const resourceTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'video', name: 'Videos' },
    { id: 'ebook', name: 'E-books' },
    { id: 'article', name: 'Articles' },
    { id: 'course', name: 'Courses' },
    { id: 'tool', name: 'Tools' }
  ];

  const resources = [
    {
      id: 1,
      title: "Complete JavaScript Guide",
      type: "ebook",
      category: "programming",
      description: "Comprehensive guide covering JavaScript fundamentals to advanced concepts",
      rating: 4.8,
      downloads: 1250,
      duration: "5 hours read",
      thumbnail: "https://via.placeholder.com/300x200?text=JS+Guide",
      isPremium: false
    },
    {
      id: 2,
      title: "React Hooks Masterclass",
      type: "video",
      category: "programming",
      description: "Master React Hooks with practical examples and real-world projects",
      rating: 4.9,
      downloads: 890,
      duration: "3.5 hours",
      thumbnail: "https://via.placeholder.com/300x200?text=React+Hooks",
      isPremium: true
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      type: "article",
      category: "design",
      description: "Essential design principles every designer should know",
      rating: 4.7,
      downloads: 2100,
      duration: "15 min read",
      thumbnail: "https://via.placeholder.com/300x200?text=UI+UX+Design",
      isPremium: false
    },
    {
      id: 4,
      title: "Python for Data Science",
      type: "course",
      category: "data-science",
      description: "Complete course on using Python for data analysis and visualization",
      rating: 4.9,
      downloads: 1850,
      duration: "8 hours",
      thumbnail: "https://via.placeholder.com/300x200?text=Python+Data",
      isPremium: true
    },
    {
      id: 5,
      title: "Digital Marketing Toolkit",
      type: "tool",
      category: "marketing",
      description: "Collection of essential tools for digital marketing campaigns",
      rating: 4.6,
      downloads: 750,
      duration: "Lifetime access",
      thumbnail: "https://via.placeholder.com/300x200?text=Marketing+Tools",
      isPremium: false
    },
    {
      id: 6,
      title: "Business Strategy Framework",
      type: "ebook",
      category: "business",
      description: "Strategic planning and execution framework for modern businesses",
      rating: 4.8,
      downloads: 1400,
      duration: "4 hours read",
      thumbnail: "https://via.placeholder.com/300x200?text=Business+Strategy",
      isPremium: true
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type) => {
    switch(type) {
      case 'video': return <span className="w-4 h-4 text-sm">🎥</span>;
      case 'ebook': return <span className="w-4 h-4 text-sm">📚</span>;
      case 'article': return <span className="w-4 h-4 text-sm">📄</span>;
      case 'course': return <span className="w-4 h-4 text-sm">🎓</span>;
      case 'tool': return <span className="w-4 h-4 text-sm">🔧</span>;
      default: return <span className="w-4 h-4 text-sm">📄</span>;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'video': return 'bg-red-100 text-red-800';
      case 'ebook': return 'bg-blue-100 text-blue-800';
      case 'article': return 'bg-green-100 text-green-800';
      case 'course': return 'bg-purple-100 text-purple-800';
      case 'tool': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Resources</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover a vast collection of learning materials including videos, e-books, articles, and tools 
              to enhance your skills and knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <span className="absolute left-3 top-3 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">🏷️</span>
              <select
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[200px]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="relative">
              <select
                className="pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[150px]"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {resourceTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredResources.length} of {resources.length} resources
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {resource.isPremium && (
                  <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                    Premium
                  </span>
                )}
                <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getTypeColor(resource.type)}`}>
                  {getTypeIcon(resource.type)}
                  {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {resource.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span>{resource.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⏱️</span>
                    <span>{resource.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👥</span>
                    <span>{resource.downloads}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                    <span>📥</span>
                    Access
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <span>🔗</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">📚</span>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Resources?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our premium membership to access exclusive content and advanced materials
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;