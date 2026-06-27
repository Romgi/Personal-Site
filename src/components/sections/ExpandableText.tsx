"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type ExpandableTextProps = {
  shortText: string;
  expandedText: readonly string[];
};

export function ExpandableText({
  shortText,
  expandedText,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-3xl">
      <p className="text-lg leading-8 text-slate-300">{shortText}</p>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 pt-5">
            {expandedText.map((paragraph) => (
              <p key={paragraph} className="leading-7 text-slate-400">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-300/40 hover:bg-blue-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        onClick={() => setIsExpanded((value) => !value)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? "Show less" : "Read more"}
        <ChevronDown
          aria-hidden="true"
          size={16}
          className={cn("transition", isExpanded && "rotate-180")}
        />
      </button>
    </div>
  );
}
