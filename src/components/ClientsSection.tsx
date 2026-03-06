import { motion } from "framer-motion";
import clientsLogos from "@/assets/clients-logos.jpg";

const ClientsSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden">
      {/* Animated slime blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[350px] h-[350px] bg-gradient-to-br from-primary/15 to-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.25, 0.9, 1.15, 1],
            x: [0, 90, -40, 50, 0],
            y: [0, -50, 30, -20, 0],
            borderRadius: [
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "70% 30% 50% 50% / 30% 30% 70% 70%",
              "50% 60% 30% 60% / 50% 40% 50% 60%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "40% 60% 70% 30% / 40% 50% 60% 50%",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "-15%", left: "-5%" }}
        />
        <motion.div
          className="absolute w-[280px] h-[280px] bg-gradient-to-tl from-sky-light/40 to-primary/8 blur-3xl"
          animate={{
            scale: [1, 0.85, 1.2, 0.95, 1],
            x: [0, -60, 40, -20, 0],
            y: [0, 40, -30, 20, 0],
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "70% 30% 50% 50% / 30% 30% 70% 70%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "-10%", right: "-8%" }}
        />
        <motion.div
          className="absolute w-[200px] h-[200px] bg-gradient-to-r from-accent/10 to-secondary/30 blur-2xl"
          animate={{
            scale: [1, 1.1, 0.95, 1.05, 1],
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 15, -10, 0],
            borderRadius: [
              "50% 50% 40% 60% / 40% 60% 40% 60%",
              "60% 40% 50% 50% / 50% 50% 50% 50%",
              "40% 60% 60% 40% / 60% 40% 60% 40%",
              "50% 50% 40% 60% / 40% 60% 40% 60%",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "30%", left: "40%" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12">
          
          <div className="w-16 h-px bg-foreground/20 mx-auto mb-6" />
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden">
          
          <img
            alt="Empresas que confían en Recaudo AI - Esri, AutoMundial, Righa, KrediYA, CasaToro, Banco W, ARMI, Haceb, Cavipetrol, Inter Image, SIS, Banco Contactar, LiliPink, Quipux, Avanzo, CrediAlianza, Practi, Sistecrédito, Clara, Epik, Finky, Aseguradora Solidaria, LaRueda, Quick, Seguros Bolívar"
            className="w-full h-auto object-contain mx-auto max-w-5xl invert"
            src={clientsLogos}
            loading="lazy" />
          
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;