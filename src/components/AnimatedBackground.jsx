import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Main Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          background: `
            radial-gradient(50% 50% at 50% 50%, rgba(5, 12, 45, 0.4) 0%, rgba(2, 6, 17, 0) 100%)
          `,
          transform: `
            scale(1.5)
          `
        }}
      ></motion.div>

      {/* Floating Glowing Orbs */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full mix-blend-screen filter blur-3xl"
        style={{
          background: "rgba(100, 150, 255, 0.3)"
        }}
        animate={{
          x: [0, 100, 0, -50, 0],
          y: [0, 50, -50, 80, 0],
          scale: [1, 1.2, 1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      <motion.div
        className="absolute top-[80%] right-[5%] w-40 h-40 rounded-full mix-blend-screen filter blur-3xl"
        style={{
          background: "rgba(255, 100, 200, 0.3)"
        }}
        animate={{
          x: [0, -80, 0, 120, 0],
          y: [0, -60, 40, -90, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[40%] w-24 h-24 rounded-full mix-blend-screen filter blur-3xl"
        style={{
          background: "rgba(100, 255, 200, 0.3)"
        }}
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -90, 50, 0],
          scale: [1.2, 1, 1.1, 1.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

    </div>
  );
};

export default AnimatedBackground;