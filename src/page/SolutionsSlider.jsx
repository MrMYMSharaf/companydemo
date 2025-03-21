import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardDrive, Monitor, Network, Shield, FileText, Fingerprint } from 'lucide-react';

const SolutionsSlider = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const solutions = [
    {
      id: 1,
      icon: <HardDrive className="w-8 h-8" />,
      title: "Hardware & Storage",
      description: "Enterprise-grade hardware solutions and storage systems for optimal performance",
      color: "bg-blue-500",
      gradient: "from-blue-600 to-blue-400"
    },
    {
      id: 2,
      icon: <Monitor className="w-8 h-8" />,
      title: "Software",
      description: "Custom software solutions tailored to your business needs",
      color: "bg-yellow-500",
      gradient: "from-yellow-600 to-yellow-400"
    },
    {
      id: 3,
      icon: <Network className="w-8 h-8" />,
      title: "Network Management",
      description: "Comprehensive network infrastructure management and optimization",
      color: "bg-purple-500",
      gradient: "from-purple-600 to-purple-400"
    },
    {
      id: 4,
      icon: <Shield className="w-8 h-8" />,
      title: "Network Security",
      description: "Advanced security solutions to protect your digital assets",
      color: "bg-green-500",
      gradient: "from-green-600 to-green-400"
    },
    {
      id: 5,
      icon: <FileText className="w-8 h-8" />,
      title: "Document Management",
      description: "Efficient document handling and storage systems",
      color: "bg-red-500",
      gradient: "from-red-600 to-red-400"
    },
    {
      id: 6,
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Biometrics",
      description: "State-of-the-art biometric security solutions",
      color: "bg-teal-500",
      gradient: "from-teal-600 to-teal-400"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.05,
      rotate: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    },
    tap: { 
      scale: 0.95,
      rotate: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: "-100%"
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: "0%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: "100%",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our Solutions
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Discover our comprehensive range of IT solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {solutions.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedId(item.id)}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              className={`cursor-pointer relative overflow-hidden rounded-xl bg-gradient-to-br ${item.gradient} p-6 transform-gpu`}
            >
              <motion.div
                variants={iconVariants}
                className="bg-white/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4"
              >
                <div className="text-white">{item.icon}</div>
              </motion.div>

              <motion.h3 
                className="text-xl font-semibold text-white mb-2"
                animate={{ scale: hoveredId === item.id ? 1.05 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-white/80"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: hoveredId === item.id ? 1 : 0.8 }}
              >
                {item.description}
              </motion.p>
              
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
              />
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-8"
              >
                {(() => {
                  const item = solutions.find(s => s.id === selectedId);
                  return (
                    <motion.div 
                      className={`p-8 rounded-xl bg-gradient-to-br ${item.gradient}`}
                      initial={{ rotate: -5 }}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="bg-white/10 rounded-lg w-16 h-16 flex items-center justify-center"
                        >
                          <div className="text-white">{item.icon}</div>
                        </motion.div>
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedId(null);
                          }}
                          className="text-white hover:text-gray-200"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </motion.button>
                      </div>
                      <motion.h2 
                        className="text-2xl font-bold text-white mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {item.title}
                      </motion.h2>
                      <motion.p 
                        className="text-white text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {item.description}
                      </motion.p>
                    </motion.div>
                  );
                })()}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SolutionsSlider;