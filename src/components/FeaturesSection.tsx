import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Banknote, CheckCircle, RefreshCw, LucideIcon } from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  description: ReactNode;
  highlights: string[];
}[] = [{
  icon: Banknote,
  title: "IA especializada en cobranza",
  description: <>Entrenada específicamente en recuperación de pagos, reglas financieras y <span className="font-semibold text-foreground">normativa regulatoria del país</span>.</>,
  highlights: ["Recuperación de Pagos", "Reglas financieras", "Normativa regulatoria", "Capacidad de multicobro"]
}, {
  icon: CheckCircle,
  title: "Garantía de Precisión",
  description: "Cifras y ofertas validadas automáticamente, sin errores ni alucinaciones.",
  highlights: ["Datos validados", "Cálculos verificados", "Ofertas precisas"]
}, {
  icon: RefreshCw,
  title: "Validación Automática",
  description: "Verificación instantánea de intereses y montos con comprensión integral del historial del deudor.",
  highlights: ["Contexto completo", "Ofertas personalizadas", "Verificación instantánea"]
}];
const FeaturesSection = () => {
  return <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-secondary/40 via-background to-primary/10 relative overflow-hidden">
      {/* Animated slime/blob shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-primary/20 to-accent/15 blur-3xl" animate={{
        scale: [1, 1.2, 0.9, 1.1, 1],
        x: [0, 80, -50, 30, 0],
        y: [0, -60, 40, -20, 0],
        borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "70% 30% 50% 50% / 30% 30% 70% 70%", "50% 60% 30% 60% / 50% 40% 50% 60%", "30% 60% 70% 40% / 50% 60% 30% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }} style={{
        top: "-10%",
        left: "-5%"
      }} />
        <motion.div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-tl from-accent/15 to-primary/10 blur-3xl" animate={{
        scale: [1, 0.85, 1.15, 0.95, 1],
        x: [0, -70, 50, -30, 0],
        y: [0, 50, -40, 30, 0],
        borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%", "70% 30% 50% 50% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
      }} transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut"
      }} style={{
        top: "40%",
        right: "-10%"
      }} />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-4 font-display px-2">
            Negociación precisa y confiable
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: idx * 0.1
        }} whileHover={{
          y: -8,
          transition: {
            duration: 0.3
          }
        }} className={`relative bg-gradient-to-br from-card via-card to-secondary/50 border-2 border-border/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group overflow-hidden ${
          idx === 2 ? "sm:col-span-2 md:col-span-1" : ""
        }`}>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Icon with background */}
            <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
            </div>
            
            <h3 className="relative z-10 text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="relative z-10 text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              {feature.description}
            </p>
            <ul className="relative z-10 space-y-3">
              {feature.highlights.map((item, i) => null)}
            </ul>
          </motion.div>)}
        </div>

        {/* Bottom callout */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="mt-8 sm:mt-12 md:mt-16 text-center px-2">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground italic">
            "Cada interacción está diseñada para maximizar la probabilidad de pago, no solo el contacto."
          </p>
        </motion.div>
      </div>
    </section>;
};
export default FeaturesSection;
