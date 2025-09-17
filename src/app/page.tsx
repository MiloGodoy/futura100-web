"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Shield, Zap, Users, FileText, Clock, Award, ArrowRight } from "lucide-react"

export default function Futura100Landing() {
  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const endoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ""

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F100</span>
            </div>
            <span className="text-xl font-bold text-gray-900">FUTURA100</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Características
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">
              Beneficios
            </a>
            <a href="#contact-form" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contacto
            </a>
          </nav>
          <Button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700 text-white">
            Comenzar Ahora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            #1 en Facturación Electrónica Paraguay
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            La solución de <span className="text-blue-600">Facturación Electrónica</span> más completa del Paraguay
          </h1>
          <p className="text-xl text-gray-700 mb-8 text-pretty max-w-2xl mx-auto">
            Somos los primeros facturadores electrónicos del país operando desde el 2019. Mejora los procesos de
            información y disminuye considerablemente los gastos de tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Solicitar Más Información
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Características
            </Button>
          </div>
          {/* ... existing stats section ... */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">2019</div>
              <div className="text-gray-600">Operando desde</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">3 en 1</div>
              <div className="text-gray-600">Proveedores integrados</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Seguro y confiable</div>
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
              Somos 3 proveedores en UNO. Una solución integral para todas tus necesidades de facturación electrónica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
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
                  <FileText className="h-6 w-6 text-blue-600" />
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
                  <Zap className="h-6 w-6 text-blue-600" />
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
                  <Users className="h-6 w-6 text-blue-600" />
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
                  <Clock className="h-6 w-6 text-blue-600" />
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
                  <Award className="h-6 w-6 text-blue-600" />
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
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reducción de Costos</h3>
                    <p className="text-gray-600">Disminuye considerablemente los gastos operativos de tu empresa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Mejora de Procesos</h3>
                    <p className="text-gray-600">Optimiza los procesos de información y gestión documental</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cumplimiento Legal</h3>
                    <p className="text-gray-600">Garantiza el cumplimiento de todas las normativas paraguayas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
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
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Confianza y Seguridad Digital</h3>
                  <p className="text-gray-700 mb-6">
                    Code100 es una empresa de Software dedicada al desarrollo y comercialización de soluciones
                    informáticas orientadas a empresas y organizaciones.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Conocer Más</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
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
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Solicitar Demostración
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
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
                  <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
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
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F100</span>
                </div>
                <span className="text-xl font-bold">FUTURA100</span>
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
