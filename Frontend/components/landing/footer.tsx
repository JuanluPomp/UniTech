"use client"

import Link from "next/link"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"

const footerLinks = {
  navegacion: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Sobre Mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],
  servicios: [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Aplicaciones a Medida", href: "#servicios" },
    { label: "E-commerce", href: "#servicios" },
    { label: "Sistemas de Gestión", href: "#servicios" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:luislizarragap1@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/25">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold text-white">
                Uni<span className="text-teal-400">Tech</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Consultoría de desarrollo web freelance con enfoque en calidad,
              innovación y atención personalizada.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:luislizarragap1@gmail.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  luislizarragap1@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+34744767301"
                  className="hover:text-teal-400 transition-colors"
                >
                  +34 744 767 301
                </a>
              </li>
              <li>Disponible remoto - Europa, México y USA</li>
            </ul>
            {/* Availability Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-2 bg-teal-500/10 rounded-lg border border-teal-500/20">
              <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-400 text-xs font-medium">
                Disponible para nuevos proyectos
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Juan Lizarraga Dev. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
