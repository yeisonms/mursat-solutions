import { useState, useCallback, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { BookingModal } from "@/components/site/BookingModal";
import { ArrowLeft, ArrowRight, Zap, Server, Shield, Database, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import sirvoImg from "@/assets/portfolio/sirvo.png"; // Forzar recarga de Vite

export const Route = createFileRoute("/casos/sirvo")({
  component: CaseStudy,
  head: () => ({
    meta: [
      { title: "Caso de Estudio: Sirvo | MurSat Solutions" },
      {
        name: "description",
        content:
          "Arquitectura omnicanal para unificar pedidos digitales y la operación de cocina en tiempo real.",
      },
    ],
  }),
});

function CaseStudy() {
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
    { id: 1, img: sirvoImg, label: "Portal de Pedidos Digital" },
    { id: 2, img: "/sirvo2.png", label: "Kitchen Display System" },
    { id: 3, img: "/sirvo3.png", label: "Control de Inventario" },
    { id: 4, img: "/sirvo4.png", label: "Vista Móvil" }
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
            FOODTECH SAAS · HARDWARE INTEGRATION
          </div>

          {/* Título y Subtítulo */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight max-w-4xl">
            Sirvo Burger
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed mb-16">
            Arquitectura omnicanal para unificar pedidos digitales y la operación de cocina en tiempo real.
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
                  className={`group relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ${selectedIndex === index ? "w-8 opacity-100" : "w-2 opacity-50 hover:opacity-80"
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
              <a
                href="https://sinver-eta.vercel.app/menu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] cursor-pointer"
              >
                Visitar Ecosistema en Vivo
                <ExternalLink className="size-5" />
              </a>
              <BookingModal triggerVariant="secondary">
                <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-800/80 hover:text-white transition-colors cursor-pointer">
                  Construir un ecosistema SaaS
                </button>
              </BookingModal>
            </div>

            {/* Tecnologías */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Bases de Datos en Tiempo Real (SQL/NoSQL)", "Integración de Hardware (IoT)"].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-sm font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Servicios Aplicados */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Servicios Aplicados
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Server className="size-5 text-cyan-400 shrink-0" />
                  <span className="text-zinc-400 text-sm">Arquitectura SaaS omnicanal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="size-5 text-cyan-400 shrink-0" />
                  <span className="text-zinc-400 text-sm">Control de inventario en tiempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="size-5 text-cyan-400 shrink-0" />
                  <span className="text-zinc-400 text-sm">Hardware físico e impresoras POS</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="size-5 text-cyan-400 shrink-0" />
                  <span className="text-zinc-400 text-sm">Sistemas centralizados OMS</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Columna Derecha (Scroll): Narrativa */}
          <div className="w-full lg:w-[70%] flex flex-col prose prose-invert max-w-none">

            {/* Contexto y Problema */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white tracking-tight mb-6 mt-0">
                Contexto y Problema
              </h3>
              <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
                <p>
                  Los restaurantes de alto volumen sufren de un quiebre operativo entre los pedidos digitales y la ejecución física, generando caos en la cocina y descuadres en el inventario. sirvo requería una solución tecnológica que sincronizara ambos mundos sin fricción.
                </p>
              </div>
            </div>

            {/* Arquitectura y Solución */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white tracking-tight mb-6">
                Arquitectura y Solución
              </h3>
              <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
                <p>
                  Diseñamos un ecosistema <span className="text-white font-semibold">SaaS omnicanal a la medida</span>. La innovación central fue desarrollar un <span className="text-white font-semibold">Sistema de Gestión de Pedidos (OMS)</span> que se comunica directamente con hardware físico (impresoras de cocina) mediante bases de datos en tiempo real, garantizando una trazabilidad perfecta desde que el cliente hace clic hasta que el pedido se entrega.
                </p>
              </div>
            </div>

            {/* El Resultado */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white tracking-tight mb-6">
                El Resultado
              </h3>
              <div className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 border-l-4 border-l-cyan-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <p className="text-xl text-zinc-200 font-medium leading-relaxed m-0">
                  Un ecosistema operativo automatizado que elimina retrasos en la producción, mantiene el inventario cuadrado al segundo y establece una arquitectura base lista para ser desplegada en futuras franquicias.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
