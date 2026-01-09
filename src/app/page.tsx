import AnimatedProgress from "@/components/atoms/animated-progress";
import React from "react";
import PreviewCard from "@/components/molecules/preview-card/preview-card";

export default function Home() {
  return (
    <section className="px-4">
      <div className="mx-auto grid max-w-screen-lg grid-cols-dynamic gap-4 xl:grid-cols-3">
        <PreviewCard
          title="Animated Progress"
          subline="AnimatedProgress.tsx"
          technologies="Next.js, TypeScript, framer-motion, Tailwind CSS"
        >
          <AnimatedProgress
            size={44}
            strokeWidth={8}
            progress={100}
            animateNumber={true}
            animateProgress={true}
          />
        </PreviewCard>
      </div>
    </section>
  );
}
