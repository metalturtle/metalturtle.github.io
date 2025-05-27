import { Download, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C",
        "C++",
        "Solidity",
        "SQL",
      ],
    },
    {
      category: "Web & Frameworks",
      items: [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "LIBGDX",
        "OpenGL",
        "GLFW",
        "GLM",
      ],
    },
    {
      category: "Blockchain",
      items: [
        "ERC20",
        "ERC721",
        "Uniswap V2",
        "Web3.js",
        "Ethers.js",
        "Smart Contracts",
      ],
    },
    {
      category: "Cloud & Tools",
      items: [
        "AWS",
        "Docker",
        "Git",
        "Oracle",
        "PostgreSQL",
        "MongoDB",
        "ETL Frameworks",
      ],
    },
  ];

  const experience = [
    {
      title: "Engineering Head",
      company: "StackOS / Decloud Labs",
      period: "Oct 2022 - May 2025",
      description:
        "Led and mentored development teams on multiple blockchain projects. Deployed smart contracts (ERC20, ERC721, Uniswap V2, staking), designed event indexing systems, and developed agentic AI systems for workflow execution.",
    },
    {
      title: "Smart Contract Developer",
      company: "KryptoKoders",
      period: "Apr 2024 - Jun 2025",
      description:
        "Developed and reviewed smart contracts for staking, aggregation, ERC20, bridging, and Uniswap V2. Built frontend functionality for smart contract read/write operations.",
    },
    {
      title: "Specialist Programmer",
      company: "Infosys Technologies",
      period: "May 2018 - Feb 2022",
      description:
        "Automated sales and finance reports via ETL frameworks. Enhanced Oracle ERP-based ETL processes and built secure web applications with ORM integration using Agile methodologies.",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-gray-600 text-sm">Mithun's Photo</span>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm an Engineering Lead with 7+ years of experience in blockchain,
            full-stack development, and AI systems. I specialize in smart
            contract development, Web3 integrations, and leading
            cross-functional technical teams to deliver secure, scalable
            solutions.
          </p>
        </div>

        {/* Quick Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
            <p className="text-gray-600">Mangalore, Karnataka, India</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">Experience</h3>
            <p className="text-gray-600">7+ Years</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Award className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">Focus</h3>
            <p className="text-gray-600">Blockchain & Web3</p>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
          <div className="prose-custom">
            <p>
              My journey in technology began with a Bachelor's degree in
              Information Science from NMAM Institute of Technology. What
              started as curiosity about software development evolved into a
              passion for blockchain technology and decentralized systems.
            </p>
            <p>
              Over the past 7+ years, I've had the privilege of working across
              diverse domains - from enterprise ETL systems at Infosys to
              cutting-edge blockchain infrastructure at StackOS. I've led teams
              in developing smart contracts, building Web3 applications, and
              creating innovative solutions that bridge traditional software
              with decentralized technologies.
            </p>
            <p>
              When I'm not coding smart contracts or architecting blockchain
              systems, you'll find me working on game development projects like
              Shadow Hunt, exploring AI systems, or mentoring fellow developers.
              I believe in the transformative power of blockchain technology and
              am passionate about building the decentralized future.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-primary-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <span className="text-primary-600 font-medium">
                    {job.period}
                  </span>
                </div>
                <p className="text-lg text-gray-700 mb-3">{job.company}</p>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting blockchain
            projects. Open to remote opportunities and relocation. Feel free to
            reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
