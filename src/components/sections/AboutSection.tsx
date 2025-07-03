// src/components/sections/AboutSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const textItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 items-center">
          {/* Left Column: Resume Thumbnail & Download */}
          <motion.div 
            className="md:col-span-1 flex flex-col items-center"
            variants={itemVariants}
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="block mb-4 group">
              <Image
                src="/img.png" 
                alt="Suryansh Sharma's  Thumbnail"
                width={200}
                height={200}
                className="rounded-lg shadow-2xl border-2 border-primary/50 group-hover:border-primary transition-all duration-300 group-hover:scale-105"
                data-ai-hint="image"
              />
            </Link>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary group">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          {/* Right Column: Bio */}
          <motion.div 
            className="md:col-span-2 space-y-5 text-base sm:text-lg text-foreground/90"
            variants={textItemVariants}
          >
            <p>
              I’m Suryansh Sharma, a final-year B.Tech student who’s deeply passionate about 
              building software products that solve real-world problems. Whether it's crafting 
              intuitive user interfaces, developing robust backend systems, or designing 
              full-stack architectures—I thrive on creating things that are useful, scalable, 
              and thoughtfully engineered.
            </p>
            <p>
              I enjoy the process of bringing ideas to life through code—turning concepts into 
              functional applications with clean, maintainable solutions. From small utilities 
              to full-featured platforms, I love the creative and technical challenges that 
              come with building from the ground up.
            </p>
            <p>
              I’m a strong believer in continuous learning and collaboration. Currently, I’m 
              diving deeper into DevOps and cloud technologies to better understand how to 
              ship and scale modern applications efficiently.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
