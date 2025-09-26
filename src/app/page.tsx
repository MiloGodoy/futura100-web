"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Shield, Zap, Users, FileText, Clock, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import Logo from '../../public/Logo Sin Fondo - Futura100.png'
import { useEffect, useRef, useState } from "react"

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 20)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return { count, ref }
}

export default function Futura100Landing() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const { count: companyCount, ref: companyRef } = useCountUp(615, 2500)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])


  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const endoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ""

  const openWhatsApp = () => {
    const phoneNumber = "595992460600" // Número sin espacios ni símbolos
    const message = "Hola, me interesa conocer más sobre FUTURA100 y sus servicios de facturación electrónica."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-[oklch(0.96_0_0)] backdrop-blur 
supports-[backdrop-filter]:bg-white/90 fixed top-0 w-full z-50 h-16">
  <div className="container mx-auto px-4 flex items-center justify-between h-full">
    <div className="flex items-center space-x-2 flex-shrink-0">
      <Image
        src={Logo}
        alt="Logo Futura100"
        className="h-45 w-auto object-contain" // más grande sin romper el header
        priority
      />
    </div>
    <div className="flex items-center space-x-8 ml-auto">
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
          Características
        </a>
        <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
          Beneficios
        </a>
        <a href="#contact-form" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
          Contacto
        </a>
      </nav>
      <div className="flex items-center space-x-3">
        <Button
          onClick={openWhatsApp}
          className="bg-[#3dbdbb] hover:bg-[#35a8a6] text-white text-sm px-4 py-2"
        >
          Escribinos al WhatsApp
        </Button>
        <Button
          onClick={scrollToContact}
          className="bg-[#3dbdbb] hover:bg-[#35a8a6] text-white text-sm px-4 py-2"
        >
          Comenzar Ahora
        </Button>
      </div>
    </div>
  </div>
</header>


      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-[#fbb524] text-black border-blue-200">
            #1 en Facturación Electrónica
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            La solución de <span className="text-[#fbb524]">Facturación Electrónica</span> más completa del Paraguay
          </h1>
          <p className="text-xl text-gray-700 mb-8 text-pretty max-w-2xl mx-auto">
            Somos los primeros facturadores electrónicos del país operando desde el 2019. Optimizá tus procesos y reducí
            significativamente los costos operativos de tu empresa con Futura100
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} size="lg" className="bg-[#3dbdbb] hover:bg-[#35a8a6] text-white">
              Solicitar Más Información
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#fbb524] bg-[#fbb524] text-black hover:bg-amber-500"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Características
            </Button>
          </div>
          {/* ... existing stats section ... */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#fbb524]">2019</div>
              <div className="text-gray-600">6 años brindando soluciones</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg" ref={companyRef}>
                <div className="text-3xl font-bold text-[#fbb524]">{companyCount}+</div>
                <div className="text-gray-600">Empresas confían en nosotros</div>
              </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#fbb524]">100%</div>
              <div className="text-gray-600">Seguro y con validez legal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué las empresas eligen FUTURA100?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Porque ofrecemos una solución integral: somos 3 proveedores en uno, con todo lo que
              tu empresa necesita para gestionar la facturación electrónica de forma simple, segura
              y eficiente 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#fbb524]" />
                </div>
                <CardTitle className="text-gray-900">Certificados de Firma Electrónica</CardTitle>
                <CardDescription className="text-gray-600">
                  Emisión de Certificados de Firma Digital ahora denominada Firma Electrónica Cualificada
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#fbb524]" />
                </div>
                <CardTitle className="text-gray-900">FACTURA100</CardTitle>
                <CardDescription className="text-gray-600">
                  Software de Gestión de Facturas Electrónicas completo y fácil de usar
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#fbb524]" />
                </div>
                <CardTitle className="text-gray-900">DATAFLOW</CardTitle>
                <CardDescription className="text-gray-600">
                  Gestor de Firmas y documentos electrónicos para optimizar tus procesos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#fbb524]" />
                </div>
                <CardTitle className="text-gray-900">CODESIGN</CardTitle>
                <CardDescription className="text-gray-600">
                  Firmador Masivo de documentos para empresas con alto volumen
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#fbb524]" />
                </div>
                <CardTitle className="text-gray-900">Integración Rápida</CardTitle>
                <CardDescription className="text-gray-600">
                  Se integra a cualquier necesidad de tu empresa, de forma segura, rápida y eficiente
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#fbb524]" />
                </div>
                <CardTitle className="text-gray-900">Experiencia Comprobada</CardTitle>
                <CardDescription className="text-gray-600">
                  Especialistas en Código SAP y consultores expertos en transformación digital
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Transforma tu empresa con FUTURA100</h2>
              <p className="text-lg text-gray-700 mb-8">
                Una plataforma de Facturación Electrónica diseñada específicamente para empresas paraguayas, con el
                respaldo de años de experiencia y la confianza de cientos de clientes.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#fbb524] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reducción de Costos</h3>
                    <p className="text-gray-600">Disminuye considerablemente los gastos operativos de tu empresa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#fbb524] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Mejora de Procesos</h3>
                    <p className="text-gray-600">Optimiza los procesos de información y gestión documental</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#fbb524] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cumplimiento Legal</h3>
                    <p className="text-gray-600">Garantiza el cumplimiento de todas las normativas paraguayas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#fbb524] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Soporte Especializado</h3>
                    <p className="text-gray-600">Acompañamiento en la transformación digital de tu empresa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3dbdbb] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Confianza y Seguridad Digital</h3>
                  <p className="text-gray-700 mb-6">
                    Code100 es una empresa de Software dedicada al desarrollo y comercialización de soluciones
                    informáticas orientadas a empresas y organizaciones.
                  </p>
                  <Button className="bg-[#3dbdbb] hover:bg-blue-700 text-white">Conocer Más</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#3dbdbb]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para digitalizar tu empresa?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya confían en FUTURA100 para su facturación electrónica. Comienza tu transformación
            digital hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="secondary"
              className="bg-[#fbb524] text-black hover:bg-gray-100"
            >
              Solicitar Demostración
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="border-2 border-[#fbb524] text-gray-100 hover:bg-[#fbb524] bg-transparent"
            >
              Contactar Ventas
            </Button>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-700">
              Completa el formulario y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
            </p>
          </div>

          <Card className="border-gray-200 shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-gray-900">Solicitar Información</CardTitle>
              <CardDescription className="text-gray-600">
                Descubre cómo FUTURA100 puede transformar tu empresa
              </CardDescription>
            </CardHeader>
            <div className="px-6 pb-6">
              <form action={endoint} method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
                      Nombre *
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="apellido" className="text-sm font-medium text-gray-700">
                      Apellido *
                    </label>
                    <Input
                      id="apellido"
                      name="apellido"
                      type="text"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Correo Electrónico *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="empresa" className="text-sm font-medium text-gray-700">
                      Empresa *
                    </label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Cuéntanos sobre tus necesidades de facturación electrónica..."
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-[#fbb524] border-[#fbb524] hover:bg-gray-300 text-black px-8">
                    Enviar Solicitud
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
               <Image 
                src={Logo}
                alt="Logo Futura100"
                className="h-35 w-auto object-contain" // más grande sin romper el header
                priority
               />
              </div>
              <p className="text-gray-300">La solución de facturación electrónica más completa del Paraguay.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Productos</h3>
              <ul className="space-y-2 text-gray-300">
                <li>FACTURA100</li>
                <li>DATAFLOW</li>
                <li>CODESIGN</li>
                <li>Certificados Digitales</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Nosotros</li>
                <li>Soporte</li>
                <li>Repositorio</li>
                <li>Fundación Code100</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-300">
                <li>info@code100.com.py</li>
                <li>+595 21 123 456</li>
                <li>Asunción, Paraguay</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Code100. Todos los derechos reservados. Confianza y Seguridad Digital.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
