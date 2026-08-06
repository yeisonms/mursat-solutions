import { useState, useCallback, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { BookingModal } from "@/components/site/BookingModal";
import { ArrowLeft, ArrowRight, Zap, Server, Shield, Database, ChevronLeft, ChevronRight, ExternalLink, Map, Calculator, AlertTriangle } from "lucide-react";
// Usaremos las nuevas imágenes subidas para mercacredito

export const Route = createFileRoute("/casos/mercacredito")({
  component: MercaCreditoPage,
  head: () => ({
    meta: [
      { title: "MercaCredito | Fintech & Retail SaaS" },
      {
        name: "description",
        content:
          "El software definitivo para empresas que venden productos a plazos. Digitaliza tus libros, controla tus rutas de cobranza, automatiza comisiones y reduce la morosidad a cero.",
      },
    ],
  }),
});

function MercaCreditoPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const slides = [
    { id: 1, img: "/merca1.png", label: "Dashboard de Control de Cartera" },
    { id: 2, img: "/merca2.png", label: "Gestión de Rutas y Cobranza" },
    { id: 3, img: "/merca3.png", label: "Liquidación de Comisiones" },
    { id: 4, img: "/merca4.png", label: "Escalamiento de Morosidad" }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-foreground antialiased font-sans">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors mb-10 text-sm font-medium"
          >
            <ArrowLeft className="size-4" />
            Volver al inicio
          </Link>

          {/* Eyebrow */}
          <div className="text-cyan-400 text-xs tracking-widest uppercase font-semibold mb-6">
            FINTECH & RETAIL SAAS
          </div>

          {/* Título y Subtítulo */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight max-w-4xl">
            Vendes a crédito. Nosotros aseguramos que cobres.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed mb-16">
            El software definitivo para empresas que venden productos a plazos. Digitaliza tus libros, controla tus rutas de cobranza, automatiza comisiones y reduce la morosidad a cero.
          </p>

          {/* Hero Carousel */}
          <div className="relative aspect-video md:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            <div className="overflow-hidden h-full" ref={emblaRef}>
              <div className="flex h-full">
                {slides.map((slide) => (
                  <div className="flex-[0_0_100%] min-w-0 h-full relative" key={slide.id}>
                    <img
                      src={slide.img}
                      alt={`Mockup de ${slide.label}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-zinc-950/50 border border-zinc-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-zinc-900 backdrop-blur-md cursor-pointer z-10"
              aria-label="Anterior imagen"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-zinc-950/50 border border-zinc-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-zinc-900 backdrop-blur-md cursor-pointer z-10"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`group relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ${
                    selectedIndex === index ? "w-8 opacity-100" : "w-2 opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`Ir a ${slide.label}`}
                >
                  <div className={`h-1.5 rounded-full bg-white transition-all duration-300 ${selectedIndex === index ? "w-8" : "w-2"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body: Dos Columnas */}
      <section className="relative py-20 px-6 border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Columna Izquierda (Sticky): Metadata, Tecnologías, Servicios */}
          <div className="w-full lg:w-[30%] lg:sticky lg:top-24 flex flex-col gap-10">
            
            {/* Botones de Acción */}
            <div className="flex flex-col gap-4">
              <BookingModal triggerVariant="secondary">
                <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] cursor-pointer">
                  Agendar Demostración
                  <ExternalLink className="size-5" />
                </button>
              </BookingModal>
              <a 
                href="#funcionalidades"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-800/80 hover:text-white transition-colors cursor-pointer"
              >
                Ver funcionalidades
              </a>
            </div>
            
            {/* Tecnologías */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-2">
                {["SaaS Multi-Tenant", "Arquitectura Cloud", "Geolocalización", "Real-Time Analytics"].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-sm font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
          </div>

          {/* Columna Derecha (Scroll): Narrativa */}
          <div className="w-full lg:w-[70%] flex flex-col prose prose-invert max-w-none">
            
            {/* Diferenciación (El Problema vs. La Solución) */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white tracking-tight mb-8 mt-0">
                El papel y el Excel te están haciendo perder dinero.
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/30">
                  <h4 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    Sin MercaCredito
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed m-0">
                    Cuadernos perdidos, cobradores sin ruta clara, cálculo manual de comisiones (con errores) y clientes morosos que pasan desapercibidos.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-900/30">
                  <h4 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Con MercaCredito
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed m-0">
                    Trazabilidad inmutable en la nube, rutas geolocalizadas, liquidación automática de comisiones y escalamiento de morosidad en tiempo real.
                  </p>
                </div>
              </div>
            </div>

            {/* Capacidades Core */}
            <div id="funcionalidades" className="mb-16 pt-8">
              <h3 className="text-3xl font-bold text-white tracking-tight mb-8">
                Capacidades Core
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/50 transition-colors group">
                  <Map className="size-8 text-cyan-400 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <h4 className="text-white font-semibold mb-2">01 — RUTAS</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed m-0">
                    <span className="text-zinc-200 font-medium">Orquestación de Cobranza.</span> Diseña y controla las rutas diarias de tus agentes en la calle. Cero visitas a ciegas.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/50 transition-colors group">
                  <Calculator className="size-8 text-cyan-400 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <h4 className="text-white font-semibold mb-2">02 — COMISIONES</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed m-0">
                    <span className="text-zinc-200 font-medium">Motor de Liquidación Automático.</span> Calcula las comisiones de tus vendedores y cobradores basándote en recaudos reales, sin hojas de cálculo.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/50 transition-colors group">
                  <AlertTriangle className="size-8 text-cyan-400 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <h4 className="text-white font-semibold mb-2">03 — MOROSIDAD</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed m-0">
                    <span className="text-zinc-200 font-medium">Sistema de Escalamiento.</span> Tablas de datos estructuradas que detectan retrasos inmediatamente y escalan las alertas antes de que la deuda sea incobrable.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/50 transition-colors group">
                  <Database className="size-8 text-cyan-400 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <h4 className="text-white font-semibold mb-2">04 — HISTORIAL</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed m-0">
                    <span className="text-zinc-200 font-medium">El Libro Mayor Digital.</span> Ingestión de datos segura para que el historial de créditos, abonos y saldos de cada cliente sea inmutable y auditable en segundos.
                  </p>
                </div>
              </div>
            </div>

            {/* Sección de Empatía */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white tracking-tight mb-8">
                Diseñado para la realidad del comercio a crédito.
              </h3>
              
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center shrink-0 border border-cyan-900/30">
                    <span className="text-cyan-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold m-0 mb-1">Directores de Operaciones</h4>
                    <p className="text-zinc-400 text-sm m-0">Controla quién cobra, cuánto se recauda al día y dónde está tu equipo.</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center shrink-0 border border-cyan-900/30">
                    <span className="text-cyan-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold m-0 mb-1">Administradores Financieros</h4>
                    <p className="text-zinc-400 text-sm m-0">Cierra la caja sin descuadres y liquida comisiones con precisión matemática.</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center shrink-0 border border-cyan-900/30">
                    <span className="text-cyan-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold m-0 mb-1">Dueños de Negocio</h4>
                    <p className="text-zinc-400 text-sm m-0">Ten visibilidad total de tu cartera activa y protege el flujo de caja de tu empresa.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-cyan-950/20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
            ¿Listo para recuperar el control de tu cartera?
          </h2>
          <BookingModal triggerVariant="primary">
            <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-5 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-xl hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] cursor-pointer">
              Agendar demostración
              <ExternalLink className="size-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </BookingModal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
