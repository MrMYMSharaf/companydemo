import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { 
      icon: <Clock className="w-8 h-8" />,
      value: "20+",
      label: "Years Experience",
      color: "text-blue-400"
    },
    { 
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Happy Clients",
      color: "text-purple-400"
    },
    { 
      icon: <Award className="w-8 h-8" />,
      value: "100%",
      label: "Client Satisfaction",
      color: "text-green-400"
    },
    { 
      icon: <Target className="w-8 h-8" />,
      value: "24/7",
      label: "Support Available",
      color: "text-red-400"
    }
  ];

  return (
    <div className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Blue Chip</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Company description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Your Trusted Technology Partner
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Blue Chip Technical Services (Pvt) Ltd is a fully-fledged Information Technology solutions provider 
                offering a wide range of end-to-end technology solutions, with over two decades of rendering 
                invaluable service to our valuable clientele across different industries.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Partnered and represented by several world-renowned technology firms and solutions ranging within 
                pillars of software, hardware networking & services, our diversity and expertise empower us to 
                deliver the best solutions in the technology arena.
              </p>
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/10 transition-all"
              >
                <div className={`mb-4 inline-block p-3 rounded-full bg-white/5 ${stat.color}`}>
                  {stat.icon}
                </div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                  className={`text-3xl font-bold mb-2 ${stat.color}`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation while maintaining the highest standards of service excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the leading technology solutions provider, recognized globally for our innovation, 
              reliability, and commitment to exceeding customer expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;