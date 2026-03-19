"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code2, Sparkles, Shield } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-teal-50/30" />
      
      {/* Animated Background Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-600 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Consultoría de Software Freelance</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
              Soluciones Web{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                  Profesionales
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 8.5C50 2.5 100 2.5 150 8.5C200 14.5 250 2.5 298 8.5"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              para tu Negocio
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Desarrollo de aplicaciones web con la más alta calidad y atención
              personalizada. Trabajo con transparencia total y comunicación
              constante para garantizar resultados excepcionales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all group"
              >
                <Link href="#contacto">
                  Comenzar Proyecto
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-200 hover:border-teal-300 hover:bg-teal-50 text-gray-700"
              >
                <Link href="#proyectos">Ver Proyectos</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: Shield, text: "100% Transparente" },
                { icon: Code2, text: "Código Profesional" },
                { icon: Sparkles, text: "Diseño Innovador" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-600">
                  <item.icon className="w-5 h-5 text-teal-500" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Code Window */}
                <div className="bg-gray-900 rounded-xl p-4 h-full flex flex-col">
                  {/* Window Header */}
                  <div className="flex items-center gap-2 pb-4 border-b border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-gray-400 text-sm font-mono">
                      proyecto.tsx
                    </span>
                  </div>
                  {/* Code Content */}
                  <div className="flex-1 pt-4 font-mono text-sm space-y-2 overflow-hidden">
                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-cyan-400">proyecto</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-yellow-400">{"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-teal-400">cliente</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-green-400">{'"Tu Negocio"'}</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-teal-400">calidad</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-green-400">{'"Premium"'}</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-teal-400">entrega</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-green-400">{'"A tiempo"'}</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-teal-400">soporte</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-orange-400">true</span>
                    </div>
                    <div>
                      <span className="text-yellow-400">{"}"}</span>
                      <span className="text-white">;</span>
                    </div>
                    <div className="pt-4">
                      <span className="text-purple-400">export</span>{" "}
                      <span className="text-purple-400">default</span>{" "}
                      <span className="text-cyan-400">proyecto</span>
                      <span className="text-white">;</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl shadow-lg shadow-teal-500/30 flex items-center justify-center animate-bounce">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">
                  Disponible para proyectos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-teal-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
