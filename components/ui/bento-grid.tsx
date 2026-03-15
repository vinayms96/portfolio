"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  href?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-5 rounded-xl overflow-hidden transition-all duration-300",
            // site theme surface + border
            "border border-border bg-surface",
            // indigo-tinted shadow on hover
            "hover:shadow-[0_4px_24px_rgba(99,102,241,0.12)]",
            "hover:-translate-y-0.5 will-change-transform",
            "hover:border-accent/50",
            // col span
            "col-span-1",
            item.colSpan === 2 && "md:col-span-2",
            item.colSpan === 3 && "md:col-span-3",
            item.colSpan === 4 && "md:col-span-4",
            item.colSpan === 5 && "md:col-span-5",
            // persistent hover state for featured card
            item.hasPersistentHover && [
              "shadow-[0_4px_24px_rgba(99,102,241,0.12)]",
              "-translate-y-0.5",
              "border-accent/40",
            ]
          )}
        >
          {/* Dot-grid background — matches site's grid-pattern */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.07)_1px,transparent_1px)] bg-[length:16px_16px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            {/* Icon + status badge */}
            <div className="flex items-center justify-between">
              <div
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                  "bg-surface-2 group-hover:bg-accent/10"
                )}
              >
                {item.icon}
              </div>
              {item.status && (
                <span className="text-xs font-mono px-2 py-0.5 rounded border border-accent/20 bg-accent-muted text-accent">
                  {item.status}
                </span>
              )}
            </div>

            {/* Title + meta */}
            <div className="space-y-1.5">
              <h3 className="font-semibold tracking-tight text-sm">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-accent transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="text-text-primary">{item.title}</span>
                )}
                {item.meta && (
                  <span className="ml-2 text-xs text-text-muted font-mono font-normal">
                    {item.meta}
                  </span>
                )}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Tags + CTA */}
            <div className="flex items-end justify-between gap-2 mt-1">
              <div className="flex flex-wrap gap-1.5">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-accent-muted text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-mono font-medium
                             px-2.5 py-1 rounded border border-accent/30 bg-accent-muted text-accent
                             opacity-0 group-hover:opacity-100 hover:bg-accent hover:text-white hover:border-accent
                             transition-all duration-200"
                >
                  {item.cta ?? "View →"}
                </a>
              ) : (
                item.cta && (
                  <span className="flex-shrink-0 text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {item.cta}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Accent gradient border overlay */}
          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-accent/10 to-transparent transition-opacity duration-300",
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          />
        </div>
      ))}
    </div>
  );
}

export { BentoGrid };
