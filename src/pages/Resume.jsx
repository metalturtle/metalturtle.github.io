import { Download, ExternalLink, Github } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Engineering Head",
      company: "StackOS / Decloud Labs",
      location: "Remote",
      period: "Oct 2022 - May 2025",
      description: [
        "Led and mentored a development team on multiple blockchain projects",
        "Deployed and tested smart contracts (ERC20, ERC721, Uniswap V2, staking, balance settlement)",
        "Designed systems for event indexing and smart contract event processing",
        "Maintained packages for RPC calls and encryption in frontend/backend apps",
        "Developed agentic AI systems for workflow execution and parameter extraction",
        "Created IndiaBlockchainWeek.in for event registration",
        "Maintained multiple Web3-integrated websites",
      ],
    },
    {
      title: "Smart Contract Developer",
      company: "KryptoKoders",
      location: "Remote",
      period: "Apr 2024 - Jun 2025",
      description: [
        "Developed and reviewed smart contracts (staking, aggregation, ERC20, bridging, Uniswap V2)",
        "Built frontend functionality for smart contract read/write operations",
        "Collaborated with cross-functional teams on DeFi protocol development",
        "Implemented security best practices for smart contract development",
      ],
    },
    {
      title: "Specialist Programmer",
      company: "Infosys Technologies",
      location: "Bangalore, India",
      period: "May 2018 - Feb 2022",
      description: [
        "Automated sales and finance reports via ETL frameworks",
        "Enhanced and supported Oracle ERP-based ETL processes",
        "Built secure web applications with ORM integration and frontend/backend logic",
        "Used Agile development methodologies for project delivery",
        "Progressed from System Engineer to Senior System Engineer to Specialist Programmer",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (Information Science)",
      school: "NMAM Institute of Technology",
      location: "Karnataka, India",
      period: "2014 - 2018",
      details: "Specialized in Information Science and Engineering",
    },
  ];

  const skills = {
    Languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "C++",
      "Solidity",
      "SQL",
    ],
    "Web & Frameworks": [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "LIBGDX",
      "Kryonet",
      "OpenGL",
      "GLFW",
      "GLM",
    ],
    Blockchain: [
      "ERC20",
      "ERC721",
      "Uniswap V2",
      "Web3.js",
      "Ethers.js",
      "Smart Contracts",
      "DeFi Protocols",
    ],
    "Cloud & Tools": [
      "AWS",
      "Docker",
      "Git",
      "Oracle",
      "PostgreSQL",
      "MongoDB",
      "ETL Frameworks",
    ],
  };

  const projects = [
    {
      name: "Shadow Hunt (Java)",
      description:
        "Multiplayer 2D game using Java, LIBGDX, Kryonet with UDP streaming and delta compression",
      technologies: ["Java", "LIBGDX", "Kryonet", "UDP", "Game Development"],
      github: "https://github.com/metalturtle/shadow-hunt-java",
      demo: null,
    },
    {
      name: "Shadow Hunt (C/C++)",
      description:
        "Ported game to C/C++ with custom serialization, heap allocator, and OpenGL integration",
      technologies: [
        "C++",
        "OpenGL",
        "GLFW",
        "GLM",
        "Custom Memory Management",
      ],
      github: "https://github.com/metalturtle/shadow-hunt-cpp",
      demo: null,
    },
    {
      name: "Pet AI",
      description:
        "Interactive AI chat UI inspired by Tamagotchi with natural conversation capabilities",
      technologies: ["JavaScript", "Vite", "AI Integration", "Chat UI"],
      github: "https://github.com/metalturtle/pet-ai",
      demo: "https://pet-ai-demo.com",
    },
    {
      name: "IndiaBlockchainWeek.in",
      description:
        "Event registration platform for India Blockchain Week with Web3 integration",
      technologies: ["React", "Web3", "Smart Contracts", "Event Management"],
      github: null,
      demo: "https://indiablockchainweek.in",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <p className="text-xl text-gray-600 mb-6">
            Engineering Lead with 7+ years of experience in blockchain,
            full-stack development, and AI systems
          </p>
          {/* <div className="text-gray-600 mb-6">
            <p>📍 Mangalore, Karnataka, India – 575003</p>
            <p>📧 mithunmohan297@gmail.com | 📱 +91 6361520121</p>
            <p>🌍 Open to remote opportunities and relocation</p>
          </div> */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Download className="mr-2" size={20} />
            Download PDF
          </a>
        </div>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professional Summary
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              Engineering Lead with 7+ years of experience in blockchain,
              full-stack development, and AI systems. Proven expertise in smart
              contract development, Web3 integrations, and leading
              cross-functional technical teams. Adept at delivering secure,
              scalable solutions across web, finance, and gaming sectors.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-primary-500 pl-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <p className="text-lg text-primary-600 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-gray-600 mt-1 lg:mt-0">
                    <p>{job.location}</p>
                    <p className="font-medium">{job.period}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-3">
                  {job.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-primary-500 pl-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary-600 font-medium">
                      {edu.school}
                    </p>
                  </div>
                  <div className="text-gray-600 mt-1 lg:mt-0">
                    <p>{edu.location}</p>
                    <p className="font-medium">{edu.period}</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
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

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting blockchain
            projects. Open to remote opportunities and relocation. Let's discuss
            how I can contribute to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mithunmohan297@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Send Email
            </a>
            <a
              href="https://github.com/metalturtle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
