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
    tags: ['Django',  'Flutter', 'PostgreSQL','DRF', 'JWT'],
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
  {
    id: 'proj-snipshare',
    title: 'SnipShare',
    description: 'VS Code extension that saves and shares code snippets as GitHub Gists; supports tagging, search, and one-click paste with privacy options.',
    image: '/snipshare.png',
    dataAiHint: 'gist based snippet sharing extension for vscode',
    tags: ['JavaScript', 'VS Code Extension', 'GitHub Gist','Node.js'],
    category: ['Dev Tool'],
    liveLink: 'https://marketplace.visualstudio.com/items?itemName=suryansh-it.snipshare-vscode-plugin',
    repoLink: 'https://github.com/suryansh-it/SnipShare'
  },
  {
    id: 'proj-emotion-detector',
    title: 'Emotion Detector',
    description: 'Real-time facial emotion recognition using OpenCV and a lightweight CNN model; includes webcam demo and emotion visualization overlays.',
    image: '/emotion-detector.png',
    dataAiHint: 'facial emotion recognition',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning'],
    category: ['ML'],
    liveLink: '',
    repoLink: 'https://github.com/suryansh-it/Emotion-Detector'
  },
  {
    id: 'proj-snakes-ladders',
    title: 'Snakes & Ladders',
    description: 'Classic board game implemented with HTML5 Canvas and JavaScript; supports multiplayer turns, animations and simple AI player.',
    image: '/snakes-and-ladders.png',
    dataAiHint: 'snakes and ladders game',
    tags: ['Python', 'Pygame'],
    category: ['Game'],
    liveLink: '',
    repoLink: 'https://github.com/suryansh-it/Snakes-and-Ladders'
  },
  // {
  //   id: 'proj-smart-yoga',
  //   title: 'Smart Yoga Assistant',
  //   description: 'Pose detection and feedback system for yoga practice using pose‑estimation models (MediaPipe/TensorFlow) to provide real‑time alignment tips and rep counting.',
  //   image: '/smart-yoga-assistant.png',
  //   dataAiHint: 'yoga pose detection assistant',
  //   tags: ['Python', 'MediaPipe', 'TensorFlow', 'Computer Vision'],
  //   category: ['ML'],
  //   liveLink: '',
  //   repoLink: 'https://github.com/suryansh-it/Smart-Yoga-Assistant'
  // },
  //     {
  //   id: 'proj-saas-starter',
  //   title: 'Smart Attendance & Analytics System',
  //   description: 'Vision‑based Flask application for attendance capture and analytics: face detection/recognition with OpenCV, storage on MongoDB Atlas, analytics using scikit‑learn and visualization via Streamlit; includes exportable reports and anomaly detection.',
  //   image: '/saas.png',
  //   dataAiHint: 'vision based attendance system',
  //   tags: ['Python', 'OpenCV', 'MongoDB', 'scikit-learn', 'Streamlit', 'Deep Learning', 'Matplotlib', 'Computer Vision'],
  //   category: ['ML'],
  //   liveLink: '',
  //   repoLink: 'https://github.com/suryansh-it/SAAS'
  // },
  // {
  //   id: 'proj-rps',
  //   title: 'Rock Paper Scissors',
  //   description: 'Browser-based Rock‑Paper‑Scissors with scorekeeping, animations and a simple AI opponent; lightweight and responsive.',
  //   image: '/rock-paper-scissors.png',
  //   dataAiHint: 'rock paper scissors game',
  //   tags: ['JavaScript', 'HTML', 'CSS'],
  //   category: ['Game', 'Web'],
  //   liveLink: 'https://rock-paper-scissors-suryansh.netlify.app/',
  //   repoLink: 'https://github.com/suryansh-it/Rock-Paper-Scissors'
  // },
  // {
  //   id: 'proj-sudoku-solver',
  //   title: 'Sudoku Solver',
  //   description: 'Interactive Sudoku solver using backtracking and optimization heuristics; supports puzzle input, validation and auto-solve.',
  //   image: '/sudoku-solver.png',
  //   dataAiHint: 'sudoku solver',
  //   tags: ['C++', 'Algorithms'],
  //   category: ['Misc'],
  //   liveLink: '',
  //   repoLink: 'https://github.com/suryansh-it/Sudoku-Solver'
  // },
  // {
  //   id: 'proj-weather-app',
  //   title: 'Weather Forecast App',
  //   description: 'Lightweight python app that consumes public weather APIs to display current conditions, hourly and 7‑day forecasts, with simple caching.',
  //   image: '/weather-forecast-app.png',
  //   dataAiHint: 'weather forecast application',
  //   tags: ['Python', 'tkinter'],
  //   category: ['Misc'],
  //   liveLink: '',
  //   repoLink: 'https://github.com/suryansh-it/Weather-Forecast-App'
  // },
  {
    id: 'proj-chrome-dino',
    title: 'Chrome Dino',
    description: 'Endless runner inspired by Chrome Dino implemented using Pygame, keyboard controls and procedural obstacles.',
    image: '/dino.png',
    dataAiHint: 'chrome dino clone',
    tags: ['Python', 'Pygame'],
    category: ['Game'],
    liveLink: '',
    repoLink: 'https://github.com/suryansh-it/Chrome-Dino'
  },
  {
    id: 'proj-flappy-bird',
    title: 'Flappy Bird',
    description: 'Flappy Bird clone with physics-based jumping, pipe obstacles and score tracking; lightweight, playable in-browser.',
    image: '/flappy.png',
    dataAiHint: 'flappy bird game',
    tags: ['Python', 'Pygame'],
    category: ['Game'],
    liveLink: '',
    repoLink: 'https://github.com/suryansh-it/flappy-bird'
  },
  // {
  //   id: 'proj-tic-tac-toe',
  //   title: 'Tic Tac Toe',
  //   description: 'Classic Tic‑Tac‑Toe with local two‑player mode and responsive UI.',
  //   image: '/tic-tac-toe.png',
  //   dataAiHint: 'tic tac toe game',
  //   tags: ['Python', 'Pygame'],
  //   category: ['Game'],
  //   liveLink: '',
  //   repoLink: 'https://github.com/suryansh-it/tic-tac-toe'
  // }
];

const filterCategories = ['All', 'Web', 'Full-Stack', 'Mobile','ML', 'Dev Tool', 'Game', 'Misc'];

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
