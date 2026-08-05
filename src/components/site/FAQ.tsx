import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Cuánto tiempo toma construir y lanzar un MVP?",
    a: "Depende de la complejidad de la arquitectura, pero nuestro enfoque de Time-to-Market nos permite desplegar versiones iniciales funcionales en un rango de 8 a 12 semanas. Definimos estrictamente el alcance durante la fase de Discovery para priorizar las funcionalidades que validan tu modelo de negocio rápidamente, sin sacrificar la calidad del código.",
  },
  {
    q: "¿Cuál es su stack tecnológico principal?",
    a: "Seleccionamos la herramienta adecuada para el problema, pero nos especializamos en ecosistemas escalables de alto rendimiento. Desarrollamos interfaces fluidas con React y Next.js, y construimos lógicas de negocio robustas utilizando .NET o Node.js, respaldadas por bases de datos SQL relacionales. Desplegamos toda la infraestructura en entornos Cloud (Azure, AWS o plataformas serverless) aplicando siempre principios de Clean Architecture y SOLID.",
  },
  {
    q: "¿Quién es el dueño del código y la propiedad intelectual?",
    a: "El cliente, al 100%. Una vez que el proyecto se completa y se liquidan los acuerdos comerciales, la propiedad intelectual, el código fuente y las bases de datos te pertenecen por completo. Nosotros construimos la tecnología, pero el activo digital es de tu empresa.",
  },
  {
    q: "¿Qué sucede después del lanzamiento del producto?",
    a: "Un producto digital real no se abandona el día del lanzamiento. A través de nuestra fase SCALE, ofrecemos acompañamiento continuo que incluye monitoreo de la infraestructura en la nube, optimización de consultas a la base de datos, resolución de incidencias y desarrollo de nuevas funcionalidades para acompañar el crecimiento de tus usuarios.",
  },
  {
    q: "¿Cuánto cuesta desarrollar una plataforma o MVP?",
    a: "No trabajamos con paquetes prefabricados porque no construimos plantillas. El presupuesto se determina tras nuestra sesión de arquitectura inicial, evaluando variables como el nivel de concurrencia esperado, las integraciones con hardware o plataformas de terceros (pasarelas de pago, APIs externas), la necesidad de módulos de IA y los requerimientos de seguridad.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 px-6 bg-zinc-950 font-sans border-t border-zinc-800/50">
      <div className="max-w-3xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-400 font-light">
            Claridad total sobre cómo trabajamos.
          </p>
        </div>

        {/* Acordeón Personalizado */}
        <div className="flex flex-col">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-zinc-800 last:border-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 md:py-8 flex items-center justify-between gap-6 text-left group cursor-pointer focus:outline-none"
                >
                  <span className={cn(
                    "text-lg md:text-xl font-bold transition-colors duration-300",
                    isOpen ? "text-cyan-400" : "text-white group-hover:text-cyan-400/80"
                  )}>
                    {item.q}
                  </span>
                  
                  {/* Icono animado */}
                  <div className="shrink-0">
                    {isOpen ? (
                      <Minus className="size-6 text-cyan-400 transition-transform duration-300 rotate-0" />
                    ) : (
                      <Plus className="size-6 text-zinc-500 group-hover:text-cyan-400/80 transition-transform duration-300 rotate-90" />
                    )}
                  </div>
                </button>
                
                {/* Contenido con transición de altura (CSS Grid Trick) */}
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 pt-2 text-gray-300 text-base md:text-lg leading-relaxed font-light">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
