"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = { id: string; question: string; answer: string };

export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const uid = useId();

  return (
    <div className={cn("divide-y divide-plum/15 border-y border-plum/15", className)}>
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${uid}-${item.id}-panel`;
        const btnId = `${uid}-${item.id}-btn`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-xl text-plum sm:text-2xl">{item.question}</span>
                <Plus
                  aria-hidden
                  size={22}
                  className={cn("shrink-0 text-gold-dark transition-transform duration-300", open && "rotate-45")}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden" inert={!open}>
                <p className="max-w-3xl pb-6 leading-relaxed text-taupe-dark">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
