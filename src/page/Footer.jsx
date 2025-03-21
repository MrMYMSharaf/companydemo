import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Printer, Facebook, Twitter, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  


  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "marketing@bluechip.lk",
      color: "text-blue-400",
      hoverColor: "group-hover:text-blue-300"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+94 11 430 4040",
      color: "text-teal-400",
      hoverColor: "group-hover:text-teal-300"
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Fax",
      content: "+94 11 430 4045",
      color: "text-purple-400",
      hoverColor: "group-hover:text-purple-300"
    }
  ];

  const quickLinks = [
    { text: "About Us", href: "#" },
    { text: "Our Solutions", href: "#" },
    { text: "Partnerships", href: "#" },
    { text: "Contact", href: "#" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "Github", color: "hover:bg-gray-600" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative  bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for updates and insights</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-white">Bluechip Technical Services</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-gray-400">
                #108, Nawala Road,<br />
                Nugegoda 10250,<br />
                Sri Lanka
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Cards */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-xl font-bold text-white">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                >
                  <div className={`${info.color} mb-2`}>
                    {info.icon}
                  </div>
                  <h5 className="font-semibold text-white mb-1">{info.title}</h5>
                  <p className={`text-sm ${info.color} ${info.hoverColor} transition-colors`}>
                    {info.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500">
              © Copyright {currentYear} Blue Chip Technical Services. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-2 rounded-full bg-gray-800/50 backdrop-blur-sm ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>


     
    </motion.footer>
  );
};

export default Footer;