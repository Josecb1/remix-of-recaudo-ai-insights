import { motion } from "framer-motion";
import clientsLogos from "@/assets/clients-logos.jpg";

const ClientsSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="w-16 h-px bg-background/40 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-background font-display">
            Confían en nosotros
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden"
        >
          <img
            alt="Empresas que confían en Recaudo AI - Esri, AutoMundial, Righa, KrediYA, CasaToro, Banco W, ARMI, Haceb, Cavipetrol, Inter Image, SIS, Banco Contactar, LiliPink, Quipux, Avanzo, CrediAlianza, Practi, Sistecrédito, Clara, Epik, Finky, Aseguradora Solidaria, LaRueda, Quick, Seguros Bolívar"
            className="w-full h-auto object-contain mx-auto max-w-5xl"
            src={clientsLogos}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
