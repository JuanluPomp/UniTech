"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            ¿Listo para Empezar tu Proyecto?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Cuéntame sobre tu idea y trabajemos juntos para convertirla en
            realidad. Respondo en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-100/50 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    required
                    className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-teal-400 focus:ring-teal-400/20"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-teal-400 focus:ring-teal-400/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-gray-700"
                >
                  Empresa / Negocio
                </label>
                <Input
                  id="company"
                  placeholder="Nombre de tu empresa"
                  className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-teal-400 focus:ring-teal-400/20"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="project"
                  className="text-sm font-medium text-gray-700"
                >
                  Tipo de Proyecto
                </label>
                <select
                  id="project"
                  className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-md text-gray-700 focus:bg-white focus:border-teal-400 focus:ring-teal-400/20 focus:outline-none"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="web">Sitio Web</option>
                  <option value="webapp">Aplicación Web</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="sistema">Sistema de Gestión</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                  rows={4}
                  className="bg-gray-50 border-gray-200 focus:bg-white focus:border-teal-400 focus:ring-teal-400/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all h-12 group"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    ¡Mensaje Enviado!
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "contacto@unitech.dev",
                  action: "mailto:contacto@unitech.dev",
                },
                {
                  icon: Phone,
                  title: "Teléfono",
                  value: "+34 XXX XXX XXX",
                  action: "tel:+34XXXXXXXXX",
                },
                {
                  icon: MapPin,
                  title: "Ubicación",
                  value: "Disponible remoto - Europa",
                  action: null,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">{item.title}</div>
                    {item.action ? (
                      <a
                        href={item.action}
                        className="font-medium text-gray-900 hover:text-teal-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium text-gray-900">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white mb-2">
                  ¿Prefieres una Videollamada?
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Agenda una consulta gratuita de 30 minutos para discutir tu
                  proyecto.
                </p>
                <Button
                  variant="outline"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white group"
                >
                  Agendar Llamada
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-xl border border-teal-100">
              <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-teal-700 text-sm font-medium">
                Tiempo de respuesta promedio: menos de 24 horas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
