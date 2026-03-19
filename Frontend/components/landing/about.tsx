"use client"

import Image from "next/image"
import {
  GraduationCap,
  Briefcase,
  Globe2,
  Users,
  CheckCircle2,
  MapPin,
} from "lucide-react"

const timeline = [
  {
    icon: GraduationCap,
    title: "Formación Académica",
    description: "Título técnico de Programador + Ingeniería de Software",
    year: "Inicio",
  },
  {
    icon: Briefcase,
    title: "Proyectos Gubernamentales",
    description: "Colaboración en proyectos de gran escala",
    year: "Crecimiento",
  },
  {
    icon: Globe2,
    title: "Expansión Internacional",
    description: "Red de clientes en Europa",
    year: "Actual",
  },
]

const industries = [
  { name: "Restaurantes", icon: "🍽️" },
  { name: "Clínicas", icon: "🏥" },
  { name: "Hoteles", icon: "🏨" },
  { name: "Gobierno", icon: "🏛️" },
]

export function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0,0.03)_1px,transparent_0)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-4">
            Sobre Mí
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            ¿Quién Está Detrás de UniTech?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Content */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/20">
                  <span className="text-4xl font-bold text-white">UT</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Ingeniero de Software
                  </h3>
                  <p className="text-teal-600 font-medium mb-3">
                    Fundador de UniTech
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Disponible para proyectos globales</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Soy un <strong className="text-gray-900">ingeniero de software</strong> con
                años de formación académica, incluyendo un título técnico de
                programador y una carrera profesional en ingeniería de software.
              </p>
              <p>
                Mi enfoque está en el desarrollo de{" "}
                <strong className="text-gray-900">
                  soluciones de software y aplicaciones web
                </strong>{" "}
                para todo tipo de negocios, de manera 100% personalizada y
                profesional.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {[
                "Colaboración en proyectos gubernamentales e internacionales",
                "Red de clientes establecida a lo largo de Europa",
                "Experiencia en restaurantes, clínicas y hoteles",
                "Atención 100% personalizada y profesional",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Industries */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-400" />
                Industrias de Experiencia
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-2xl">{industry.icon}</span>
                    <span className="text-white font-medium text-sm">
                      {industry.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline & Map */}
          <div className="space-y-8">
            {/* Timeline */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                Trayectoria Profesional
              </h4>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-cyan-500" />

                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/20 z-10">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 pb-2">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-semibold text-gray-900">
                            {item.title}
                          </h5>
                          <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* European Presence */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl" />
              
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-teal-500" />
                Presencia en Europa
              </h4>
              
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                He desarrollado una red de clientes en el extranjero a lo largo de
                Europa, colaborando con negocios en diversos países para crear
                soluciones digitales innovadoras.
              </p>

              {/* Map Placeholder - Stylized */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Stylized Europe Representation */}
                    <div className="w-32 h-32 border-2 border-dashed border-teal-300/50 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 border-2 border-dashed border-teal-400/50 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full shadow-lg shadow-teal-500/30" />
                      </div>
                    </div>
                    {/* Connection Points */}
                    {[
                      { angle: 0, opacity: 0.9 },
                      { angle: 45, opacity: 0.6 },
                      { angle: 90, opacity: 0.8 },
                      { angle: 135, opacity: 0.5 },
                      { angle: 180, opacity: 0.7 },
                      { angle: 225, opacity: 0.4 },
                      { angle: 270, opacity: 0.65 },
                      { angle: 315, opacity: 0.75 },
                    ].map((point, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-teal-400 rounded-full shadow-sm"
                        style={{
                          top: `${50 + 45 * Math.sin((point.angle * Math.PI) / 180)}%`,
                          left: `${50 + 45 * Math.cos((point.angle * Math.PI) / 180)}%`,
                          transform: "translate(-50%, -50%)",
                          opacity: point.opacity,
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Countries List */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  {["España", "Francia", "Italia", "Alemania", "Portugal"].map(
                    (country, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/80 backdrop-blur-sm rounded text-xs font-medium text-gray-600"
                      >
                        {country}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
