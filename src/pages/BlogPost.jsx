import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically fetch the post content from a CMS or markdown files
  const posts = {
    "getting-started-react": {
      title: "Getting Started with React and Modern Web Development",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      content: `
# Getting Started with React and Modern Web Development

React has revolutionized the way we build user interfaces, making it easier to create interactive and dynamic web applications. In this comprehensive guide, we'll explore the fundamentals of React and modern web development practices.

## What is React?

React is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and has become one of the most popular frontend frameworks in the world.

### Key Features of React

- **Component-Based Architecture**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient updates and rendering
- **Declarative**: Describe what the UI should look like for any given state
- **Learn Once, Write Anywhere**: Use React for web, mobile, and desktop applications

## Setting Up Your Development Environment

Before we start building with React, let's set up a proper development environment:

\`\`\`bash
# Install Node.js and npm
# Then create a new React app
npx create-react-app my-app
cd my-app
npm start
\`\`\`

## Your First Component

Here's a simple React component to get you started:

\`\`\`jsx
import React from 'react';

function Welcome({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to React development.</p>
    </div>
  );
}

export default Welcome;
\`\`\`

## Best Practices

1. **Keep Components Small**: Each component should have a single responsibility
2. **Use Functional Components**: Prefer function components with hooks over class components
3. **Manage State Properly**: Use useState for local state and consider context for global state
4. **Write Tests**: Test your components to ensure they work as expected

## Conclusion

React provides a powerful foundation for building modern web applications. By following best practices and understanding the core concepts, you'll be well on your way to becoming a proficient React developer.

Happy coding!
      `,
    },
    "scalable-apis-nodejs": {
      title: "Building Scalable APIs with Node.js",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Backend",
      content: `
# Building Scalable APIs with Node.js

Creating scalable APIs is crucial for modern web applications. In this guide, we'll explore how to build robust, scalable APIs using Node.js and Express.

## Why Node.js for APIs?

Node.js is an excellent choice for building APIs because of its:

- **Non-blocking I/O**: Handle many concurrent requests efficiently
- **JavaScript Everywhere**: Use the same language for frontend and backend
- **Rich Ecosystem**: Vast collection of packages via npm
- **Performance**: Fast execution and low latency

## Setting Up Express

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json({ message: 'Users endpoint' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## Best Practices for Scalable APIs

### 1. Use Proper HTTP Status Codes

Always return appropriate HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error

### 2. Implement Rate Limiting

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
\`\`\`

### 3. Add Proper Error Handling

\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

## Conclusion

Building scalable APIs requires careful planning and implementation of best practices. By following these guidelines, you'll create APIs that can handle growth and provide excellent performance.
      `,
    },
    "future-web-development": {
      title: "The Future of Web Development",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Industry",
      content: `
# The Future of Web Development

Web development is constantly evolving, with new technologies and approaches emerging regularly. Let's explore what the future holds for web developers.

## Emerging Trends

### 1. WebAssembly (WASM)
WebAssembly allows running high-performance code in browsers, opening up new possibilities for web applications.

### 2. Progressive Web Apps (PWAs)
PWAs bridge the gap between web and native applications, providing app-like experiences in browsers.

### 3. Serverless Architecture
Serverless computing is changing how we deploy and scale applications, reducing infrastructure management overhead.

## The Rise of AI in Development

Artificial Intelligence is becoming increasingly important in web development:

- **Code Generation**: AI tools can help generate code snippets and entire functions
- **Testing**: Automated testing powered by AI
- **Design**: AI-assisted design tools for better UX/UI

## Conclusion

The future of web development is exciting, with new technologies making development more efficient and applications more powerful. Stay curious and keep learning!
      `,
    },
  };

  const post = posts[slug];

  if (!post) {
    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <Link
          to="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={16} className="mr-1" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={16} className="mr-1" />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Share Button */}
          <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Share2 size={16} className="mr-2" />
            Share
          </button>
        </header>

        {/* Post Content */}
        <article className="prose-custom">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Post Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Enjoyed this post?
              </h3>
              <p className="text-gray-600">
                Follow me for more content like this.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Follow on Twitter
              </a>
              <Link
                to="/blog"
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                More Posts
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;
