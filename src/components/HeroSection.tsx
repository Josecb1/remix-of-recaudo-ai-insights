import { motion } from "framer-motion";
import RecaudoLogo from "./RecaudoLogo";
import heroRobot from "@/assets/hero-robot-final.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroRobot} 
          alt="AI Collection Agent" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/80" />
      </div>

      {/* Centered content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-2"
      >
        {/* Brand badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center mb-6 sm:mb-8"
        >
          <RecaudoLogo className="h-8 sm:h-12 text-white" />
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 font-display"
        >
          Asesores de cobranza IA.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          Una plataforma de última generación que te permitirá la recuperación de cartera 
          aumentando la contactabilidad, optimizando costos y mejorando el Cash Flow, 
          sin fricción operativa.
        </motion.p>

        {/* Key benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-12"
        >
          {[
            { label: "IA especializada", desc: "en cobranzas" },
            { label: "Resultados medibles", desc: "Mejora Cash Flow, reduce OpEx" },
            { label: "Multiplicamos efectividad", desc: "de equipos" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl"
            >
              <span className="font-semibold text-white text-sm sm:text-base">{item.label}</span>
              <span className="text-xs sm:text-sm text-white/70">{item.desc}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#ventajas"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(65 85% 60% / 0.4)" }}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg shadow-glow transition-all duration-200 cursor-pointer"
        >
          <span className="hidden sm:inline">Más contacto. Más recuperación. Menor costo.</span>
          <span className="sm:hidden">Más recuperación. Menor costo.</span>
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
