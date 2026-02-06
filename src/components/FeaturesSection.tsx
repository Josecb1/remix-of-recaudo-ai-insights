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
  return <section className="py-24 px-6 bg-gradient-to-br from-secondary/40 via-background to-primary/10 relative overflow-hidden">
      {/* Animated slime/blob shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large morphing blob 1 */}
        <motion.div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/15 blur-3xl" animate={{
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
        
        {/* Medium morphing blob 2 */}
        <motion.div className="absolute w-[400px] h-[400px] bg-gradient-to-tl from-accent/15 to-primary/10 blur-3xl" animate={{
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
        
        {/* Small morphing blob 3 */}
        <motion.div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-primary/15 via-accent/10 to-primary/20 blur-3xl" animate={{
        scale: [1, 1.3, 0.8, 1.1, 1],
        x: [0, 60, -80, 40, 0],
        y: [0, -50, 60, -30, 0],
        borderRadius: ["50% 50% 30% 70% / 50% 50% 70% 30%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "50% 50% 30% 70% / 50% 50% 70% 30%"]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }} style={{
        bottom: "-5%",
        left: "30%"
      }} />
        
        {/* Extra small accent blob */}
        <motion.div className="absolute w-[250px] h-[250px] bg-gradient-to-bl from-accent/20 to-transparent blur-2xl" animate={{
        scale: [1, 1.4, 0.7, 1.2, 1],
        x: [0, -40, 60, -20, 0],
        y: [0, 40, -30, 50, 0],
        borderRadius: ["70% 30% 50% 50% / 30% 70% 30% 70%", "50% 50% 30% 70% / 50% 50% 70% 30%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%", "70% 30% 50% 50% / 30% 70% 30% 70%"]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} style={{
        top: "20%",
        left: "60%"
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
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4 font-display">
            Negociación precisa y confiable
          </h2>
          
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
        }} className="relative bg-gradient-to-br from-card via-card to-secondary/50 border-2 border-border/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Icon with background */}
            <div className="relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="relative z-10 text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="relative z-10 text-muted-foreground mb-6 leading-relaxed">
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
      }} className="mt-16 text-center">
          <p className="text-lg text-muted-foreground italic">
            "Cada interacción está diseñada para maximizar la probabilidad de pago, no solo el contacto."
          </p>
        </motion.div>
      </div>
    </section>;
};
export default FeaturesSection;