import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Lightbulb } from "lucide-react";
const activities = [{
  time: "Ene 23, 3:00 PM",
  action: "Llamada contestada",
  icon: "📞",
  highlight: true
}, {
  time: "Ene 23, 3:00 PM",
  action: "Deudor se compromete de nuevo",
  icon: "✅",
  highlight: true
}, {
  time: "Ene 23, 3:00 PM",
  action: "Email de promesa de pago",
  icon: "📧",
  highlight: false
}, {
  time: "Ene 22, 11:21 AM",
  action: "Mensaje de WhatsApp de recordatorio",
  icon: "whatsapp",
  highlight: false
}, {
  time: "Ene 22, 11:17 AM",
  action: "Llamada contestada",
  icon: "📞",
  highlight: false
}, {
  time: "Ene 22, 11:16 AM",
  action: "Promesa de pago",
  icon: "🤝",
  highlight: true
}, {
  time: "Ene 21, 2:28 PM",
  action: "Llamada sin contestar",
  icon: "📵",
  highlight: false
}, {
  time: "Ene 21, 1:29 PM",
  action: "Llamada sin contestar",
  icon: "📵",
  highlight: false
}];
const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [{
    id: 0,
    label: "Multicanal Orquestado"
  }, {
    id: 1,
    label: "Negociación Inteligente"
  }, {
    id: 2,
    label: "Seguimiento Continuo"
  }];
  const tabContent = [{
    title: "Multicanal Orquestado",
    description: "Llamadas, WhatsApp, SMS y email coordinados en un solo flujo para aumentar contactabilidad y reducir el costo por contacto."
  }, {
    title: "Negociación Inteligente",
    description: "La IA prioriza deudas, calcula escenarios y propone acuerdos personalizados para maximizar la probabilidad de pago en cada contacto."
  }, {
    title: "Seguimiento Continuo",
    description: "Follow-ups automáticos y precisos hasta confirmar el pago, la promesa o la reactivación del contacto, sin depender de gestión manual."
  }];
  return <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
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
      }} className="text-center mb-4">
          <motion.span className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium uppercase tracking-wider bg-muted px-4 py-2 rounded-full" animate={{
          boxShadow: ["0 0 0 0 rgba(var(--muted), 0)", "0 0 0 8px rgba(var(--muted), 0.1)", "0 0 0 0 rgba(var(--muted), 0)"]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }}>
            <Lightbulb className="w-4 h-4" />
            Solución
          </motion.span>
        </motion.div>

        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 font-display">Así funciona RecaudoAI</motion.h2>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Un agente de cobranza IA que trabaja como un humano, sin límites humanos.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Debtor Card Simulation */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
            {/* Debtor Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">JG</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Deudor</p>
                  <p className="font-semibold text-foreground text-lg">Jaime Gerardo</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Celular</p>
                  <p className="font-medium text-foreground">+57 (302) 433 ••••</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Último contacto</p>
                  <p className="font-medium text-foreground">Ene 23, 3:00 PM</p>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="p-6">
              <h4 className="font-semibold text-foreground mb-4">Actividad</h4>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {activities.map((activity, idx) => <motion.div key={idx} initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: idx * 0.05
              }} className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${activity.highlight ? "bg-success/10" : "bg-secondary/50"}`}>
                    <span className="text-lg">
                      {activity.icon === "whatsapp" ? <MessageCircle className="w-5 h-5 text-success" /> : activity.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    {activity.highlight && <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded-full">
                        Éxito
                      </span>}
                  </motion.div>)}
              </div>
            </div>
          </motion.div>

          {/* Right: Features Tabs */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id ? "bg-primary text-primary-foreground shadow-glow" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}`}>
                  {tab.label}
                </button>)}
            </div>

            {/* Content */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft min-h-[200px]">
              <motion.div key={activeTab} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3
            }}>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tabContent[activeTab].description}
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[{
              value: "+60%",
              label: "Contactabilidad"
            }, {
              value: "-30%",
              label: "Costo por cobranza"
            }, {
              value: "+22%",
              label: "Tasa de recuperación"
            }].map((stat, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3 + idx * 0.1
            }} className="text-center p-2 sm:p-4 bg-secondary/50 rounded-xl">
                  <p className="text-lg sm:text-2xl font-bold text-navy-dark">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{stat.label}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;