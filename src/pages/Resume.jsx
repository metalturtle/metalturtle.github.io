import { Download, ExternalLink, Github } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Lead development of web applications using React, Node.js, and PostgreSQL",
        "Mentored 3 junior developers and established code review processes",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Remote",
      period: "2020 - 2022",
      description: [
        "Built responsive web applications for 15+ clients using React and Vue.js",
        "Collaborated with designers to create pixel-perfect user interfaces",
        "Optimized application performance resulting in 40% faster load times",
        "Integrated third-party APIs and payment systems",
      ],
    },
    {
      title: "Junior Developer",
      company: "Startup Co.",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: [
        "Developed features for SaaS platform using React and Python",
        "Participated in agile development process and daily standups",
        "Wrote unit tests achieving 85% code coverage",
        "Fixed bugs and implemented user-requested features",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      location: "Austin, TX",
      period: "2015 - 2019",
      details: "Graduated Magna Cum Laude, GPA: 3.8/4.0",
    },
  ];

  const skills = {
    Frontend: [
      "React",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
    ],
    Backend: [
      "Node.js",
      "Python",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
    "Tools & Technologies": [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "Jest",
      "Cypress",
      "Figma",
      "Webpack",
    ],
    Methodologies: [
      "Agile",
      "Scrum",
      "TDD",
      "CI/CD",
      "Code Review",
      "REST APIs",
      "GraphQL",
    ],
  };

  const projects = [
    {
      name: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://ecommerce-demo.com",
    },
    {
      name: "Task Management App",
      description:
        "Collaborative task management application with real-time updates",
      technologies: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      github: "https://github.com/yourusername/taskapp",
      demo: "https://taskapp-demo.com",
    },
    {
      name: "Weather Dashboard",
      description:
        "Weather dashboard with location-based forecasts and interactive maps",
      technologies: ["React", "TypeScript", "Weather API", "Mapbox"],
      github: "https://github.com/yourusername/weather",
      demo: "https://weather-demo.com",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <p className="text-xl text-gray-600 mb-6">
            Full-Stack Developer with 5+ years of experience building scalable
            web applications
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Download className="mr-2" size={20} />
            Download PDF
          </a>
        </div>

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AWS Certified Developer
              </h3>
              <p className="text-gray-600 mb-2">Amazon Web Services</p>
              <p className="text-sm text-gray-500">
                Issued: 2023 • Expires: 2026
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                React Developer Certification
              </h3>
              <p className="text-gray-600 mb-2">Meta (Facebook)</p>
              <p className="text-sm text-gray-500">Issued: 2022</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how I can contribute to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
