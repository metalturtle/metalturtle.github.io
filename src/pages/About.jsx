import { Download, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL"],
    },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
    {
      category: "Other",
      items: ["GraphQL", "REST APIs", "Testing", "CI/CD", "Agile"],
    },
  ];

  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description:
        "Lead development of web applications using React and Node.js. Mentored junior developers and implemented best practices for code quality and performance.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description:
        "Built responsive web applications for various clients using modern JavaScript frameworks. Collaborated with designers to create pixel-perfect user interfaces.",
    },
    {
      title: "Junior Developer",
      company: "Startup Co.",
      period: "2019 - 2020",
      description:
        "Developed features for a SaaS platform using React and Python. Gained experience in full-stack development and agile methodologies.",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-gray-600 text-sm">Your Photo</span>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of
            experience building web applications that solve real-world problems.
            I love learning new technologies and sharing knowledge with the
            developer community.
          </p>
        </div>

        {/* Quick Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">Experience</h3>
            <p className="text-gray-600">5+ Years</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Award className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">Focus</h3>
            <p className="text-gray-600">Full-Stack Development</p>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
          <div className="prose-custom">
            <p>
              My journey into web development started during college when I
              built my first website for a local business. What began as a
              simple project sparked a passion that has driven my career ever
              since.
            </p>
            <p>
              Over the years, I've had the opportunity to work with startups,
              agencies, and established companies, each experience teaching me
              something new about building great software. I believe in writing
              clean, maintainable code and creating user experiences that are
              both beautiful and functional.
            </p>
            <p>
              When I'm not coding, you can find me writing technical articles,
              contributing to open-source projects, or exploring the latest
              developments in web technology. I'm always excited to take on new
              challenges and collaborate with other passionate developers.
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
            I'm always interested in new opportunities and exciting projects.
            Feel free to reach out if you'd like to collaborate!
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
