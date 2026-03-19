"use client"

import {
  Code2,
  Palette,
  Smartphone,
  BarChart3,
  Shield,
  Clock,
  MessageSquare,
  Zap,
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Diseño Innovador",
    description:
      "Interfaces modernas y atractivas que capturan la esencia de tu marca y cautivan a tus usuarios.",
    color: "from-pink-500 to-rose-500",
    shadowColor: "shadow-pink-500/20",
  },
  {
    icon: Code2,
    title: "Desarrollo a Medida",
    description:
      "Aplicaciones web personalizadas que entienden la lógica de tu negocio y facilitan su gestión.",
    color: "from-teal-400 to-cyan-500",
    shadowColor: "shadow-teal-500/20",
  },
  {
    icon: Smartphone,
    title: "Diseño Responsivo",
    description:
      "Tu sitio se verá perfecto en cualquier dispositivo, desde móviles hasta pantallas grandes.",
    color: "from-violet-500 to-purple-500",
    shadowColor: "shadow-violet-500/20",
  },
  {
    icon: BarChart3,
    title: "Optimización SEO",
    description:
      "Mejora tu posicionamiento en buscadores y aumenta la visibilidad de tu negocio online.",
    color: "from-amber-500 to-orange-500",
    shadowColor: "shadow-amber-500/20",
  },
]

const features = [
  {
    icon: Shield,
    title: "100% Confiable",
    description: "Trabajo transparente con comunicación constante",
  },
  {
    icon: Clock,
    title: "Entregas Puntuales",
    description: "Líneas de tiempo claras y verificación de progreso",
  },
  {
    icon: MessageSquare,
    title: "Comunicación Directa",
    description: "Atención personalizada y trato profesional",
  },
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Aplicaciones rápidas y optimizadas",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0,0.03)_1px,transparent_0)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-4">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            ¿Qué Puedo Ofrecerte?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ofrezco un diseño de calidad e innovador con funciones que faciliten
            la gestión de tu negocio, entendiendo la lógica del mismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg ${service.shadowColor} group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Compromiso de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Calidad
                </span>
              </h3>
              <p className="text-gray-400 max-w-xl mx-auto">
                Trabajo en base a líneas de tiempo de entrega con verificación de
                progreso constante.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
