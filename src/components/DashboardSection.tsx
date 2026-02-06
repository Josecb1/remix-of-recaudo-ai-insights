import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Clock, Database, Lightbulb, PieChart } from "lucide-react";

const insights = [
  { text: "Mejores horarios de contacto", icon: Clock },
  { text: "Depuración de base de datos", icon: Database },
  { text: "Optimización de estrategia", icon: TrendingUp },
];

const DashboardSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6"
          >
            <BarChart3 className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            Visibilidad total en tu operación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La data es la base de toda estrategia, por tanto hacemos visibles cualquier métrica que requieras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Reporting Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    boxShadow: ["0 0 0 0 hsl(var(--primary) / 0)", "0 0 15px 3px hsl(var(--primary) / 0.3)", "0 0 0 0 hsl(var(--primary) / 0)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
                >
                  <PieChart className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Reporting en tiempo real</h3>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1 text-xs text-red-500 font-medium"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    En vivo
                  </motion.div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Tipificación con mini gráfico de dona */}
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground font-medium">Tipificación exhaustiva</p>
                  
                  {/* Donut chart visual */}
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <svg className="w-full h-full transform -rotate-90">
                        {[
                          { percent: 25, color: "hsl(var(--primary))", offset: 0 },
                          { percent: 20, color: "hsl(var(--primary) / 0.7)", offset: 25 },
                          { percent: 30, color: "hsl(var(--primary) / 0.5)", offset: 45 },
                          { percent: 25, color: "hsl(var(--primary) / 0.3)", offset: 75 },
                        ].map((segment, idx) => (
                          <motion.circle
                            key={idx}
                            cx="48"
                            cy="48"
                            r="36"
                            fill="none"
                            stroke={segment.color}
                            strokeWidth="12"
                            strokeDasharray={`${segment.percent * 2.26} 226`}
                            strokeDashoffset={-segment.offset * 2.26}
                            initial={{ strokeDasharray: "0 226" }}
                            whileInView={{ strokeDasharray: `${segment.percent * 2.26} 226` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + idx * 0.15 }}
                          />
                        ))}
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span 
                          className="text-lg font-bold text-foreground"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 }}
                        >
                          100%
                        </motion.span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      {[
                        { name: "Disputa", percent: 25, color: "bg-primary" },
                        { name: "Dificultad", percent: 20, color: "bg-primary/70" },
                        { name: "Negativa", percent: 30, color: "bg-primary/50" },
                        { name: "Pago", percent: 25, color: "bg-primary/30" },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-sm cursor-default"
                        >
                          <span className={`w-3 h-3 ${item.color} rounded-sm`} />
                          <span className="text-foreground">{item.name}</span>
                          <span className="text-muted-foreground text-xs ml-auto">{item.percent}%</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tags adicionales */}
                  <div className="flex flex-wrap gap-2">
                    {["Contactados", "Promesas de pago", "Pagos confirmados", "Razones de no contacto"].map((item, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + idx * 0.05 }}
                        whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                        className="px-3 py-1.5 bg-secondary/60 rounded-full text-xs text-foreground cursor-default transition-colors"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Stats preview with animated progress bars */}
                <div className="space-y-4 pt-4 border-t border-border">
                  {[
                    { label: "Promesas", value: "18.340", trend: "+12%", progress: 75 },
                    { label: "Pagos", value: "4.530", trend: "+8%", progress: 60 },
                    { label: "Confirmados", value: "12.253", trend: "+15%", progress: 45 },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-foreground">{stat.value}</span>
                          <motion.span
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                            className="text-xs text-foreground font-semibold inline-flex items-center gap-1 bg-primary px-2 py-1 rounded-md"
                          >
                            <TrendingUp className="w-3 h-3" />
                            {stat.trend}
                          </motion.span>
                        </div>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.6 + idx * 0.15, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full relative"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Insights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-xl hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ 
                  boxShadow: ["0 0 0 0 hsl(var(--primary) / 0)", "0 0 20px 5px hsl(var(--primary) / 0.3)", "0 0 0 0 hsl(var(--primary) / 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center"
              >
                <Lightbulb className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="font-semibold text-foreground text-lg">Insights accionables</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              {insights.map((insight, idx) => {
                const Icon = insight.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ 
                      x: 10, 
                      backgroundColor: "hsl(var(--primary) / 0.1)",
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl cursor-default transition-colors"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <span className="text-foreground font-medium">{insight.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Dashboard de Contactabilidad y Recordatorio */}
            <div className="bg-gradient-to-br from-secondary/30 to-secondary/60 rounded-xl p-6 border border-border relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">Mejores días de contactabilidad</p>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1 text-xs text-red-500 font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    Actualizado
                  </motion.div>
                </div>

                {/* Días con mejor contactabilidad */}
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { day: "Lun", rate: 72, best: false },
                    { day: "Mar", rate: 85, best: true },
                    { day: "Mié", rate: 78, best: false },
                    { day: "Jue", rate: 88, best: true },
                    { day: "Vie", rate: 65, best: false },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`text-center p-3 rounded-xl cursor-default transition-all ${
                        item.best 
                          ? "bg-primary/20 border border-primary/40" 
                          : "bg-secondary/50"
                      }`}
                    >
                      <p className={`text-xs font-medium ${item.best ? "text-foreground" : "text-muted-foreground"}`}>
                        {item.day}
                      </p>
                      <motion.p 
                        className={`text-lg font-bold ${item.best ? "text-foreground" : "text-foreground"}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                      >
                        {item.rate}%
                      </motion.p>
                      {item.best && (
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7, type: "spring" }}
                          className="text-[10px] text-foreground font-medium"
                        >
                          ⭐ Mejor
                        </motion.span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Horarios de recordatorio */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-medium text-foreground mb-3">Mejores horarios de recordatorio</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { time: "8:00 - 10:00", label: "Mañana", rate: 82, icon: "🌅" },
                      { time: "11:00 - 13:00", label: "Mediodía", rate: 75, icon: "☀️" },
                      { time: "14:00 - 17:00", label: "Tarde", rate: 68, icon: "🌤️" },
                    ].map((slot, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        whileHover={{ y: -3, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                        className="bg-secondary/40 rounded-lg p-3 text-center cursor-default transition-all"
                      >
                        <span className="text-xl">{slot.icon}</span>
                        <p className="text-xs text-muted-foreground mt-1">{slot.label}</p>
                        <p className="text-sm font-semibold text-foreground">{slot.time}</p>
                        <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${slot.rate}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 + idx * 0.1 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                        <p className="text-xs text-foreground font-medium mt-1">{slot.rate}% efectividad</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
