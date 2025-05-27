import { Link } from "react-router-dom";
import { ArrowRight, Code, User, Award } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-primary-600">Mithun Mohan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Engineering Lead with 7+ years of experience in blockchain,
              full-stack development, and AI systems. Passionate about building
              secure, scalable Web3 solutions and leading technical teams.
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
                to="/resume"
                className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
              >
                <Award className="mr-2" size={20} />
                View Resume
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
              I specialize in blockchain development, smart contracts, and
              building scalable Web3 applications that bridge traditional
              software with decentralized technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Blockchain Development
              </h3>
              <p className="text-gray-600">
                Smart contracts (ERC20, ERC721, Uniswap V2), Web3.js, Ethers.js,
                and DeFi protocol development.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Full-Stack Development
              </h3>
              <p className="text-gray-600">
                React, Node.js, Python, Java, C/C++, and building scalable
                applications with modern frameworks.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Technical Leadership
              </h3>
              <p className="text-gray-600">
                Leading development teams, mentoring engineers, and architecting
                complex systems for Web3 and AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Key achievements and roles throughout my career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Engineering Head
                </h3>
                <p className="text-primary-600 font-medium">
                  StackOS / Decloud Labs
                </p>
                <p className="text-sm text-gray-500">Oct 2022 - May 2025</p>
              </div>
              <p className="text-gray-600">
                Led blockchain infrastructure development, deployed smart
                contracts, and built agentic AI systems for Web3 applications.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Smart Contract Developer
                </h3>
                <p className="text-primary-600 font-medium">KryptoKoders</p>
                <p className="text-sm text-gray-500">Apr 2024 - Jun 2025</p>
              </div>
              <p className="text-gray-600">
                Developed and reviewed smart contracts for DeFi protocols,
                including staking, bridging, and Uniswap V2 integrations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Specialist Programmer
                </h3>
                <p className="text-primary-600 font-medium">
                  Infosys Technologies
                </p>
                <p className="text-sm text-gray-500">May 2018 - Feb 2022</p>
              </div>
              <p className="text-gray-600">
                Automated enterprise systems, built secure web applications, and
                progressed through multiple technical roles.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/resume"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View Full Resume
              <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities, exciting blockchain
            projects, and collaborations. Open to remote opportunities and
            relocation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get In Touch
            </Link>
            <a
              href="mailto:mithunmohan297@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
