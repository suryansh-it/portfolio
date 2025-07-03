// src/components/sections/ProjectsSection.tsx
"use client";

import { useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import type { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const USER_PROJECTS: Project[] = [
  {
    id: 'proj-medveda',
    title: 'MedVeda',
    description: 'Wellness‑focused Ayurvedic home remedy platform with Django REST backend (JWT‑secured), PostgreSQL, Redis caching, Celery tasks, and a Next.js frontend for intuitive browsing.',
    image: '/medveda.png',
    dataAiHint: 'ayurvedic remedy platform',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'JWT', 'Next.js'],
    category:  ['Full-Stack', 'Web'],
    liveLink: '',
    repoLink: 'https://github.com/suryansh-it/MedVeda'
  },
  {
    id: 'proj-unbind',
    title: 'Unbind',
    description: 'eBook downloader & reader app with Django REST Framework and PostgreSQL APIs for search and metadata scraping, plus a cross‑platform Flutter frontend with offline .epub support.',
    image: '/unbind.png',
    dataAiHint: 'ebook reader app',
    tags: ['Django',  'Flutter', 'PostgreSQL',"DRF", 'JWT'],
    category: ['Mobile'],
    liveLink: '',
    repoLink: 'https://github.com/suryansh-it/un-bind'
  },
  {
    id: 'proj-tripbozo',
    title: 'tripbozo',
    description: 'Full‑stack Travel Utility SaaS delivering country‑verified essentials without signup; built with Next.js frontend, Django REST, Redis sessions, Celery QR code generation, and deployed on Vercel & Render.',
    image: '/tripbozo.png',
    dataAiHint: 'travel utility saas',
    tags: ['Next.js', 'Django', 'PostgreSQL', 'Redis', 'Celery', 'QR Code'],
    category: ['Full-Stack', 'Web'],
    liveLink: 'https://tripbozo.com',
    repoLink: 'https://github.com/suryansh-it/TravelBuddy'
  },
];

const filterCategories = ['All', 'Web', 'Full-Stack', 'Mobile'];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? USER_PROJECTS
    : USER_PROJECTS.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text">
          My Work
        </h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12">
          {filterCategories.map(category => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 py-2 text-sm sm:text-base transition-all duration-300 ${activeFilter === category ? 'bg-primary text-primary-foreground shadow-lg' : 'border-primary text-primary hover:bg-primary/10'}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length === 0 && (
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-center text-muted-foreground mt-8 text-lg"
           >
             No projects found for this category. More coming soon!
           </motion.p>
        )}
      </motion.div>
    </section>
  );
}
