import React from 'react';
import { motion } from 'framer-motion';

const PartnershipSection = () => {
  const partners = [
    { name: "Infor", description: "Enterprise software solutions and ERP systems", image: "src/assets/partnerships/infor.png" },
    { name: "Oracle", description: "Database and cloud solutions", image: "src/assets/partnerships/Oracle.png" },
    { name: "RVI", description: "Document imaging and workflow solutions", image: "src/assets/partnerships/RVI.png" },
    { name: "WatchGuard", description: "Network security and intelligence", image: "src/assets/partnerships/WG1.png" },
    { name: "FingerTec", description: "Biometric time attendance & door access", image: "src/assets/partnerships/fingertech.png" },
    { name: "Euronet", description: "Payment and financial technology solutions", image: "src/assets/partnerships/euronet.png" },
    { name: "Alliance Storage", description: "Enterprise storage solutions", image: "src/assets/partnerships/alliance.png" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Our Partnerships</h2>
          <p className="text-blue-200 text-base max-w-xl mx-auto">
            Collaborating with industry leaders to deliver cutting-edge solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-4 group"
            >
              <div className="bg-white/5 rounded-md p-3 mb-2">
                <motion.img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
              <p className="text-blue-200 text-sm">{partner.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnershipSection;
