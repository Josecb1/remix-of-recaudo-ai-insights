import { motion } from "framer-motion";
import { Linkedin, MessageCircle, Mail } from "lucide-react";
import comercialFoto from "@/assets/comercial-foto.png";
import RecaudoLogo from "./RecaudoLogo";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-foreground text-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "-10%", left: "-15%" }}
        />
        <motion.div
          className="absolute w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-blue-500/8 blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "-10%", right: "-10%" }}
        />
        
        {/* Animated grid lines */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 font-display px-2 leading-tight">
            ¿Cuándo empezamos?
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-background/70 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-2">
            La IA no reemplaza trabajos; reemplaza modelos que no evolucionan.
          </p>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-10 inline-block w-full max-w-sm mx-auto"
          >
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {/* Avatar with photo */}
              <motion.div 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 sm:border-4 border-primary shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={comercialFoto} 
                  alt="Fabián Durán - Growth Strategy" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div>
                <p className="text-xs sm:text-sm text-background/60 mb-0.5 sm:mb-1">Growth Strategy</p>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-background">Fabián Durán</h3>
              </div>

              <div className="space-y-2 sm:space-y-3 text-left w-full">
                <a
                  href="mailto:fabian@recaudo.ai"
                  className="flex items-center gap-2 sm:gap-3 text-background/80 hover:text-background transition-colors group text-xs sm:text-sm md:text-base"
                >
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  fabian@recaudo.ai
                </a>
                
                <a
                  href="https://wa.me/573112251150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-background/80 hover:text-background transition-colors group text-xs sm:text-sm md:text-base"
                >
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors flex-shrink-0">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  +57 311 225 1150
                </a>
                
                <a
                  href="https://www.linkedin.com/in/fabianduranm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-background/80 hover:text-background transition-colors group text-xs sm:text-sm md:text-base"
                >
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors flex-shrink-0">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  LinkedIn
                </a>
              </div>

              <a
                href="https://wa.link/e7j55k"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:mt-4 w-full sm:w-auto bg-primary text-primary-foreground px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base hover:scale-105 hover:shadow-lime transition-all duration-200 text-center"
              >
                Iniciar conversación
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-background/10"
        >
          <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
            <RecaudoLogo className="h-6 sm:h-8" variant="black" />
            <span className="text-background/60 text-xs sm:text-sm">by Callbook.ai</span>
          </div>
          <p className="text-background/40 text-xs sm:text-sm">
            © 2025 Recaudo AI. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
