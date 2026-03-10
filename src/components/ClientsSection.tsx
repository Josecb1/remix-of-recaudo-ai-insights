import { motion } from "framer-motion";

import armi from "@/assets/clients/armi.png";
import aseguradora from "@/assets/clients/aseguradora.png";
import automundial from "@/assets/clients/automundial.png";
import avanzo from "@/assets/clients/avanzo.png";
import bancocontactar from "@/assets/clients/bancocontactar.png";
import bancow from "@/assets/clients/bancow.png";
import casatoro from "@/assets/clients/casatoro.png";
import cavipetrol from "@/assets/clients/cavipetrol.png";
import clara from "@/assets/clients/clara.png";
import credialianza from "@/assets/clients/credialianza.png";
import epik from "@/assets/clients/epik.png";
import esri from "@/assets/clients/esri.png";
import finky from "@/assets/clients/finky.png";
import haceb from "@/assets/clients/haceb.png";
import interimage from "@/assets/clients/interimage.png";
import krediya from "@/assets/clients/krediya.png";
import lilipink from "@/assets/clients/lilipink.png";
import practi from "@/assets/clients/practi.png";
import quipux from "@/assets/clients/quipux.png";
import righa from "@/assets/clients/righa.png";
import sis from "@/assets/clients/sis.png";
import sistecredito from "@/assets/clients/sistecredito.png";

const clients = [
  { name: "Esri", logo: esri },
  { name: "AutoMundial", logo: automundial },
  { name: "Righa", logo: righa },
  { name: "KrediYA", logo: krediya },
  { name: "CasaToro", logo: casatoro },
  { name: "Banco W", logo: bancow },
  { name: "ARMI", logo: armi },
  { name: "Haceb", logo: haceb },
  { name: "Cavipetrol", logo: cavipetrol },
  { name: "Inter Image", logo: interimage },
  { name: "SIS", logo: sis },
  { name: "Banco Contactar", logo: bancocontactar },
  { name: "LiliPink", logo: lilipink },
  { name: "Quipux", logo: quipux },
  { name: "Avanzo", logo: avanzo },
  { name: "CrediAlianza", logo: credialianza },
  { name: "Practi", logo: practi },
  { name: "Sistecrédito", logo: sistecredito },
  { name: "Clara", logo: clara },
  { name: "Epik", logo: epik },
  { name: "Finky", logo: finky },
  { name: "Aseguradora Solidaria", logo: aseguradora },
];

const MarqueeRow = ({ items, direction = "left", speed = 30 }: { items: typeof clients; direction?: "left" | "right"; speed?: number }) => {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3 sm:py-4 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-6 sm:gap-10 items-center w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          x: { duration: speed, repeat: Infinity, ease: "linear" },
        }}
        style={{ willChange: "transform" }}
      >
        {doubled.map((client, idx) => (
          <div
            key={`${client.name}-${idx}`}
            className="flex-shrink-0 h-8 sm:h-10 md:h-12 w-20 sm:w-28 md:w-32 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-full max-w-full object-contain invert"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ClientsSection = () => {
  const firstHalf = clients.slice(0, 11);
  const secondHalf = clients.slice(11);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background blobs */}
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
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 text-muted-foreground text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-muted px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
            +22 empresas confían en nosotros
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground font-display">
            Confían en nosotros
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MarqueeRow items={firstHalf} direction="left" speed={25} />
          <MarqueeRow items={secondHalf} direction="right" speed={30} />
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
