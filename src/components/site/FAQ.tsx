import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿En cuánto tiempo pueden lanzar un MVP?",
    a: "Un MVP típico se entrega entre 6 y 12 semanas, dependiendo del alcance. Iniciamos con un sprint de discovery para definir el core, seguido de ciclos quincenales con demos y entregables funcionales.",
  },
  {
    q: "¿Trabajan con equipos internos o reemplazan a mi equipo técnico?",
    a: "Ambos modelos. Podemos operar como tu equipo de ingeniería completo (fractional CTO + squad) o integrarnos con tu tech lead actual para acelerar entregas puntuales sin fricción.",
  },
  {
    q: "¿Qué stack tecnológico utilizan?",
    a: "React, Next.js, Node, .NET, Python, PostgreSQL y despliegues cloud-native (AWS, GCP, Cloudflare). Para IA integramos Gemini, OpenAI y modelos open-source vía APIs seguras.",
  },
  {
    q: "¿Cómo aseguran la calidad del código y la escalabilidad?",
    a: "Clean Architecture, revisiones de código obligatorias, CI/CD, cobertura de pruebas y observabilidad desde el día uno. Cada release pasa por pipelines automatizados antes de producción.",
  },
  {
    q: "¿Ofrecen soporte y evolución después del lanzamiento?",
    a: "Sí. Ofrecemos planes de mantenimiento evolutivo con SLA definido, monitoreo 24/7 y roadmap trimestral para que el producto siga creciendo con el negocio.",
  },
  {
    q: "¿Cómo manejan la propiedad intelectual del código?",
    a: "Todo el código, activos y documentación son 100% propiedad del cliente al cierre del proyecto. Firmamos NDAs y acuerdos de transferencia de IP desde el inicio.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full neumo text-xs text-muted-foreground mb-6">
            <span className="size-1.5 rounded-full bg-neon" />
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Preguntas <span className="text-gradient-neon">frecuentes</span>
          </h2>
          <p className="text-muted-foreground">
            Todo lo que necesitas saber antes de trabajar con nosotros.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="neumo rounded-xl border-0 px-5"
            >
              <AccordionTrigger className="text-base font-medium hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
