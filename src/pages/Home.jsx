import { Link } from "react-router-dom";
import { ArrowRight, Code, Pen, User } from "lucide-react";

const Home = () => {
  // This would typically come from a CMS or markdown files
  const recentPosts = [
    {
      title: "Getting Started with React and Modern Web Development",
      excerpt:
        "A comprehensive guide to building modern web applications with React, covering best practices and essential tools.",
      date: "2024-01-15",
      slug: "getting-started-react",
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Learn how to design and implement robust, scalable APIs using Node.js and Express.",
      date: "2024-01-10",
      slug: "scalable-apis-nodejs",
    },
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring emerging trends and technologies that are shaping the future of web development.",
      date: "2024-01-05",
      slug: "future-web-development",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-primary-600">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer & Tech Enthusiast passionate about creating
              beautiful, functional web experiences and sharing knowledge
              through writing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                <User className="mr-2" size={20} />
                About Me
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
              >
                <Pen className="mr-2" size={20} />
                Read My Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I specialize in modern web development technologies and love
              building products that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Frontend Development
              </h3>
              <p className="text-gray-600">
                React, Vue.js, TypeScript, Tailwind CSS, and modern JavaScript
                frameworks.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Backend Development
              </h3>
              <p className="text-gray-600">
                Node.js, Python, PostgreSQL, MongoDB, and RESTful API design.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Pen className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Technical Writing
              </h3>
              <p className="text-gray-600">
                Sharing knowledge through clear, comprehensive technical
                articles and tutorials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Recent Posts
              </h2>
              <p className="text-lg text-gray-600">
                Latest thoughts on technology, development, and more.
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Posts
              <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <time className="text-sm text-gray-500 mb-2 block">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1" size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Posts
              <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
