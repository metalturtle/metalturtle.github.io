import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // This would typically come from a CMS or markdown files
  const posts = [
    {
      title: "Getting Started with React and Modern Web Development",
      excerpt:
        "A comprehensive guide to building modern web applications with React, covering best practices and essential tools.",
      date: "2024-01-15",
      slug: "getting-started-react",
      category: "React",
      readTime: "8 min read",
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Learn how to design and implement robust, scalable APIs using Node.js and Express.",
      date: "2024-01-10",
      slug: "scalable-apis-nodejs",
      category: "Backend",
      readTime: "12 min read",
    },
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring emerging trends and technologies that are shaping the future of web development.",
      date: "2024-01-05",
      slug: "future-web-development",
      category: "Industry",
      readTime: "6 min read",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt:
        "A practical guide to understanding the differences between CSS Grid and Flexbox and when to use each.",
      date: "2023-12-28",
      slug: "css-grid-vs-flexbox",
      category: "CSS",
      readTime: "10 min read",
    },
    {
      title: "TypeScript Best Practices for Large Applications",
      excerpt:
        "Essential TypeScript patterns and practices for building maintainable large-scale applications.",
      date: "2023-12-20",
      slug: "typescript-best-practices",
      category: "TypeScript",
      readTime: "15 min read",
    },
    {
      title: "Optimizing React Performance",
      excerpt:
        "Techniques and strategies for improving React application performance and user experience.",
      date: "2023-12-15",
      slug: "optimizing-react-performance",
      category: "React",
      readTime: "11 min read",
    },
  ];

  const categories = ["all", ...new Set(posts.map((post) => post.category))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts on web development, technology, and everything in between.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category === "all" ? "All Posts" : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1" size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No posts found matching your criteria.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <section className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to get notified when I publish new articles about web
            development and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
