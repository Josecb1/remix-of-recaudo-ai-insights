import { motion } from "framer-motion";
import { Linkedin, MessageCircle, Mail } from "lucide-react";
import comercialFoto from "@/assets/comercial-foto.png";
import RecaudoLogo from "./RecaudoLogo";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 sm:py-24 px-4 sm:px-6 bg-foreground text-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient mesh background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating orbs - more visible */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
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
          className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-3xl"
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
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-primary/8 blur-2xl"
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "40%", right: "10%" }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-secondary/10 blur-2xl"
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 50, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "60%", left: "15%" }}
        />
        
        {/* Animated grid lines */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 15}%`,
              bottom: "10%",
            }}
          />
        ))}
      </div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 font-display">
            ¿Cuándo empezamos?
          </h2>
          <p className="text-base sm:text-xl text-background/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            La IA no reemplaza trabajos; reemplaza modelos que no evolucionan.
          </p>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-2xl p-6 sm:p-10 inline-block w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Avatar with photo */}
              <motion.div 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-primary shadow-lg"
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
                <p className="text-sm text-background/60 mb-1">Growth Strategy</p>
                <h3 className="text-xl font-semibold text-background">Fabián Durán</h3>
              </div>

              <div className="space-y-3 text-left">
                <a
                  href="mailto:fabian@recaudo.ai"
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </span>
                  fabian@recaudo.ai
                </a>
                
                <a
                  href="https://wa.me/573112251150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  +57 311 225 1150
                </a>
                
                <a
                  href="https://www.linkedin.com/in/fabianduranm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </span>
                  LinkedIn
                </a>
              </div>

              <a
                href="mailto:fabian@recaudo.ai"
                className="mt-4 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lime transition-all duration-200"
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
          className="mt-20 pt-8 border-t border-background/10"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            <RecaudoLogo className="h-8 text-background" />
            <span className="text-background/60 text-sm">by Callbook.ai</span>
          </div>
          <p className="text-background/40 text-sm">
            © 2025 Recaudo AI. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
