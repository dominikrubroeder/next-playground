import React, { ReactNode } from "react";

export default function PreviewCard({
  title,
  subline,
  technologies,
  children,
}: {
  title: string;
  subline: string;
  technologies: string;
  children: ReactNode;
}) {
  return (
    <div className="relative rounded border border-border p-4">
      <div className="absolute right-4 top-4 space-x-2 text-xs">
        <span>Preview</span>
        <span className="text-muted-foreground">Code</span>
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
