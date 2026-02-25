import { motion } from "framer-motion";

const ClientsSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            Confían en nosotros
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-card p-2 sm:p-4 md:p-8 overflow-hidden"
        >
          <img
            alt="Empresas que confían en Recaudo AI - Bancolombia, Quipux, Seguros Bolívar, y más"
            className="w-full h-auto object-contain rounded-sm scale-100 md:scale-100"
            src="/lovable-uploads/2378381b-9991-4f88-b45e-d0ca5c00b4a2.png"
            style={{ minHeight: '120px' }}
          />
        </motion.div>
      </div>

      {/* Animated background elements at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-4 left-1/4 w-64 h-64 rounded-full bg-royal/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-8 right-1/4 w-72 h-72 rounded-full bg-lime/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-sky/10 blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    </section>
  );
};

export default ClientsSection;