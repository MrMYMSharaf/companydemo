import React from 'react';
import { Mail, Phone, Printer, MapPin, Facebook, Twitter, Github } from 'lucide-react';

const ContactCard = ({ icon, title, value, color }) => (
  <div className="rounded-lg bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors p-6">
    <div className="text-center">
      <div className={`mb-4 inline-block p-3 rounded-full bg-white/5 ${color}`}>
        {icon}
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${color}`}>{title}</h3>
      <p className="text-gray-300">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ icon, href, color }) => (
  <a
    href={href}
    className={`text-gray-400 transition-colors ${color} transform hover:scale-110 active:scale-95`}
  >
    {icon}
  </a>
);

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "marketing@bluechip.lk",
      color: "text-blue-400"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      value: "+94 11 430 4040",
      color: "text-teal-400"
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Fax",
      value: "+94 11 430 4045",
      color: "text-purple-400"
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, href: "#", color: "hover:text-blue-400" },
    { icon: <Twitter className="w-6 h-6" />, href: "#", color: "hover:text-blue-400" },
    { icon: <Github className="w-6 h-6" />, href: "#", color: "hover:text-gray-600" }
  ];

  return (
    <div className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8" />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info) => (
            <ContactCard key={info.title} {...info} />
          ))}
        </div>

        {/* Address and Social Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Address Card */}
          <div className="rounded-lg bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors p-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
                <p className="text-gray-300">
                  Bluechip Technical Services (Pvt) Ltd<br />
                  #108, Nawala Road,<br />
                  Nugegoda 10250<br />
                  Sri Lanka
                </p>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="rounded-lg bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Connect With Us</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;