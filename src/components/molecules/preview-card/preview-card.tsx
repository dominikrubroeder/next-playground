import React, { ReactNode } from "react";
import { PreviewCode } from "@/components/molecules/preview-card/preview-code";

export default function PreviewCard({
  title,
  subline,
  technologies,
  children,
  code,
}: {
  title: string;
  subline: string;
  technologies: string;
  children: ReactNode;
  code?: ReactNode;
}) {
  return (
    <div className="relative rounded border border-border p-4">
      <div className="absolute right-2 top-2 space-x-2 text-xs">
        <PreviewCode code={code} />
      </div>
      <div className="flex size-32 w-full items-center justify-center">
        {children}
      </div>
      <div className="space-y-2">
        <div>
          <h2 className="font-bold">{title}</h2>
          <p className="text-muted-foreground">{subline}</p>
          <p>{technologies}</p>
        </div>

        <div>
          <ul className="flex flex-wrap gap-2">
            <li>GitHub</li>
            <li>v0.dev</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
