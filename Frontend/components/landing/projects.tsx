"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Mextaste",
    description:
      "Plataforma integral para taquería mexicana que organiza la logística diaria, controla inventario en tiempo real y potencia las ventas, todo envuelto en un diseño que respira cultura mexicana.",
    category: "Restaurantes",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    images: [
      "/projects/Mextaste.png",
      "/projects/Mextaste2.png",
    ],
  },
  {
    id: 2,
    title: "Zolt MX",
    description:
      "Sistema de gestión empresarial todo-en-uno: finanzas, empleados, ventas e inventario bajo un mismo techo, con soporte multiempresa, multisucursal y su propia tienda en línea integrada.",
    category: "Empresarial",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    images: [
      "/projects/company_manager.png",
      "/projects/company_manager_2.png",
    ],
  },
  {
    id: 3,
    title: "Sistema Estatal del Gobierno del Estado de Sinaloa",
    description:
      "Portal de consulta de recursos gubernamentales que facilita trámites estatales y maneja grandes volúmenes de datos, acercando los servicios del gobierno a los ciudadanos de forma ágil y transparente.",
    category: "Gobierno",
    technologies: ["Angular", "Java", "Oracle", "Docker"],
    images: [
      "/projects/goberment_project.png",
      "/projects/goberment_project2.png",
    ],
  },
  {
    id: 4,
    title: "LogiHostel",
    description:
      "Herramienta de gestión hotelera que simplifica la agenda, automatiza la lógica de negocio y centraliza las reservas para que la operación del día a día fluya sin complicaciones.",
    category: "Hotelería",
    technologies: ["Next.js", "Express", "MySQL", "Redis"],
    images: [
      "/projects/hotel_manager1.png",
      "/projects/hotel_manager.png",
    ],
  },
]

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image Carousel */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <Image
          src={project.images[currentImage]}
          alt={`${project.title} - imagen ${currentImage + 1}`}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Navigation */}
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() =>
              setCurrentImage((prev) =>
                prev === 0 ? project.images.length - 1 : prev - 1
              )
            }
            className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() =>
              setCurrentImage((prev) =>
                prev === project.images.length - 1 ? 0 : prev + 1
              )
            }
            className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {project.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentImage
                  ? "w-6 bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ver imagen ${idx + 1}`}
            />
          ))}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge
            variant="secondary"
            className="bg-white/90 text-gray-700 backdrop-blur-sm"
          >
            {project.category}
          </Badge>
        </div>

      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-4">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Una selección de proyectos reales que reflejan mi experiencia en
            distintas industrias y soluciones a medida.
          </p>
        </div>

        {/* Projects Carousel for Mobile */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 basis-full sm:basis-1/2">
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        </div>

        {/* Projects Grid for Desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Proyectos Completados" },
            { value: "30+", label: "Clientes Satisfechos" },
            { value: "5+", label: "Países en Europa" },
            { value: "100%", label: "Satisfacción" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
