import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(
      formData.subject || "Contact from Website"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:mithunmohan297@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mithunmohan297@gmail.com",
      href: "mailto:mithunmohan297@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6361520121",
      href: "tel:+916361520121",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mangalore, Karnataka, India – 575003",
      href: "https://maps.google.com/?q=Mangalore,Karnataka,India",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/metalturtle",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mithunmohan",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities, exciting blockchain
            projects, and collaborations. Open to remote opportunities and
            relocation. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className="text-lg text-gray-900 hover:text-primary-600 transition-colors"
                      target={item.label === "Location" ? "_blank" : undefined}
                      rel={
                        item.label === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🟢 Available for Opportunities
              </h3>
              <p className="text-green-700">
                Currently open to new opportunities in blockchain development,
                technical leadership roles, and exciting Web3 projects. Remote
                work preferred, but open to relocation for the right
                opportunity.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              * This form will open your email client with the message
              pre-filled. You can also email me directly at{" "}
              <a
                href="mailto:mithunmohan297@gmail.com"
                className="text-primary-600 hover:text-primary-700"
              >
                mithunmohan297@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Prefer a Quick Chat?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mithunmohan297@gmail.com?subject=Quick Chat Request"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            <a
              href="tel:+916361520121"
              className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Me
            </a>
            <a
              href="https://linkedin.com/in/mithunmohan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
