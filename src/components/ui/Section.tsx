"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section
      {...props}
      className={cn(
        "container mx-auto px-6 xl:px-[200px] lg:px-30 py-12 border-b border-gray-800 relative",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
