import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Calendar, ArrowRight } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { cn } from "@/lib/utils";

const CAL_USERNAME = "mursat-solutions-udwzxq/30min";


interface BookingModalProps {
  triggerText?: string;
  triggerVariant?: "primary" | "outline";
  className?: string;
  children?: React.ReactNode;
}

export function BookingModal({
  triggerText = "Agenda una sesión de arquitectura",
  triggerVariant = "primary",
  className,
  children,
}: BookingModalProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#00ff88",
          },
          dark: {
            "cal-brand": "#00ff88",
            "cal-bg": "#0a0a0a",
            "cal-bg-emphasis": "#111",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>

      <DialogPrimitive.Trigger asChild>
        {children ?? (
          <button
            className={cn(
              "cursor-pointer",
              triggerVariant === "primary"
                ? "group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold glow-neon hover:scale-[1.02] transition"
                : "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full neumo border border-border/60 font-semibold hover:border-neon/60 transition",
              className
            )}
          >
            {triggerVariant === "primary" && (
              <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            )}
            {triggerVariant === "outline" && <Calendar className="size-4" />}
            {triggerText}
          </button>
        )}
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 w-[calc(100%-2rem)] max-w-[900px] translate-x-[-50%] translate-y-[-50%]",
            "rounded-[2rem] border border-neon/20 bg-surface-elevated shadow-2xl",
            "flex flex-col max-h-[90vh]",
            "duration-300",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          )}
        >
          {/* Header */}
          <div className="flex items-start justify-between px-6 md:px-8 py-5 md:py-6 border-b border-border/40 shrink-0">
            <div className="pr-4">
              <DialogPrimitive.Title asChild>
                <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight">
                  Hablemos de tu{" "}
                  <span className="text-gradient-neon">arquitectura técnica</span>
                </h3>
              </DialogPrimitive.Title>
              <DialogPrimitive.Description asChild>
                <p className="text-sm text-muted-foreground mt-1 max-w-xl leading-relaxed">
                  Selecciona un espacio en nuestro calendario y cuéntanos brevemente
                  sobre tu reto técnico para prepararnos.
                </p>
              </DialogPrimitive.Description>
            </div>
            <DialogPrimitive.Close asChild>
              <button className="shrink-0 inline-flex items-center justify-center size-10 rounded-full neumo hover:border-neon/40 transition border border-transparent cursor-pointer">
                <X className="size-5 text-muted-foreground" />
              </button>
            </DialogPrimitive.Close>
          </div>

          {/* Cal.com embedded scheduler */}
          <div className="flex-1 min-h-0 h-[70vh] overflow-hidden">
            {open && (
              <Cal
                namespace="mursat-booking"
                calLink={CAL_USERNAME}
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view", theme: "dark" }}
              />
            )}
          </div>


        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
